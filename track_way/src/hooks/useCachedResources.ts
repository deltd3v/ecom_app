import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect, useState } from 'react';

import {
	useFonts
	, Inter_100Thin
	, Inter_200ExtraLight
	, Inter_300Light
	, Inter_400Regular
	, Inter_500Medium
	, Inter_600SemiBold
	, Inter_700Bold
	, Inter_800ExtraBold
	, Inter_900Black
} from '@expo-google-fonts/inter';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...FontAwesome.font,
					// 'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),

					'Inter-Thin': Inter_100Thin,
					'Inter-ExtraLight': Inter_200ExtraLight,
					'Inter-Light': Inter_300Light,
					'Inter-Regular': Inter_400Regular,
					'Inter-Medium': Inter_500Medium,
					'Inter-SemiBold': Inter_600SemiBold,
					'Inter-Bold': Inter_700Bold,
					'Inter-ExtraBold': Inter_800ExtraBold,
					'Inter-Black': Inter_900Black,

				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setTimeout(() => {

					setLoadingComplete(true);
				}, 5000)
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
