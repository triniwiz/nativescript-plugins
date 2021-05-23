/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

import * as React from "react";
import { View, Text, TextInput, Button } from "@triniwiz/nativescript-yogalayout/react";

/*
Differences seen in here:

- Style can be an array in RN
- Style is made by StyleSheet
- StyleSheet.hairlineWidth
- TouchableWithoutFeedback doesn't exist in NS
- needsOffscreenAlphaCompositing doesn't exist in NS
- overflow doesn't exist in NS
- left, top, (right?), (bottom?) can be set through Style in RN, but not NS
- left, top, (right?), (bottom?) only exist on main props rather than Styles
- StyleSheet.absoluteFill may be impossible to achieve on RCTFlexboxLayout, as it's an absolute layout concept..?
- lengths are specified as Length objects in NS rather than simply as strings (if abiding by typings)
- colors are specified as Color objects in NS rather than simply as strings (if abiding by typings)
- View -> RCTFlexboxLayout (but with flexDirection 'column' as default)
- Text -> label or RCTTextView
*/

export const title: string = '<View>';
export const description: string =
  'Basic building block of all UI, examples that ' +
  'demonstrate some of the many styles available.';

export const displayName: string = 'ViewExample';
type Example = { title: string, description?: string, render: () => any };

export const examples: Example[] = [
  {
    title: 'Background Color',
    render() {
      return (
        <View style={{backgroundColor: '#527FE4', padding: 5}}>
          <label style={{fontSize: 11}}>Blue background</label>
        </View>
      );
    },
  },
  {
    title: 'Border',
    render() {
      return (
        <View style={{borderColor: '#527FE4', borderWidth: 5, padding: 10}}>
          <label style={{fontSize: 11}}>5px blue border</label>
        </View>
      );
    },
  },
  {
    title: 'Padding/Margin',
    render() {
      const styles = {
        box: {
          backgroundColor: '#527FE4',
          borderColor: '#000033',
          borderWidth: 1,
        },
      };
      return (
        <View style={{borderColor: '#bb0000', borderWidth: 0.5}}>
          <View style={{ ...styles.box, padding: 5}}>
            <label style={{fontSize: 11}}>5px padding</label>
          </View>
          <View style={{ ...styles.box, margin: 5}}>
            <label style={{fontSize: 11}}>5px margin</label>
          </View>
          <View
            style={
              { ...styles.box, margin: 5, padding: 5, alignSelf: 'flex-start'}
            }>
            <label style={{fontSize: 11}}>5px margin and padding,</label>
            <label style={{fontSize: 11}}>widthAutonomous=true</label>
          </View>
        </View>
      );
    },
  },
  {
    title: 'Border Radius',
    render() {
      return (
        <View style={{borderWidth: 0.5, borderRadius: 5, padding: 5}}>
          <label style={{fontSize: 11}}>
            Too much use of `borderRadius` (especially large radii) on anything
            which is scrolling may result in dropped frames. Use sparingly.
          </label>
        </View>
      );
    },
  },
  {
    title: 'Border Style',
    render() {
      type Props = {};
      type State = {
        showBorder: boolean,
      };

      class ViewBorderStyleExample extends React.Component<Props, State> {
        state = {
          showBorder: true,
        };

        render() {
          return (
            <View onTap={this._handlePress}>
              <View>
                <View
                  style={
                    {
                      borderWidth: 1,
                      padding: 5,
                        ...(this.state.showBorder
                        ? {
                            borderStyle: 'dashed',
                          }
                        : {})
                    }}>
                  <label style={{fontSize: 11}}>Dashed border style</label>
                </View>
                <View
                  style={{
                      marginTop: 5,
                      borderWidth: 1,
                      borderRadius: 5,
                      padding: 5,
                      ...(this.state.showBorder
                        ? {
                            borderStyle: 'dotted',
                          }
                        : {})
                    }}>
                  <label style={{fontSize: 11}}>Dotted border style</label>
                </View>
              </View>
            </View>
          );
        }

        _handlePress = () => {
          this.setState({showBorder: !this.state.showBorder});
        };
      }
      return <ViewBorderStyleExample />;
    },
  },
  {
    title: 'Circle with Border Radius',
    render() {
      return (
        <View
          style={{borderRadius: 10, borderWidth: 1, width: 20, height: 20}}
        />
      );
    },
  },
  /* Doesn't translate well to NativeScript */
//   {
//     title: 'Overflow',
//     render() {
//       const StyleSheet = {
//           absoluteFill: {
//               // position: 'absolute' as 'absolute',
//               left: { value: 0, unit: "px" as "px" } as Length,
//               // right: { value: 0, unit: "px" as "px" } as Length,
//               top: { value: 0, unit: "px" as "px" } as Length,
//               // bottom: { value: 0, unit: "px" as "px" } as Length,
//           }
//       };
//       const styles = {
//         container: {
//           // borderWidth: StyleSheet.hairlineWidth,
//           borderWidth: 1,
//           height: { value: 12, unit: "px" as "px" },
//           marginBottom: 8,
//           marginEnd: 16,
//           width: { value: 95, unit: "px" as "px" },
//         },
//         content: {
//           height: { value: 20, unit: "px" as "px" },
//           width: { value: 200, unit: "px" as "px" },
//         },
//       };

//       // NOTE: The <View> that sets `overflow` should only have other layout
//       // styles so that we can accurately test view flattening optimizations.
//       return (
//         <View style={{flexDirection: 'row'}}>
//           <View style={styles.container}>
//             <View {...StyleSheet.absoluteFill}>
//               <label style={styles.content}>undefined</label>
//             </View>
//           </View>
//           <View style={styles.container}>
//             <View {...StyleSheet.absoluteFill} style={{ overflow: 'hidden'}}>
//               <label style={styles.content}>hidden</label>
//             </View>
//           </View>
//           <View style={styles.container}>
//             <View {...StyleSheet.absoluteFill} style={{ overflow: 'visible'}}>
//               <label style={styles.content}>visible</label>
//             </View>
//           </View>
//         </View>
//       );
//     },
//   },
  {
    title: 'Opacity',
    render() {
      return (
        <View>
          <View style={{opacity: 0}}>
            <label>Opacity 0</label>
          </View>
          <View style={{opacity: 0.1}}>
            <label>Opacity 0.1</label>
          </View>
          <View style={{opacity: 0.3}}>
            <label>Opacity 0.3</label>
          </View>
          <View style={{opacity: 0.5}}>
            <label>Opacity 0.5</label>
          </View>
          <View style={{opacity: 0.7}}>
            <label>Opacity 0.7</label>
          </View>
          <View style={{opacity: 0.9}}>
            <label>Opacity 0.9</label>
          </View>
          <View style={{opacity: 1}}>
            <label>Opacity 1</label>
          </View>
        </View>
      );
    },
  },
  {
    title: 'Offscreen Alpha Compositing',
    render() {
      type Props = {};
      type State = {
        active: boolean,
      };

      const styles = {
        alphaCompositing: {
          justifyContent: 'space-around' as 'space-around',
          width: { value: 100, unit: "px" as "px" },
          height: { value: 50, unit: "px" as "px" },
          borderRadius: 100,
        },
      };

      class OffscreenAlphaCompositing extends React.Component<Props, State> {
        state = {
          active: false,
        };

        render() {
          return (
            /* TouchableWithoutFeedback */
            <View onTap={this._handlePress}>
              <View>
                <label style={{paddingBottom: 10}}>Blobs</label>
                <View
                  style={{opacity: 1.0, paddingBottom: 30}}
                  /* Doesn't exist in NativeScript */
                  // needsOffscreenAlphaCompositing={this.state.active}
                  >
                  <View
                    style={{
                      marginTop: 0, marginLeft: 0, backgroundColor: '#FF6F59', ...styles.alphaCompositing,
                    }}
                  />
                  <View
                    style={
                      {
                        ...styles.alphaCompositing,
                        marginTop: -50,
                        marginLeft: 50,
                        backgroundColor: '#F7CB15',
                      }}
                  />
                </View>
                <label style={{paddingBottom: 10}}>
                  Same blobs, but their shared container have 0.5 opacity
                </label>
                <label style={{paddingBottom: 10}}>
                  Tap to {this.state.active ? 'activate' : 'deactivate'}{' '}
                  needsOffscreenAlphaCompositing
                </label>
                <View
                  style={{opacity: 0.8}}
                  /* Doesn't exist in NativeScript */
                  // needsOffscreenAlphaCompositing={this.state.active}
                >
                  <View
                    style={
                      { marginTop: 0, marginLeft: 0, backgroundColor: '#FF6F59', ...styles.alphaCompositing, }
                    }
                  />
                  <View
                    style={
                      {
                        marginTop: -50,
                        marginLeft: 50,
                        backgroundColor: '#F7CB15',
                        ...styles.alphaCompositing,
                      }
                    }
                  />
                </View>
              </View>
            </View>
          );
        }

        _handlePress = () => {
          this.setState({active: !this.state.active});
        };
      }

      return <OffscreenAlphaCompositing />;
    },
  },
  {
    title: 'ZIndex',
    render() {
      type Props = {};
      type State = {
        flipped: boolean,
      };

      const styles = {
        zIndex: {
          justifyContent: 'space-around' as 'space-around',
          width: { value: 100, unit: "px" as "px" },
          height: { value: 50, unit: "px" as "px" },
          marginTop: -10,
        },
      };

      class ZIndexExample extends React.Component<Props, State> {
        state = {
          flipped: false,
        };

        render() {
          const indices = this.state.flipped ? [-1, 0, 1, 2] : [2, 1, 0, -1];
          return (
            /* TouchableWithoutFeedback */
            <View onTap={this._handlePress}>
              <View>
                <label style={{paddingBottom: 10}}>
                  Tap to flip sorting order
                </label>
                <View
                  style={
                    {
                      marginTop: 0,
                      backgroundColor: '#E57373',
                      zIndex: indices[0],
                      ...styles.zIndex,
                    }
                  }>
                  <label>ZIndex {indices[0]}</label>
                </View>
                <View
                  style={
                    {
                      marginLeft: 50,
                      backgroundColor: '#FFF176',
                      zIndex: indices[1],
                      ...styles.zIndex,
                    }
                  }>
                  <label>ZIndex {indices[1]}</label>
                </View>
                <View
                  style={
                    {
                      marginLeft: 100,
                      backgroundColor: '#81C784',
                      zIndex: indices[2],
                      ...styles.zIndex,
                    }
                  }>
                  <label>ZIndex {indices[2]}</label>
                </View>
                <View
                  style={
                    {
                      marginLeft: 150,
                      backgroundColor: '#64B5F6',
                      zIndex: indices[3],
                      ...styles.zIndex,
                    }
                  }>
                  <label>ZIndex {indices[3]}</label>
                </View>
              </View>
            </View>
          );
        }

        _handlePress = () => {
          this.setState({flipped: !this.state.flipped});
        };
      }
      return <ZIndexExample />;
    },
  },
  /* BackfaceVisibility Doesn't exist in NS! */
//   {
//     title: 'BackfaceVisibility',
//     render: function() {
//       return (
//         <>
//           <label style={{paddingBottom: 10}}>
//             View #1, front is visible, back is hidden.
//           </label>
//           <View style={{justifyContent: 'center', alignItems: 'center'}}>
//             <View
//               style={{
//                 height: 200,
//                 width: 200,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'blue',
//                 backfaceVisibility: 'hidden',
//               }}>
//               <label>Front</label>
//             </View>
//             <View
//               style={{
//                 height: 200,
//                 width: 200,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'red',
//                 backfaceVisibility: 'hidden',
//                 transform: [{rotateY: '180deg'}],
//                 position: 'absolute',
//                 top: 0,
//               }}>
//               <label>Back (You should not see this)</label>
//             </View>
//           </View>
//           <label style={{paddingTop: 10, paddingBottom: 10}}>
//             View #2, front is hidden, back is visible.
//           </label>
//           <View style={{justifyContent: 'center', alignItems: 'center'}}>
//             <View
//               style={{
//                 height: 200,
//                 width: 200,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'blue',
//                 backfaceVisibility: 'hidden',
//               }}>
//               <label>Front (You should not see this)</label>
//             </View>
//             <View
//               style={{
//                 height: 200,
//                 width: 200,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'red',
//                 backfaceVisibility: 'hidden',
//                 position: 'absolute',
//                 top: 0,
//               }}>
//               <label>Back</label>
//             </View>
//           </View>
//         </>
//       );
//     },
//   },
];