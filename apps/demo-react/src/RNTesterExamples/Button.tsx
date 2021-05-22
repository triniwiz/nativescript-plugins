/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import { View, Button } from "@triniwiz/nativescript-yogalayout/react";
import type { Example } from "./ExampleList";

function onButtonTap(buttonName: string): void {
  alert(`${buttonName} has been tapped!`);
}

export const displayName: string = 'ButtonExample';
export const framework: string = 'React';
export const title: string = '<Button>';
export const description: string = 'Simple React Native button component.';

export const examples: Example[] = [
  {
    title: 'Simple Button',
    description:
      'The title and onTap handler are required. It is ' +
      'recommended to set accessibilityLabel to help make your app usable by ' +
      'everyone.',
    render: function() {
      return (
        <Button
          onTap={() => onButtonTap('Simple')}
          // testID="simple_button"
          title="Press Me"
          // accessibilityLabel="See an informative alert"
        />
      );
    },
  },
  {
    title: 'Adjusted color',
    description:
      'Adjusts the color in a way that looks standard on each ' +
      'platform. On iOS, the color prop controls the color of the text. On ' +
      'Android, the color adjusts the background color of the button.',
    render: function() {
      return (
        <Button
          onTap={() => onButtonTap('Purple')}
          // testID="purple_button"
          title="Press Purple"
          color="#841584"
          // accessibilityLabel="Learn more about purple"
        />
      );
    },
  },
  {
    title: 'Fit to text layout',
    description:
      'This layout strategy lets the title define the width of ' + 'the button',
    render: function() {
      return (
        <View style={styles.container}>
          <Button
            onTap={() => onButtonTap('Left')}
            // testID="left_button"
            title="This looks great!"
            // accessibilityLabel="This sounds great!"
          />
          <Button
            onTap={() => onButtonTap('Right')}
            // testID="right_button"
            title="Ok!"
            color="#841584"
            // accessibilityLabel="Ok, Great!"
          />
        </View>
      );
    },
  },
  {
    title: 'Disabled Button',
    description: 'All interactions for the component are disabled.',
    render: function() {
      return (
        <Button
          isEnabled={false}
          onTap={() => onButtonTap('Disabled')}
          // testID="disabled_button"
          title="I Am Disabled"
          // accessibilityLabel="See an informative alert"
        />
      );
    },
  },
];

const styles = {
  container: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
};