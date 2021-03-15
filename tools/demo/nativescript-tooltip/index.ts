import { DemoSharedBase } from '../utils';
import { ToolTip } from '@triniwiz/nativescript-tooltip';

export class DemoSharedNativescriptTooltip extends DemoSharedBase {
	pushIt(args) {
		const t = new ToolTip(args.object, {
			showArrow: false,
			text: 'Hello 👋 !!!',
			position: 'top',
			textColor: 'white',
			backgroundColor: 'blue',
			width: 400,
			dismissOnTap: true,
			dismissOnTapOutside: true,
			onShow: () => {
				console.log('onShow');
			},
			onClick: () => {
				console.log('onClick');
			},
			onDismiss: () => {
				console.log('onDismiss');
			},
		});
		t.show();
	}
}
