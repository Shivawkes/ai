<img src="https://github.com/syuilo/ai/blob/master/ai.png?raw=true" align="right" height="320px"/>

# Instruction Manual

## Profile
[Here](https://xn--931a.moe/)

## Ai's Main Features
### Greetings
She will respond when you say things like "Good morning" or "Good night."

### Fortune Telling
Say "Fortune Telling" to Ai and she will tell you your fortune for the day.

### Timer
She will let you know when the specified number of hours, minutes, and seconds have passed. You can also mix units, such as "3 minutes and 40 seconds."

### Reminders
```
@ai remind me to clean my room
```
Send a mention like this to her and she'll remind you to clean your room every 12 hours. Replying to the mention or Ai's prompt with "Done" or "Done" will disable the reminder.
You can also mention them in a quote renote.

### Fukuwarai (Lucky Lucky Smile)
Say "Emoji" to Ai and she'll tell you the emoji combination she's thinking of.

### Dice
Tell Ai a dice notation and she'll roll the dice.
Example: "2d6" (roll a six-sided die twice), "3d5" (roll a five-sided die three times)

### Maze
Say "maze" and she'll draw a maze. You can adjust the difficulty by adding words like "difficult" or "easy."

### Number Guessing Game
Message Ai "Number Guessing Game" to play.
This is a game where you have to guess the numbers Ai is thinking of.

### Numbering Game
Say "Numbering Game" to Ai to play.
This is a multiplayer game where the person who says the highest number wins.

### Reversi
Play Reversi with Ai. (This feature may be disabled in some instances.)
You can play a game of Reversi by saying "Reversi" to Ai or by selecting Ai in Reversi.
You can also adjust the difficulty level.

### Remember
Occasionally, Ai will "remember" keywords from your timeline.
(This feature may be disabled in some instances.)

### Teach Me How to Call You
Ai can teach you how to call you.
However, this requires that your Affection level (described below) has reached a certain level.
(Only responds in chats.)

### Welcome
When you create an account on Misskey and post for the first time, Ai will use her cat ears to capture your message and renote it to let everyone know.

### Follow Me
Tell Ai "Follow me" and she will follow you.

### Happy Birthday
Ai will celebrate your birthday.

### Valentine's Day
Ai will give you chocolate.

### Charts
Ai will post charts and other information from the instance.

### Server Monitoring
Monitors the server's status and notifies you when the load is high.

### ping
Returns a PONG. Use this to check if the server is alive.

### Custom Emoji Check
Once a day, this feature monitors the addition of custom emojis. You can immediately check by clicking "Custom Emoji Check," "Custom Emoji Check," or "Check Custom Emoji." Using this feature may require you to regenerate Ai's access token. **Grant administrator privileges to the bot account that controls Ai, create an access token with the additional permission "View Emoji" for the bot account, and set that token.**

### aichat
```
@ai aichat, please tell me how to clean my room.
```
Send a mention like this and it will respond using Google's Gemini API (currently only Gemini API is supported). To use this feature, you must register an API key. Replying to Ai's reply will result in a further reply (only within the specified time). If you include **ggg** in a sentence, the system will provide a grounded answer via Google search (the process of connecting the model to a verifiable source of information) (however, the AI ​​may decide not to search).
You can also enable random talk (randomly triggering aichat) by registering an API key and setting aichatRandomTalkEnabled to true in the settings. The random talk interval and random talk probability can be specified in the settings.
If you set aichatGroundingWithGoogleSearchAlwaysEnabled to true in the settings, the system will always attempt to provide a grounded answer via Google search for mentions (entering ggg is not necessary; the AI ​​may decide not to search). As of February 2025, this grounding function is available for [1,000 responses per day](https://ai.google.dev/gemini-api/docs/models/gemini-v2?hl=ja#search-tool).

#### Aichat Details

* If the aichat or reply contains a URL, we will use Misskey's summary proxy to retrieve the information and then reply.
* If the aichat or reply contains a file attachment, we will reply based on that file.
* Images, PDFs, audio, short videos, and text files are accepted.
* However, it is best not to send sensitive files, as they may cause unforeseen issues.
* When an aichat is performed (mentionHook), if there is a cited note, the body of that note will be referenced and the reply will be sent.
* If you reply to the aichat results, the reply will take that information into account.
* Replies will no longer be referenced if they exceed 10.
* You can increase or decrease the number of replies referenced by changing the value of "exist.history.length > 10." (Note that if the number of replies increases and the message is too long, responses may not be returned or an error may occur.)
* The response monitoring time can be changed using the constant TIMEOUT_TIME (default is 30 minutes).
* The random chat function will only be executed if the probability (specified in the settings) is met, the affection level is set to 7 or higher, and the user is not a bot.
* Please modify the source code if you want to change the conditions.

### Other Reaction Phrases (Talk Only)
* Cute
* Pet
* Love
* Hug
* Insult
* Step
* Ouch

## Affection Level
Ai has an affection level for you.
Greeting Ai will gradually increase this level.
Her reactions and various lines change depending on her affection level. Some interactions may not be performed unless you have a certain level of affection.
