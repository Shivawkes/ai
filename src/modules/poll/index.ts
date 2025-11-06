import { bindThis } from '@/decorators.js';
import Message from '@/message.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';
import { genItem } from '@/vocabulary.js';
import config from '@/config.js';
import type { Note } from '@/misskey/note.js';

export default class extends Module {
	public readonly name = 'poll';

	@bindThis
	public install() {
		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 60);

		return {
			mentionHook: this.mentionHook,
			timeoutCallback: this.timeoutCallback,
		};
	}

	@bindThis
	private async post() {
		const duration = 1000 * 60 * 15;

		const polls = [ // TODO: Extract serif
			['Something that looks unusual', 'Which do you think is the most unusual?']
			['Something that looks delicious', 'Which do you think is the most delicious?']
			['Something that looks heavy', 'Which do you think is the heaviest?']
			['Something I want', 'Which do you want the most?']
			['Something I would like to take to a desert island', 'If you could take one thing to a desert island, which would it be?']
			['Something I would like to display in my home', 'Which would you display in your home?']
			['Something that is likely to sell', 'Which do you think is most likely to sell?']
			['Something I wish would fall from the sky', 'Which would you like to fall from the sky?']
			['Something I would like to carry with me', 'Which would you like to carry with me? '],
			["Things you'd like to commercialize', 'If you were to commercialize something, which one would you choose?"],
			["Things you'd likely find unearthed', 'What do you think would be unearthed from ruins?"],
			["Things you'd like to smell nice', 'Which one do you think smells the nicest?"],
			["Things you'd like to see in Earth's orbit', 'Which one do you think is floating in Earth's orbit?"],
			["Things you'd like to give as a gift', 'If someone were to give you something, which one would you choose?"],
			["Things you'd like to receive as a gift', 'If you were to receive something as a gift, which one would you choose?"],
			["Things I'd probably own', 'Which one do you think I'd own? "],
			['Things that might become popular', 'Which do you think will become popular?'],
			['Breakfast', 'What would you like to eat for breakfast?'],
			['Lunch', 'What would you like to eat for lunch?'],
			['Dinner', 'What would you like to eat for dinner?'],
			['Things that seem good for your health', 'Which do you think is good for your health?'],
			["Things you'd like to leave for future generations', 'Which would you like to leave for future generations?"],
			['Things that might become musical instruments', 'Which do you think could become musical instruments?'],
			["Things that you'd like to use as ingredients in miso soup', 'Which would be good as an ingredient in miso soup? "],
			['What would you like to make into a furikake (sprinkle topping)?', 'Which one would you like to sprinkle on rice?'],
			['Things you often see', 'Which one do you see often?'],
			["Things that seem like they'd be found on the street', 'Which one do you think would be found on the street?"],
			["Things that seem like they'd be in an art museum', 'Which one of these do you think would be in an art museum?"],
			["Things that seem like they'd be in a classroom', 'Which one do you think would be in a classroom?"],
			["Things that seem like they'd be in an emoji', 'Which one do you think would be in an emoji?"],
			["Things that seem like they'd be in Misskey Headquarters', 'Which one do you think would be in Misskey Headquarters?"],
			['Burnable trash', 'Which one do you think is burnable trash? '],
			['Favorite onigiri filling', 'What is your favorite onigiri filling?'],
		];

		const poll = polls[Math.floor(Math.random() * polls.length)];

		const choices = [
			genItem(),
			genItem(),
			genItem(),
			genItem(),
		];

		const note = await this.ai.post({
			text: poll[1],
			poll: {
				choices,
				expiredAfter: duration,
				multiple: false,
			}
		});

		// Timer Set
		this.setTimeoutWithPersistence(duration + 3000, {
			title: poll[0],
			noteId: note.id,
		});
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (!msg.or(['/poll']) || msg.user.username !== config.master) {
			return false;
		} else {
			this.log('Manualy poll requested');
		}

		this.post();

		return true;
	}

	@bindThis
	private async timeoutCallback({ title, noteId }) {
		const note: Note = await this.ai.api('notes/show', { noteId });

		const choices = note.poll!.choices;

		let mostVotedChoice;

		for (const choice of choices) {
			if (mostVotedChoice == null) {
				mostVotedChoice = choice;
				continue;
			}

			if (choice.votes > mostVotedChoice.votes) {
				mostVotedChoice = choice;
			}
		}

		const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

		if (mostVotedChoice.votes === 0) {
			this.ai.post({ // TODO: Extract serif
				text: 'There was no vote',
				renoteId: noteId,
			});
		} else if (mostVotedChoices.length === 1) {
			this.ai.post({ // TODO: Extract serif
				cw: `${title}The results of the survey are announced!`,
				text: `The result is${mostVotedChoice.votes}of votes「${mostVotedChoice.text}」It was!`,
				renoteId: noteId,
			});
		} else {
			const choices = mostVotedChoices.map(choice => `「${choice.text}」`).join('と');
			this.ai.post({ // TODO: Extract serif
				cw: `${title}アンケートの結果発表です！`,
				text: `The result is${mostVotedChoice.votes}of votes${choices}It was!`,
				renoteId: noteId,
			});
		}
	}
}
