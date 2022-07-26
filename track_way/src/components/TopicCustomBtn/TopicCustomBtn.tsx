import React from 'react';

import {
	Alert,
	ButtonProps,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';

import Colors from '../../constants/Colors';

interface P extends PressableProps {
	title?: string;
}

const TopicCustomBtn: React.FC<P> = (p) => {
	return (
		<Pressable
			{...p}
			style={({ pressed }) => ({
				...styles.btn,
				backgroundColor: pressed ? Colors.light.dark : Colors.light.primary,
			})}
		>
			<>
				{p.title && <Text style={styles.text}> {p.title}</Text>}
				{p.children && p.children}
			</>
		</Pressable>
	);
};

export default TopicCustomBtn;

const styles = StyleSheet.create({
	btn: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: 'auto',
		marginVertical: 20,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 8,
		// ({pressed}) => ({backgroundColor: pressed ? Colors.light.tertiary :Colors.light.dark}), // why isn't this possible ?
	},
	text: {
		fontSize: 16,
		fontWeight: '600',
		color: Colors.light.white,
	},
});
