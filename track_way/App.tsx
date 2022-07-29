import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
	.then(result => console.log(''/*`SplashScreen.preventAutoHideAsync() succeeded: ${result}`*/))
	.catch(console.warn); // it's good to explicitly catch and inspect any error



export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();


	useEffect(() => {
		setTimeout(async () => {
			await SplashScreen.hideAsync();
		}, 2000);
	}, [])


	if (!isLoadingComplete) {
		return <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{
				fontFamily: 'Inter-Regular',
				fontSize: 28
			}}>SplashScreen Demo! 👋</Text>
		</View>
	}
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</SafeAreaProvider>
		);
	}
}
