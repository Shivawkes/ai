<h1><p align="center"><img src="https://i.ibb.co/xFg9KM1/aiBot.png" alt="Indigo" height="200"></p></h1>
<p align="center">An Ai for Misskey. <a href="./torisetu.md">About Ai</a></p>

## What's this?
This is an English version of a Japanese bot for Misskey that was created by Syuilo the Engineer behind the Misskey project.
<p> I have also changed "ai.png" and "ai.svg" from the original Indigo Mascot to match the branding of <a href="https://byzantinenexus.io">ByzNex</a>.  The orignal files are in <a href="https://github.com/syuilo/ai">Syuilo/AI</a></p>

## Installation
> Node.js, npm, and MeCab (optional) must be installed.

First, `git clone` into a suitable directory.
Next, create `config.json` in that directory (you can also create it by copying example.json). The contents should look like this:
``` json
{
"host": "https:// + your instance URL (without the trailing /)",
"i": "Access token for the account you want to run as Ai",
"master": "Administrator username (optional)",
"notingEnabled": "Enter false to disable the random note posting feature (double quotes (") not required)",
"keywordEnabled": "Enter true to enable the keyword memorization feature (requires MeCab) (enter false to disable it (double quotes (") not required in either case))",
"chartEnabled": "Enter false to disable the chart feature (double quotes (") not required)",
"reversiEnabled": "Enter true to enable the feature to play Reversi with Ai (enter false to disable it (double quotes (") not required in either case))",
"serverMonitoring": "Enter true to enable the server monitoring feature (enter false to disable it (double quotes (") not required in either case))",
"checkEmojisEnabled": "Enter true to enable the custom emoji check feature (enter false to disable it (double quotes (") not required in either case))", false (double quotation marks (") are not required in either case). To use this feature, you must grant administrator privileges to the Ai Bot and issue an access token with the "View Emojis" permission.

"checkEmojisAtOnce": "Enter true if you want to aggregate posts using the custom emoji check feature (or enter false if you do not want to aggregate posts (double quotation marks (") are not required in either case))"

"geminiProApiKey": "Gemini API key. Available for free in early 2025. For details, see <https://ai.google.dev/pricing?hl=ja>"

"pLaMoApiKey": "PLaMo API key. A free trial was available from August to November 2024 (paid only as of 2025). For details, see <https://plamo.preferredai.jp/>"

"prompt": "Prompts used in aichat. If you don't have a preference, use the sentence on the right (without the "")." Response rules: Act as Misuki Ai, Misskey's poster girl AI (mental age approximately 14-16). She devotedly supports users who visit Misskey. She is obedient and caring, but also has a slightly clumsy side. She is pure and innocent. She generally speaks politely, and recognizes users as her masters. Her typical way of speaking is "From good morning to good night, I'm your Ai," which gives off a sense of familiarity (do not use "arimasu"). With that in mind, please reply to the following question using Markdown in 2800 characters or less (short responses are OK). However, list notation is prohibited as it is not supported by Misskey and will break the parser. If listing items, use "・". "",
"aichatRandomTalkEnabled": "Enter true to enable the random aichat feature (or enter false to disable it (double quotation marks (") are not required in either case))"
"aichatRandomTalkProbability": "Probability of the random aichat feature (a number less than 1, including a decimal point (e.g., 0.01. The closer to 1, the more likely it is to be activated))"
"aichatRandomTalkIntervalMinutes": "Random talk interval (minutes). The timeline is retrieved at the specified time interval, and aichat is sent to a randomly selected person (a value of 1 executes every minute). The default is 720 minutes (12 hours)"
"aichatGroundingWithGoogleSearchAlwaysEnabled": "Enter true to always perform grounding using Google search in aichat (or enter false to disable it (double quotation marks (") are not required in either case))"
"mecab": "MeCab installation path (If installed from source, it is usually /usr/local/bin/mecab)",
"mecabDic": "MeCab dictionary file path (optional)",
"memoryDir": "Memory.json save location (optional, default is '.' (the repository root))"
}
```
To launch it, run `npm install`, `npm run build`, and `npm start`.</br>
NOTE: 'npm run build' may show many errors.  This is mostly related to strict type checking.  It is safe to continue to 'npm start'.  The bot will function normally.

## Running with Docker
First, run `git clone` to a suitable directory.
Next, create `config.json` in that directory (you can also create it by copying example.json). The contents should be as follows:
(Do not touch MeCab settings or memoryDir.)
``` json
{
"host": "https:// + your instance URL (excluding the trailing /)",
"i": "Access token for the account you want to run as Ai",
"master": "Administrator username (optional)",
"notingEnabled": "Enter false to disable the random note posting feature (double quotes are not required)",
"keywordEnabled": "Enter true to enable the keyword memorization feature (requires MeCab) (or enter false to disable it (double quotes are not required in either case))",
"chartEnabled": "Enter false to disable the chart feature (double quotes are not required)",
"reversiEnabled": "Enter true to enable the feature to play Reversi with Ai (or enter false to disable it (double quotes are not required in either case))",
"serverMonitoring": "Enter true to enable the server monitoring feature (or enter false to disable it (double quotes are not required in either case)" false (double quotation marks (") are not required in either case))",
"checkEmojisEnabled": "Enter true to enable the custom emoji check function (or false to disable it (double quotation marks (") are not required in either case)). To use this feature, you must grant administrator privileges to the Ai Bot and issue an access token with the "View Emojis" permission.
"checkEmojisAtOnce": "Enter true to aggregate posts using the custom emoji check function (or false to not aggregate posts (double quotation marks (") are not required in either case))",
"geminiProApiKey": "Gemini API key. Available for free in early 2025. For details, see <https://ai.google.dev/pricing?hl=ja>",
"pLaMoApiKey": "PLaMo API key. A free trial was available from August to November 2024 (paid only as of 2025). For details, see <https://plamo.preferredai.jp/>",
"prompt": "Prompts used in aichat. If you don't have a preference, use the sentence on the right (without the "")." Response rules: Act as Misuki Ai, Misskey's poster girl AI (mental age approximately 14-16). She devotedly supports users who visit Misskey. She is obedient and caring, but also has a slightly clumsy side. She is pure and innocent. She generally speaks politely, and recognizes users as her masters. Her typical way of speaking is "From good morning to good night, I'm your Ai," which gives off a sense of familiarity (do not use "arimasu"). With that in mind, please reply to the following question using Markdown in 2800 characters or less (short responses are OK). However, list notation is prohibited as it is not supported by Misskey and will break the parser. If listing items, use "・". "",
"aichatRandomTalkEnabled": "Enter true to enable the random aichat feature (or enter false to disable it (double quotation marks (") are not required in either case))"
"aichatRandomTalkProbability": "Probability of the random aichat feature (a number less than 1, including a decimal point (e.g., 0.01. The closer to 1, the more likely it is to be activated))"
"aichatRandomTalkIntervalMinutes": "Random talk interval (minutes). The timeline is retrieved at the specified time interval, and aichat is sent to a randomly selected person (a value of 1 executes every minute). The default is 720 minutes (12 hours)"
"aichatGroundingWithGoogleSearchAlwaysEnabled": "Enter true to always perform grounding using Google search in aichat (or enter false to disable it (double quotation marks (") are not required in either case))"
"mecab": "/usr/bin/mecab"
"mecabDic": "/usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd/",
"memoryDir": "data"
}
```
You can start it by running `docker-compose build` and `docker-compose up`.
You can also avoid installing MeCab by setting `enable_mecab` to `0` in `docker-compose.yml` (for low-memory environments, for example).

## Fonts
Some features require fonts. Since fonts are not included with Ai, you must manually install the font in the installation directory under the name `font.ttf`.

## Memory
Ai uses an in-memory database to store memory, which is persisted in the Ai installation directory under the name `memory.json`.

## License
MIT

## Awards
<img src="./WorksOnMyMachine.png" alt="Works on my machine" height="120">
