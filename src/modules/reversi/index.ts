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
	 * リバーシストリーム
	 */
	private reversiConnection?: any;

	@bindThis
	public install() {
		if (!config.reversiEnabled) return {};

		this.reversiConnection = this.ai.connection.useSharedConnection('reversi');

		// 招待されたとき
		this.reversiConnection.on('invited', msg => this.onReversiInviteMe(msg.user));

		// マッチしたとき
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
		if (msg.includes(['リバーシ', 'オセロ', 'reversi', 'othello'])) {
			if (config.reversiEnabled) {
				msg.reply(serifs.reversi.ok);

				if (msg.includes(['play a game'])) {
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
			// Approval
			const game = await this.ai.api('reversi/match', {
				userId: inviter.id
			});

			this.onReversiGameStart(game);
		} else {
			// todo (Send a message saying that you can't reverse the game.)
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

		// Forms
		const form = [{
			id: 'publish',
			type: 'switch',
			label: '藍が対局情報を投稿するのを許可',
			value: true,
		}, {
			id: 'strength',
			type: 'radio',
			label: '強さ',
			value: strength,
			items: [{
				label: '接待',
				value: 0
			}, {
				label: '弱',
				value: 2
			}, {
				label: '中',
				value: 3
			}, {
				label: '強',
				value: 4
			}, {
				label: '最強',
				value: 5
			}]
		}];

		//#region Backend process started
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

		// Accepts any game setting
		setTimeout(() => {
			gw.send('ready', true);
		}, 1000);
	}

	@bindThis
	private onGameEnded(game: any) {
		const user = game.user1Id == this.ai.account.id ? game.user2 : game.user1;

		//#region Increases intimacy once a day
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
