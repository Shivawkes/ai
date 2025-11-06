import * as childProcess from 'child_process';
import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';
import config from '@/config.js';
import Message from '@/message.js';
import Friend from '@/friend.js';
import getDate from '@/utils/get-date.js';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

export default class extends Module {
	public readonly name = 'reversi';

	/**
	 * Reversi Stream
	 */
	private reversiConnection?: any;

	@bindThis
	public install() {
		if (!config.reversiEnabled) return {};

		this.reversiConnection = this.ai.connection.useSharedConnection('reversi');

		// When invited
		this.reversiConnection.on('invited', msg => this.onReversiInviteMe(msg.user));

		// When a match occurs
		this.reversiConnection.on('matched', msg => this.onReversiGameStart(msg.game));

		if (config.reversiEnabled) {
			const mainStream = this.ai.connection.useSharedConnection('main');
			mainStream.on('pageEvent', msg => {
				if (msg.event === 'inviteReversi') {
					this.ai.api('games/reversi/match', {
						userId: msg.user.id
					});
				}
			});
		}

		return {
			mentionHook: this.mentionHook
		};
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (msg.includes(['Reversi', 'Othello', 'reversi', 'othello'])) {
			if (config.reversiEnabled) {
				msg.reply(serifs.reversi.ok);

				if (msg.includes(['reception'])) {
					msg.friend.updateReversiStrength(0);
				}

				this.ai.api('reversi/match', {
					userId: msg.userId
				});
			} else {
				msg.reply(serifs.reversi.decline);
			}

			return true;
		} else {
			return false;
		}
	}

	@bindThis
	private async onReversiInviteMe(inviter: any) {
		this.log(`Someone invited me: @${inviter.username}`);

		if (config.reversiEnabled) {
			// admit
			const game = await this.ai.api('reversi/match', {
				userId: inviter.id
			});

			this.onReversiGameStart(game);
		} else {
			// todo (For example, send a message saying that you can't reversi)
		}
	}

	@bindThis
	private onReversiGameStart(game: any) {
		let strength = 4;
		const friend = this.ai.lookupFriend(game.user1Id !== this.ai.account.id ? game.user1Id : game.user2Id)!;
		if (friend != null) {
			strength = friend.doc.reversiStrength ?? 4;
			friend.updateReversiStrength(null);
		}

		this.log(`enter reversi game room: ${game.id}`);

		// Connect to a game stream
		const gw = this.ai.connection.connectToChannel('reversiGame', {
			gameId: game.id
		});

		// Form
		const form = [{
			id: 'publish',
			type: 'switch',
			label: 'Allow Ai to post game information',
			value: true,
		}, {
			id: 'strength',
			type: 'radio',
			label: 'Strength',
			value: strength,
			items: [{
				label: 'reception',
				value: 0
			}, {
				label: 'weak',
				value: 2
			}, {
				label: 'middle',
				value: 3
			}, {
				label: 'powerful',
				value: 4
			}, {
				label: 'strongest',
				value: 5
			}]
		}];

		//#region backend process start
		const ai = childProcess.fork(_dirname + '/back.js');

		// Passing information to a backend process
		ai.send({
			type: '_init_',
			body: {
				game: game,
				form: form,
				account: this.ai.account
			}
		});

		ai.on('message', (msg: Record<string, any>) => {
			if (msg.type == 'putStone') {
				gw.send('putStone', {
					pos: msg.pos,
					id: msg.id,
				});
			} else if (msg.type == 'ended') {
				gw.dispose();

				this.onGameEnded(game);
			}
		});

		// When information comes in from the game stream, it is passed directly to the backend process.
		gw.addListener('*', message => {
			ai.send(message);

			if (message.type === 'updateSettings') {
				if (message.body.key === 'canPutEverywhere') {
					if (message.body.value === true) {
						gw.send('ready', false);
					} else {
						gw.send('ready', true);
					}
				}
			}
		});
		//#endregion

		// Accepts any game settings
		setTimeout(() => {
			gw.send('ready', true);
		}, 1000);
	}

	@bindThis
	private onGameEnded(game: any) {
		const user = game.user1Id == this.ai.account.id ? game.user2 : game.user1;

		//#region Increase your affection level once a day
		const today = getDate();

		const friend = new Friend(this.ai, { user: user });

		const data = friend.getPerModulesData(this);

		if (data.lastPlayedAt != today) {
			data.lastPlayedAt = today;
			friend.setPerModulesData(this, data);

			friend.incLove();
		}
		//#endregion
	}
}
