import * as React from 'react';
import "@triniwiz/nativescript-yogalayout/react";

export function YogaLayout() {
    return (
        <yoga>
            <yoga backgroundColor="aqua" margin={50} padding={30} borderRadius={10} borderWidth={5} borderColor="purple">
                <yoga backgroundColor="red" padding={2}>
                    <yoga flex={.3} backgroundColor="green">
                        <label alignSelf="center" color="black" text="First"/>
                    </yoga>
                    <yoga flex={.5} backgroundColor="white">
                        <label alignSelf="center" color="black" text="Second"/>
                    </yoga>
                    <yoga backgroundColor="pink">
                        <label alignSelf="center" color="black" text="Third"/>
                    </yoga>
                    <label alignSelf="center" color="blue" text="Something"/>
                </yoga>
                <yoga position="absolute" bottom={10} right={10} width={100} height={100} backgroundColor="yellow" padding={10}>
                    <label color="black" text="Absolute"/>
                </yoga>
            </yoga>
            {/* 
            <yoga position="absolute" top={0} left={0} width={200} height={200} backgroundColor="yellow" padding={10}>
                <textField text="{{ flex }}"/>
                <slider loaded="{{ sliderLoaded }}"/>
            </yoga>
            */}
        </yoga>
    );
}
