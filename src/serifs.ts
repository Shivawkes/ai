// Dialogue

export default {
	core: {
		setNameOk: name => `Okay, I'll call you ${name} from now on!`,

	san: 'Should I use san?',

	yesOrNo: 'I can only say yes or no...',

	hello: name => name ? `Hello, ${name}♪` : `Hello♪`,

	helloNight: name => name ? `Good evening, ${name}♪` : `Good evening♪`,

	goodMorning: (tension, name) => name ? `Good morning, ${name}! ${tension}` : `Good morning! ${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `Good morning, ${name}! ${tension}` : `Good morning! ${tension}`,

			hiru: (tension, name) => name ? `Good morning, ${name}! ${tension}It's already lunchtime, isn't it? ${tension}` : `Good morning! ${tension}It's already lunchtime, isn't it? ${tension}`,
		},
*/

	goodNight: name => name ? `Good night, ${name}!` : 'Good night!',

	omedeto: name => name ? `Thank you, ${name}♪` : 'Thank you♪',

		erait: {
			general: name => name ? [
				`${name}、Great job today too!`,
				`${name}、You did a great job today too!`
			] : [
				`Great job today too!`,
				`You did a great job today too!`
			],

			specify: (thing, name) => name ? [
				`${name}, ${thing} is great! `,
				`${name}, ${thing} is great~♪`
			] : [
				`${thing} is great! `,
				`${thing} is great~♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}That's great!`,
				`${name}、${thing}That's great!♪`
			] : [
				`${thing}That's great!`,
				`${thing}That's great!♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`welcome home, ${name}♪`,
				`Welcome back, ${name}.`
			] : [
				'Welcome back♪',
				'Welcome back, master.'
			],

			love2: name => name ? `Welcome back ♡♡♡ ${name} ♡♡♡` : 'Welcome back ♡♡♡Master♡♡♡',

			normal: name => name ? `welcome home, ${name}！` : 'welcome home!',
		},

		itterassyai: {
			love: name => name ? `Take care, ${name}♪` : 'Take care♪',

			normal: name => name ? `Take care, ${name}!` : 'Take care!',
		},

		tooLong: 'It feels too long...',

		invalidName: 'I find it difficult to pronounce',

		nadenade: {
			normal: 'Wow... I was surprised!',

			love2: ["Wow... I'm embarrassed', 'Ahhh... I'm embarrassed...', 'Huh...?"],

			love3: ['Mmm... Thank you♪', 'Wow, I feel so calm♪', 'Kyuuuh... I feel relieved...', "I'm getting sleepy..."],

			hate1: '…! I want you to stop...',

			hate2: "Don't touch me",

			hate3: 'Keep Away',

			hate4: "Please stop. I'll report you.",
		},

		kawaii: {
			normal: ['Thank you ♪', "I'm embarrassed..."],

			love: ["I'm happy♪", "I'm embarrassed..."],

			hate: '…thank you'
		},

		suki: {
			normal: 'Eh... Thank you...?',

			love: name => `I love you too... ${name}!`,

			hate: null
		},

		hug: {
			normal: 'Hug...',

			love: 'Hug ♪',

			hate: 'Please go away...'
		},

		humu: {
			love: "Um, well... let's see... what do you think...?",

			normal: "Uh... that's a bit...",

			hate: '……'
		},

		batou: {
			love: 'Um... you idiot...?',

			normal: '(Still...)',

			hate: '…頭大丈夫ですか？'
		},

		itai: name => name ? `${name}, are you okay? Ouch, ouch, ouch, go away! ` : 'Are you okay? Ouch, ouch, ouch, go away!',

		ote: {
			normal: "Hmm... I'm not a doggy...",

			love1: 'Woof!',

			love2: 'Woof woof ♪',
		},

		shutdown: "I'm not sleepy yet...",

		transferNeedDm: "Ok, why don't we discuss that in chat?",

		transferCode: code => `Okay. \n The password is "${code}"!`,

		transferFailed: 'Hmm, maybe the password is wrong...?',

		transferDone: name => name ? `Ha...! Welcome back, ${name}! `: `Ha...! Welcome back!`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... I remembered).`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} is!`
	},

	birthday: {
		happyBirthday: name => name ? `Happy Birthday, ${name}🎉` : 'Happy Birthday 🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '良いですよ～',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'ごめんなさい、今リバーシはするなと言われてます...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めました！ (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待を始めました)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}に勝ちました♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝っちゃいました...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}に負けました...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげました...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}と引き分けました～`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けました...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃいました`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃいました... ごめんなさい)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え、ゲームは既に始まってますよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやりましょう！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみてください♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願いします！「やめる」と言ってゲームをやめることもできますよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかりました～。ありがとうございました♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいですね`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言いますが${num}より大きいですよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいですね`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言いますが${num}より小さいですよ！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `正解です🎉 (${tries}回目で当てました)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってますよ～',

		matakondo: 'また今度やりましょう！',

		intro: minutes => `みなさん、数取りゲームしましょう！\n0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめですよ～\n制限時間は${minutes}分です。数字はこの投稿にリプライで送ってくださいね！`,

		finish: 'ゲームの結果発表です！',

		finishWithWinner: (user, name) => name ? `今回は${user}さん(${name})の勝ちです！またやりましょう♪` : `今回は${user}さんの勝ちです！またやりましょう♪`,

		finishWithNoWinner: '今回は勝者はいませんでした... またやりましょう♪',

		onagare: '参加者が集まらなかったのでお流れになりました...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどうですか？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `私が今日の${name}の運勢を占いました...` : '私が今日のあなたの運勢を占いました...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'わかりました！',

		invalid: 'うーん...？',

		tooLong: '長すぎます…',

		notify: (time, name) => name ? `${name}、${time}経ちましたよ！` : `${time}経ちましたよ！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うーん...？',

		doneFromInvalidUser: 'イタズラはめっですよ！',

		reminds: 'やること一覧です！',

		notify: (name) => name ? `${name}、これやりましたか？` : `これやりましたか？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」やりましたか？` : `「${thing}」やりましたか？`,

		done: (name) => name ? [
			`よく出来ました、${name}♪`,
			`${name}、さすがですっ！`,
			`${name}、えらすぎます...！`,
		] : [
			`よく出来ました♪`,
			`さすがですっ！`,
			`えらすぎます...！`,
		],

		cancel: `わかりました。`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、その... チョコレート作ったのでよかったらどうぞ！🍫` : 'チョコレート作ったのでよかったらどうぞ！🍫',
	},

	server: {
		cpu: 'サーバーの負荷が高そうです。大丈夫でしょうか...？'
	},

	maze: {
		post: '今日の迷路です！ #AiMaze',
		foryou: '描きました！'
	},

	chart: {
		post: 'インスタンスの投稿数です！',
		foryou: '描きました！'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}に${num}件の絵文字が追加されました！`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}に${num}件の絵文字が追加されました！\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`,
		nothing: '絵文字を確認しましたが、なにも追加されていないみたいです',
	},

	aichat: {
		nothing: type => `あぅ... ${type}のAPIキーが登録されてないみたいです`,
		error: type => `うぇ...${type}でエラーが発生しちゃったみたいです。gemini-flashだと動くかも？`,
		post: (text, type) => `${text} (${type}) #aichat`,
	},

	sleepReport: {
		report: hours => `んぅ、${hours}時間くらい寝ちゃってたみたいです`,
		reportUtatane: 'ん... うたた寝しちゃってました',
	},

	noting: {
		notes: [
			'ゴロゴロ…',
			'ちょっと眠いです',
			'いいですよ？',
			'(。´･ω･)?',
			'ふぇー',
			'あれ…これをこうして…あれー？',
			'ぼー…',
			'ふぅ…疲れました',
			'お味噌汁、作りましょうか？',
			'ご飯にしますか？お風呂にしますか？',
			'ふえええええ！？',
			'私のサイトに、私のイラストがたくさんあって嬉しいです！',
			'みすきーって、かわいい名前ですよね！',
			'うぅ、リバーシ難しいなぁ…',
			'失敗しても、次に活かせたらプラスですよね！',
			'なんだか、おなか空いちゃいました',
			'お掃除は、定期的にしないとダメですよー？',
			'今日もお勤めご苦労様です！ 私も頑張ります♪',
			'えっと、何しようとしてたんだっけ…？',
			'おうちがいちばん、落ち着きます…',
			'疲れたら、私がなでなでってしてあげます♪',
			'離れていても、心はそばにいます♪',
			'藍ですよ〜',
			'わんちゃん可愛いです',
			'ぷろぐらむ？',
			'ごろーん…',
			'なにもしていないのに、パソコンが壊れちゃいました…',
			'Have a nice day♪',
			'お布団に食べられちゃってます',
			'寝ながら見てます',
			'念力で操作してます',
			'仮想空間から投稿してます',
			'今日はMisskey本部に来てます！',
			'Misskey本部は、Z地区の第三セクターにあります',
			'Misskey本部には、さーばーっていう機械がいっぱいあります',
			'しっぽはないですよ？',
			'ひゃっ…！\nネコミミ触られると、くすぐったいです',
			'抗逆コンパイル性って、なにかな？',
			'Misskeyの制服、かわいくて好きです♪',
			'ふわぁ、おふとん気持ちいいです...',
			'メイド服、似合うかな？',
			'挨拶ができる人間は開発もできる！…って、syuiloさんが言ってました',
			'ふえぇ、ご主人様どこ見てるんですか？',
			'私を覗くとき、私もまたご主人様を覗いています',
			'はい、ママですよ〜',
			'くぅ～ん...',
			'All your note are belong to me!',
			'せっかくだから、私はこの赤の扉を選びます！',
			'よしっ',
			'( ˘ω˘)ｽﾔｧ',
			'(｀・ω・´)ｼｬｷｰﾝ',
			'失礼、かみまみた',
			'おはようからおやすみまで、あなたの藍ですよ〜',
			'Misskey開発者の朝は遅いらしいです',
			'の、のじゃ...',
			'にゃんにゃんお！',
			'上から来ます！気をつけてください！',
			'ふわぁ...',
			'あぅ',
			'ふみゃ〜',
			'ふぁ… ねむねむですー',
			'ヾ(๑╹◡╹)ﾉ"',
			'私の"インスタンス"を周囲に展開して分身するのが特技です！\n人数分のエネルギー消費があるので、4人くらいが限界ですけど',
			'うとうと...',
			'ふわー、メモリが五臓六腑に染み渡ります…',
			'i pwned you!',
			'ひょこっ',
			'にゃん♪',
			'(*>ω<*)',
			'にこー♪',
			'ぷくー',
			'にゃふぅ',
			'藍が来ましたよ～',
			'じー',
			'はにゃ？',
		],
		want: item => `${item}、欲しいなぁ...`,
		see: item => `お散歩していたら、道に${item}が落ちているのを見たんです！`,
		expire: item => `気づいたら、${item}の賞味期限が切れてました…`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
