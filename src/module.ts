import { bindThis } from '@/decorators.js';
import 藍, { InstallerResult } from '@/ai.js';

export default abstract class Module {
	public abstract readonly name: string;

	protected ai: 藍;
	private doc: any;

	public init(ai: 藍) {
		this.ai = ai;

		this.doc = this.ai.moduleData.findOne({
			module: this.name
		});

		if (this.doc == null) {
			this.doc = this.ai.moduleData.insertOne({
				module: this.name,
				data: {}
			});
		}
	}

	public abstract install(): InstallerResult;

	@bindThis
	protected log(msg: string) {
		this.ai.log(`[${this.name}]: ${msg}`);
	}

	/**
	 * Creates a context and waits for a user reply.
		* @param key: The key to identify the context.
		* @param isChat: Is this a chat context?
		* @param id: If this is a chat context, the chat partner's ID. If not, the post ID to wait for.
		* @param data: Optional data to store in the context.
	 */
	@bindThis
	protected subscribeReply(key: string | null, isChat: boolean, id: string, data?: any) {
		this.ai.subscribeReply(this, key, isChat, id, data);
	}

	/**
	 * Cancels reply waiting.
	 * @param key A key to identify the context.
	 */
	@bindThis
	protected unsubscribeReply(key: string | null) {
		this.ai.unsubscribeReply(this, key);
	}

	/**
	 * Invokes the timeout callback after the specified number of milliseconds has elapsed.
	 * This timer is persisted, so it remains valid even if the process is restarted.
	 * @param delay (milliseconds)
	 * @param data (Optional data).
	 */
	@bindThis
	public setTimeoutWithPersistence(delay: number, data?: any) {
		this.ai.setTimeoutWithPersistence(this, delay, data);
	}

	@bindThis
	protected getData() {
		return this.doc.data;
	}

	@bindThis
	protected setData(data: any) {
		this.doc.data = data;
		this.ai.moduleData.update(this.doc);
	}
}
