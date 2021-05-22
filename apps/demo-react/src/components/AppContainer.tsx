import * as React from 'react';
import { ItemEventData } from '@nativescript/core';
import { ListView } from 'react-nativescript';
import { YogaLayout } from './YogaLayout';
import { ViewExample } from './View';
import { ExampleList } from '../RNTesterExamples/ExampleList';
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
        text: 'RNTester: Text',
        component: () => (<ExampleList examples={textExamples}/>),
    },
    {
        text: 'RNTester: Button',
        component: () => (<ExampleList examples={buttonExamples}/>),
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
