// Dialogue

export default {
	core: {
		setNameOk: name => `I understand. From now on${name}I'll call you that!`,

		san: 'Should I use "san"?',

		yesOrNo: 'I only know "yes" or "no"...',

		hello: name => name ? `Hello、${name}♪` : `Hello♪`,

		helloNight: name => name ? `Good evening、${name}♪` : `Good evening♪`,

		goodMorning: (tension, name) => name ? `good morning、${name}！${tension}` : `good morning！${tension}`,

		/*
		goodMorning: {
normal: (tension, name) => name ? `Good morning, ${name}! ${tension}` : `Good morning! ${tension}`,

hiru: (tension, name) => name ? `Good morning, ${name}! ${tension}Is it lunchtime already? ${tension}` : `Good morning! ${tension}Is it lunchtime already? ${tension}`,
		},
*/

		goodNight: name => name ? `good night、${name}！` : 'good night！',

		omedeto: name => name ? `thank you、${name}♪` : 'thank you♪',

		erait: {
			general: name => name ? [
				`${name}、Today is also great！`,
				`${name}、You're doing great today too!♪`
			] : [
				`Today is also great！`,
				`You're doing great today too!♪`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}That's great！`,
				`${name}、${thing}That's great!♪`
			] : [
				`${thing}That's great！`,
				`${thing}That's great!♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}That's great！`,
				`${name}、${thing}That's great!♪`
			] : [
				`${thing}That's great！`,
				`${thing}That's great!♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`welcome home、${name}♪`,
				`Welcome back、${name}っ。`
			] : [
				'welcome home♪',
				'Welcome back、 Master. '
			],

			love2: name => name ? `Welcome back♡♡♡${name}っっ♡♡♡♡♡` : 'Welcome back♡♡♡Master!♡♡♡♡♡',

			normal: name => name ? `welcome home、${name}！` : 'welcome home！',
		},

		itterassyai: {
			love: name => name ? `Take care、${name}♪` : 'Take care♪',

			normal: name => name ? `Take care、${name}！` : 'Take care！',
		},

		tooLong: "I feel like it's too long...",

		invalidName: 'I find it difficult to pronounce',

		nadenade: {
			normal: 'Whoa...！ I was surprised',

			love2: ['Wow... I am embarrassed', 'Aaah... It is embarrassing...', 'Fuyaa...？'],

			love3: ['Hmm... thank you♪', 'Wow、 It somehow calms me down.♪', 'Hmm... I feel relieved...', "I'm getting sleepy..."],

			hate1: "…！ I wish you'd stop...",

			hate2: "Don't touch me",

			hate3: 'Please stay away',

			hate4: "Please stop. I'll report you.",
		},

		kawaii: {
			normal: ['thank you♪', "I'm embarrassed..."],

			love: ["I'm happy♪", "I'm embarrassed..."],

			hate: '…thank you'
		},

		suki: {
			normal: 'Um... thank you...♪',

			love: name => `Me too... ${name}I like that！`,

			hate: null
		},

		hug: {
			normal: 'Hug...',

			love: 'Hug♪',

			hate: 'Please move away...'
		},

		humu: {
			love: 'Um, well... step by step... how about it...？',

			normal: "Well... that's a bit...",

			hate: '……'
		},

		batou: {
			love: 'Um... you idiot...',

			normal: 'Still...',

			hate: '...Is your head okay？'
		},

		itai: name => name ? `${name}、OK…？ Ouch, ouch, fly away!` : 'OK…？ Ouch, ouch, fly away!',

		ote: {
			normal: "Hmm... I'm not a dog...",

			love1: 'Woof！',

			love2: 'Woof woof♪',
		},

		shutdown: "I'm not sleepy yet...",

		transferNeedDm: "Ok, let's talk about that in chat.",

		transferCode: code => `got it. \nThe password is 「${code}」！`,

		transferFailed: 'Hmm, maybe the password is wrong...？',

		transferDone: name => name ? `Ha...! Welcome back、${name}！` : `Ha...! Welcome back!`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... I remembered)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} is！`
	},

	birthday: {
		happyBirthday: name => name ? `happy birthday、${name}🎉` : 'happy birthday🎉',
	},

	/**
	 * Reversi
	 */
	reversi: {
		/**
		 * When accepting an invitation to play Reversi
		 */
		ok: "It's good~",

		/**
		 * When to turn down an invitation to play Reversi
		 */
		decline: "Sorry, I'm told not to play Reversi right now...",

		/**
		 * The game begins
		 */
		started: (name, strength) => `A game${name}I started with！ (Strength${strength})`,

		/**
		 * Start of entertainment
		 */
		startedSettai: name => `(${name}We started entertaining)`,

		/**
		 * When you win
		 */
		iWon: name => `${name}won the♪`,

		/**
		 * When you win while intending to entertain
		 */
		iWonButSettai: name => `(${name}I won the entertainment...)`,

		/**
		 * When you lose
		 */
		iLose: name => `${name}I lost to...`,

		/**
		 * When I lost at a business dinner
		 */
		iLoseButSettai: name => `(${name}I gave in to the entertainment...♪)`,

		/**
		 * When the game ends in a draw
		 */
		drawn: name => `${name}It ended in a draw`,

		/**
		 * When the game ends in a draw during entertainment
		 */
		drawnSettai: name => `(${name}We drew at a reception...)`,

		/**
		 * When your opponent resigns
		 */
		youSurrendered: name => `${name}But I gave up.`,

		/**
		 * When your opponent resigns while you are entertaining them
		 */
		settaiButYouSurrendered: name => `(${name}I was entertaining him and he ended up resigning... sorry)`,
	},

	/**
	 * Number guessing game
	 */
	guessingGame: {
		/**
		 * When you are told to do something but you are already doing it
		 */
		alreadyStarted: 'Well, the game has already begun！',

		/**
		 * When you are invited on the timeline
		 */
		plzDm: "Let's do it in a message！",

		/**
		 * Game Start
		 */
		started: '0~100 Guess the secret number♪',

		/**
		 * When you get a reply that isn't a number
		 */
		nan: 'Please use numbers！「stop」You can also quit the game by saying！',

		/**
		 * When a request to stop
		 */
		cancel: 'I understand. Thank you very much.',

		/**
		 * When you are told a small number
		 */
		grater: num => `${num}It's bigger`,

		/**
		 * When a small number is said (second time)
		 */
		graterAgain: num => `I'll say it again${num}It's bigger！`,

		/**
		 * When a large number is said
		 */
		less: num => `${num}It's smaller`,

		/**
		 * When a large number is said (second time)
		 */
		lessAgain: num => `I'll say it again${num}It's smaller！`,

		/**
		 * When you get the answer right
		 */
		congrats: tries => `That's correct.🎉 (${tries}I got it right the first time`,
	},

	/**
	 * Counting game
	 */
	kazutori: {
		alreadyStarted: "I'm just doing it now",

		matakondo: "Let's do it again next time！",

		intro: minutes => `Let's play a counting game, everyone！\n0~100The person who gets the highest number wins. Don't overlap with someone else's number!\nThe time limit is${minutes}Minutes. Please reply to this post with the number.`,

		finish: 'The results of the game are announced！',

		finishWithWinner: (user, name) => name ? `This time${user}Mr. Miss.(${name})Win! Let's do it again!` : `This time${user}'s win! Let's do it again!`,

		finishWithNoWinner: "No winner this time... Let's do it again",

		onagare: 'It was cancelled due to lack of participants...'
	},

	/**
	 * Emoji generation
	 */
	emoji: {
		suggest: emoji => `How about this？→${emoji}`,
	},

	/**
	 * fortune telling
	 */
	fortune: {
		cw: name => name ? `I am today${name}I predicted the fortune of...` : 'I have read your fortune for today...',
	},

	/**
	 * timer
	 */
	timer: {
		set: 'got it！',

		invalid: 'Hmm...',

		tooLong: "It's too long...",

		notify: (time, name) => name ? `${name}、${time}It's been a while！` : `${time}It's been a while！`
	},

	/**
	 * Reminders
	 */
	reminder: {
		invalid: 'Hmm...',

		doneFromInvalidUser: "It's a prank！",

		reminds: "Here's a list of things to do！",

		notify: (name) => name ? `${name}、Did you do this?` : `Did you do this?`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」Did you do it?` : `「${thing}」Did you do it?`,

		done: (name) => name ? [
			`Well done、${name}♪`,
			`${name}、As expected!`,
			`${name}、That's amazing...！`,
		] : [
			`Well done♪`,
			`As expected!`,
			`That's amazing...！`,
		],

		cancel: `got it.`,
	},

	/**
	 * Valentine
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、Well... I made some chocolate so please have some if you'd like.！🍫` : 'I made some chocolate so please have some if you like.！🍫',
	},

	server: {
		cpu: 'The server seems to be under heavy load. Is it okay?'
	},

	maze: {
		post: "Today's maze！ #AiMaze",
		foryou: 'I drew it！'
	},

	chart: {
		post: 'The number of posts for the instance！',
		foryou: 'I drew it！'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}to${num}emojis added！`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}to${num}emojis added！\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`,
		nothing: 'I checked the emojis and it seems like nothing has been added.',
	},

	aichat: {
		nothing: type => `Ugh... ${type}It seems that the API key is not registered.`,
		error: type => `Ugh...${type}It seems that an error occurred. It might work with gemini-flash.`,
		post: (text, type) => `${text} (${type}) #aichat`,
	},

	sleepReport: {
		report: hours => `Hmm、${hours}I think I slept for about an hour.`,
		reportUtatane: 'Hmm... I dozed off.',
	},
	
	noting: {
		notes: [
			'Surprised to be dead',
			"Too bad Hiei's not here. We could use his Jagan eye to find himself.",
			'Oh my, a perfect ending for a perfect day!',
			"I'm a foreign exchange student. My English very choppy.",
			"Now I understand what kind of person you are; it's in my guidebook! Rather than be scared or surprised, you yell a lot and tell me I don't know what I'm talking about.",
			"Here's my impression of Yusuke: 'Look at me, I'm burning!",
			"They can't hear words unless they're asleep, but you can communicate feelings to living people when they're on the same emotional wavelength.",
			"It's called a Psychic Spy Glass. Look through it and you can see through walls, clothes, well, anything really.",
			'I think bone cracking is a good sign to rest.',
			'YOU just made that up! You disgusting PERVERT!',
			"Sneezy, sneezy, achoo - somebody special is thinking about you.",
			'See you soon ;)',
			'I meet so many people!  And they always seem surprised.',
			'The 𝔅𝔶𝔷𝔞𝔫𝔱𝔦𝔫𝔢 𝔑𝔢𝔵𝔲𝔰 is freedom',
			"If you're bored play some games: https://byzantinenexus.io/games",
			"Don't forget to see what's happening over in the Channels https://byzantinenexus.io/channels",
			'Antennas are a great way to follow #Hastags https://byzantinenexus.io/my/antennas',
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
			'Da Fuuuuuuuuh!?',
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
			"I'm at Misskey HQ today!",
			'Misskey headquarters is located in the third sector of District Z.',
			'Misskey本部には、さーばーっていう機械がいっぱいあります',
			'しっぽはないですよ？',
			'ひゃっ…！\nネコミミ触られると、くすぐったいです',
			'抗逆コンパイル性って、なにかな？',
			'Misskeyの制服、かわいくて好きです♪',
			'ふわぁ、おふとん気持ちいいです...',
			'Do you think a maid outfit would suit me?',
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
			"It's coming from above! Be careful!",
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
		want: item => `${item}、I want one...`,
		see: item => `While I was out walking, I saw ${item} lying on the road!`,
		expire: item => `I just realized that the expiration date of ${item} has passed...`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
