/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/types.d';

const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			Root: {
				screens: {
					Topics: {
						screens: {
							TabOneScreen: 'one',
						},
					},
					Profile: {
						screens: {
							TabTwoScreen: 'two',
						},
					},
				},
			},
			// Modal: 'modal',
			NotFound: '*',
		},
	},
};

export default linking;
