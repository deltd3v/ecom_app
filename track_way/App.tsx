import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import React, { useEffect } from 'react';

import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return (
			<View
				style={{
					flex: 1,
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						/*fontFamily: 'Inter-Regular',*/
						fontSize: 28,
					}}
				>
					Track Way! 👋
				</Text>
			</View>
		);
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</SafeAreaProvider>
		);
	}
}
