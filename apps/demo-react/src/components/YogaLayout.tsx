import * as React from 'react';
import "@triniwiz/nativescript-yogalayout/react";

export function YogaLayout() {
    return (
        <view>
            <view backgroundColor="aqua" margin={50} padding={30} borderRadius={10} borderWidth={5} borderColor="purple">
                <view backgroundColor="red" padding={2}>
                    <view flex={.3} backgroundColor="green">
                        <label alignSelf="center" color="black" text="First"/>
                    </view>
                    <view flex={.5} backgroundColor="white">
                        <label alignSelf="center" color="black" text="Second"/>
                    </view>
                    <view backgroundColor="pink">
                        <label alignSelf="center" color="black" text="Third"/>
                    </view>
                    <label alignSelf="center" color="blue" text="Something"/>
                </view>
                <view position="absolute" bottom="10" right="10" width="100" height="100" backgroundColor="yellow" padding="10">
                    <label color="black" text="Absolute"/>
                </view>
            </view>
            {/* 
            <view position="absolute" top="0" left="0" width="200" height="200" backgroundColor="yellow" padding="10">
                <TextField text="{{ flex }}"/>
                <Slider loaded="{{ sliderLoaded }}"/>
            </view>
            */}
        </view>
    );
}
