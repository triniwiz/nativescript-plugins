import { DemoSharedBase } from '../utils';
import { Descope } from '@triniwiz/nativescript-descope';

export class DemoSharedNativescriptDescope extends DemoSharedBase {
	code: string = '';
	status: string = '';
	error: string = '';
	email: string = 'osei@me.com';
	constructor() {
		super();
		Descope.setup({
			projectId: process.env.DESCOPE_PROJECT_ID,
		});
		Descope.flow
			.start(`https://api.descope.com/login/${process.env.DESCOPE_PROJECT_ID}?flow=sign-up-or-in`, 'iogithubtriniwizpluginsdemo://')
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});

		// Descope.sessionManager.loadSession().then(async (session) => {
		// 	console.log('session', session);

		// });

		// descope.webauthn.signUp('sign-up-or-in')
		// .then((response) => {
		// 	console.log(response);
		// })
		// .catch((error) => {
		// 	console.error(error);
		// });
		// const descope = useDescope();

		// descope.flow.start('sign-up-or-in')
		// .then((response) => {
		// 	console.log(response);
		// })
		// .catch((error) => {
		// 	console.error(error);
		// });

		// descope.otp.verify
		// 	.email('andy@example.com', '123456')
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
	}

	async sendOtp() {
		this.status = 'Sending OTP';
		try {
			const response = await Descope.otp.signUp.email('osei@me.com');

			if (response?.error?.errorCode === 'E062107') {
				await Descope.otp.signIn.email('osei@me.com');
			}
			this.set('status', 'OTP Sent');
		} catch (error) {
			this.set('status', 'OTP Sending Failed');
			console.error(error);
		}
	}

	async verifyOtp() {
		this.set('status', 'Verifying OTP');
		try {
			const response = await Descope.otp.verify.email(this.email, this.code);

			this.status = 'OTP Verified';
			await Descope.sessionManager.manageSession(response.data);
		} catch (error) {
			console.error(error);
			this.status = 'OTP Verification Failed';
		}
	}
}
