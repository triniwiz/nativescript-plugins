export interface Attachment {
	/**
	 * The name used for the attachment.
	 * Example:
	 *
	 *   fileName: 'Cute-Kitten.png'
	 */
	fileName: string;

	/**
	 * There are various ways to use the path param:
	 *
	 *   - base64 encoded: 'base64://iVBORw..XYZ'
	 *   - local app folder 'file://..
	 *   - anywhere on the device: 'file:///..'
	 *   - or '/some/path/to/file.png'
	 */
	path: string;

	/**
	 * Used to help the iOS figure out how to send the file (not used on Android).
	 * Example:
	 *
	 *   mimeType: 'image/png'
	 */
	mimeType: string;
}

export function available(): Promise<boolean>;

export function send(numbers?: Array<string>, message?: string, subject?: string, media?: Array<Attachment>): Promise<{ response: string; message: string }>;
