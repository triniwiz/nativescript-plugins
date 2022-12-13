import * as React from 'react';
import { ItemEventData } from '@nativescript/core';
import { ListView } from 'react-nativescript';
import { YogaLayout } from './YogaLayout';
import { ViewExample } from './View';
import { ExampleList } from '../RNTesterExamples/ExampleList';
import { examples as viewExamples } from '../RNTesterExamples/View';
import { examples as textExamples } from '../RNTesterExamples/Text';
import { examples as buttonExamples } from '../RNTesterExamples/Button';

interface MyItem {
	text: string;
	component: () => JSX.Element;
}

const items: MyItem[] = [
	{
		text: 'YogaLayout',
		component: YogaLayout,
	},
	{
		text: 'View',
		component: ViewExample,
	},
	{
		text: 'RNTester: View',
		/**
		 * We slice down to 12 examples because – as to my understanding – YogaLayout doesn't support "auto" height,
		 * the examples just shrink and don't reserve any height for themselves. Thus, we don't get a scrolling list
		 * of tests and they just get smaller and smaller until NativeScript can't solve the layout and stalls.
		 */
		component: () => <ExampleList examples={viewExamples} />,
	},
	{
		text: 'RNTester: Text',
		/**
		 * Again, we slice down to 6 examples for the same reason as above.
		 */
		component: () => <ExampleList examples={textExamples} />,
	},
	{
		text: 'RNTester: Button',
		component: () => <ExampleList examples={buttonExamples} />,
	},
];

const cellFactory = (item: MyItem) => <label text={item.text} style={{ height: 40, paddingLeft: 16 }} />;

export function AppContainer() {
	const [ExampleComponent, setExampleComponent] = React.useState<() => JSX.Element>(null);
	const onItemTap = (args: ItemEventData) => {
		setExampleComponent(() => items[args.index].component);
	};

	return (
		<frame>
			<page>
				<ListView items={items} cellFactory={cellFactory} onItemTap={onItemTap} />
			</page>
			{ExampleComponent ? (
				<page onNavigatedFrom={() => setExampleComponent(null)}>
					<ExampleComponent />
				</page>
			) : null}
		</frame>
	);
}
