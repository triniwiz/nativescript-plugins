import * as React from 'react';
import { View } from '@triniwiz/nativescript-yogalayout/react';

export function ViewExample() {
	return (
		<View>
			<View
				style={{
					backgroundColor: 'aqua',
					margin: 50,
					padding: 30,
					borderRadius: 10,
					borderWidth: 5,
					borderColor: 'purple',
				}}
			>
				<View
					style={{
						backgroundColor: 'red',
						padding: 2,
					}}
				>
					<View
						style={{
							flex: 0.3,
							backgroundColor: 'green',
						}}
					>
						<label alignSelf="center" color="black" text="First" />
					</View>
					<View
						style={{
							flex: 0.5,
							backgroundColor: 'white',
						}}
					>
						<label alignSelf="center" color="black" text="Second" />
					</View>
					<View style={{ backgroundColor: 'pink' }}>
						<label alignSelf="center" color="black" text="Third" />
					</View>
					<label alignSelf="center" color="blue" text="Something" />
				</View>
				<View
					style={{
						position: 'absolute',
						bottom: 10,
						right: 10,
						width: 100,
						height: 100,
						backgroundColor: 'yellow',
						padding: 10,
					}}
				>
					<label color="black" text="Absolute" />
				</View>
			</View>
			{/* 
            <View position="absolute" top={0} left={0} width={200} height={200} backgroundColor="yellow" padding={10}>
                <textField text="{{ flex }}"/>
                <slider loaded="{{ sliderLoaded }}"/>
            </View>
            */}
		</View>
	);
}
