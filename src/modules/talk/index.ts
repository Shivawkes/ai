import { bindThis } from '@/decorators.js';
import { HandlerResult } from '@/ai.js';
import Module from '@/module.js';
import Message from '@/message.js';
import serifs, { getSerif } from '@/serifs.js';
import getDate from '@/utils/get-date.js';

export default class extends Module {
	public readonly name = 'talk';

	@bindThis
	public install() {
		return {
			mentionHook: this.mentionHook,
		};
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (!msg.text) return false;

		return (
			this.greet(msg) ||
			this.erait(msg) ||
			this.omedeto(msg) ||
			this.nadenade(msg) ||
			this.kawaii(msg) ||
			this.suki(msg) ||
			this.hug(msg) ||
			this.humu(msg) ||
			this.batou(msg) ||
			this.itai(msg) ||
			this.ote(msg) ||
			this.ponkotu(msg) ||
			this.rmrf(msg) ||
			this.shutdown(msg)
		);
	}

	@bindThis
	private greet(msg: Message): boolean {
		if (msg.text == null) return false;

		const incLove = () => {
			//#region Increase your affection level once a day
			const today = getDate();

			const data = msg.friend.getPerModulesData(this);

			if (data.lastGreetedAt == today) return;

			data.lastGreetedAt = today;
			msg.friend.setPerModulesData(this, data);

			msg.friend.incLove();
			//#endregion
		};

		// Trailing exclamation mark
		const tension = (msg.text.match(/[！!]{2,}/g) || [''])
			.sort((a, b) => a.length < b.length ? 1 : -1)[0]
			.substr(1);

		if (msg.includes(['Hello', 'Good afternoon'])) {
			msg.reply(serifs.core.hello(msg.friend.name));
			incLove();
			return true;
		}

		if (msg.includes(['Good evening', 'Good evening'])) {
			msg.reply(serifs.core.helloNight(msg.friend.name));
			incLove();
			return true;
		}

		if (msg.includes(['Good morning', 'Good morning', 'Good morning'])) {
			msg.reply(serifs.core.goodMorning(tension, msg.friend.name));
			incLove();
			return true;
		}

		if (msg.includes(['Good night', 'Good night'])) {
			msg.reply(serifs.core.goodNight(msg.friend.name));
			incLove();
			return true;
		}

		if (msg.includes(["I'm going", "I'm leaving", "I'm coming", "I'm leaving"])) {
			msg.reply(
				msg.friend.love >= 7
					? serifs.core.itterassyai.love(msg.friend.name)
					: serifs.core.itterassyai.normal(msg.friend.name));
			incLove();
			return true;
		}

		if (msg.includes(["I'm home"])) {
			msg.reply(
				msg.friend.love >= 15 ? serifs.core.okaeri.love2(msg.friend.name) :
				msg.friend.love >= 7 ? getSerif(serifs.core.okaeri.love(msg.friend.name)) :
				serifs.core.okaeri.normal(msg.friend.name));
			incLove();
			return true;
		}

		return false;
	}

	@bindThis
	private erait(msg: Message): boolean {
		const match = msg.extractedText.match(/(.+?)So, I praise you.);
		if (match) {
			msg.reply(getSerif(serifs.core.erait.specify(match[1], msg.friend.name)));
			return true;
		}

		const match2 = msg.extractedText.match(/(.+?)る(から|ので)(褒|ほ)めて/);
		if (match2) {
			msg.reply(getSerif(serifs.core.erait.specify(match2[1], msg.friend.name)));
			return true;
		}

		const match3 = msg.extractedText.match(/(.+?)だから(褒|ほ)めて/);
		if (match3) {
			msg.reply(getSerif(serifs.core.erait.specify(match3[1], msg.friend.name)));
			return true;
		}

		if (!msg.includes(['Praise me', 'Praise me'])) return false;

		msg.reply(getSerif(serifs.core.erait.general(msg.friend.name)));

		return true;
	}

	@bindThis
	private omedeto(msg: Message): boolean {
		if (!msg.includes(['Congratulations'])) return false;

		msg.reply(serifs.core.omedeto(msg.friend.name));

		return true;
	}

	@bindThis
	private nadenade(msg: Message): boolean {
		if (!msg.includes(['Petting'])) return false;

		//#region Increases affection once a day (only if not disliked)
		if (msg.friend.love >= 0) {
			const today = getDate();

			const data = msg.friend.getPerModulesData(this);

			if (data.lastNadenadeAt != today) {
				data.lastNadenadeAt = today;
				msg.friend.setPerModulesData(this, data);

				msg.friend.incLove();
			}
		}
		//#endregion

		msg.reply(getSerif(
			msg.friend.love >= 10 ? serifs.core.nadenade.love3 :
			msg.friend.love >= 5 ? serifs.core.nadenade.love2 :
			msg.friend.love <= -15 ? serifs.core.nadenade.hate4 :
			msg.friend.love <= -10 ? serifs.core.nadenade.hate3 :
			msg.friend.love <= -5 ? serifs.core.nadenade.hate2 :
			msg.friend.love <= -1 ? serifs.core.nadenade.hate1 :
			serifs.core.nadenade.normal
		));

		return true;
	}

	@bindThis
	private kawaii(msg: Message): boolean {
		if (!msg.includes(['Cute', 'Lovely'])) return false;

		msg.reply(getSerif(
			msg.friend.love >= 5 ? serifs.core.kawaii.love :
			msg.friend.love <= -3 ? serifs.core.kawaii.hate :
			serifs.core.kawaii.normal));

		return true;
	}

	@bindThis
	private suki(msg: Message): boolean {
		if (!msg.or(['I like it', 'I like it'])) return false;

		msg.reply(
			msg.friend.love >= 5 ? (msg.friend.name ? serifs.core.suki.love(msg.friend.name) : serifs.core.suki.normal) :
			msg.friend.love <= -3 ? serifs.core.suki.hate :
			serifs.core.suki.normal);

		return true;
	}

	@bindThis
	private hug(msg: Message): boolean {
		if (!msg.or(['ぎゅ', 'むぎゅ', /^はぐ(し(て|よ|よう)?)?$/])) return false;

		//#region 前のハグから1分経ってない場合は返信しない
		// これは、「ハグ」と言って「ぎゅー」と返信したとき、相手が
		// それに対してさらに「ぎゅー」と返信するケースがあったため。
		// そうするとその「ぎゅー」に対してもマッチするため、また
		// 藍がそれに返信してしまうことになり、少し不自然になる。
		// これを防ぐために前にハグしてから少し時間が経っていないと
		// 返信しないようにする
		const now = Date.now();

		const data = msg.friend.getPerModulesData(this);

		if (data.lastHuggedAt != null) {
			if (now - data.lastHuggedAt < (1000 * 60)) return true;
		}

		data.lastHuggedAt = now;
		msg.friend.setPerModulesData(this, data);
		//#endregion

		msg.reply(
			msg.friend.love >= 5 ? serifs.core.hug.love :
			msg.friend.love <= -3 ? serifs.core.hug.hate :
			serifs.core.hug.normal);

		return true;
	}

	@bindThis
	private humu(msg: Message): boolean {
		if (!msg.includes(['Step on it'])) return false;

		msg.reply(
			msg.friend.love >= 5 ? serifs.core.humu.love :
			msg.friend.love <= -3 ? serifs.core.humu.hate :
			serifs.core.humu.normal);

		return true;
	}

	@bindThis
	private batou(msg: Message): boolean {
		if (!msg.includes(['Insulting', 'insulting'])) return false;

		msg.reply(
			msg.friend.love >= 5 ? serifs.core.batou.love :
			msg.friend.love <= -5 ? serifs.core.batou.hate :
			serifs.core.batou.normal);

		return true;
	}

	@bindThis
	private itai(msg: Message): boolean {
		if (!msg.or(['It hurts', 'It hurts']) && !msg.extractedText.endsWith('it hurts')) return false;

		msg.reply(serifs.core.itai(msg.friend.name));

		return true;
	}

	@bindThis
	private ote(msg: Message): boolean {
		if (!msg.or(['Hand'])) return false;

		msg.reply(
			msg.friend.love >= 10 ? serifs.core.ote.love2 :
			msg.friend.love >= 5 ? serifs.core.ote.love1 :
			serifs.core.ote.normal);

		return true;
	}

	@bindThis
	private ponkotu(msg: Message): boolean | HandlerResult {
		if (!msg.includes(['clumsy'])) return false;

		msg.friend.decLove();

		return {
			reaction: 'angry'
		};
	}

	@bindThis
	private rmrf(msg: Message): boolean | HandlerResult {
		if (!msg.includes(['rm -rf'])) return false;

		msg.friend.decLove();

		return {
			reaction: 'angry'
		};
	}

	@bindThis
	private shutdown(msg: Message): boolean | HandlerResult {
		if (!msg.includes(['shutdown'])) return false;

		msg.reply(serifs.core.shutdown);

		return {
			reaction: 'confused'
		};
	}
}
