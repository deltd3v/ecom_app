import React, { useEffect } from 'react';

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
			style={[
				styles.btn,
				p.style as any,
				p.disabled
					? {
							backgroundColor: Colors.light.lightGray,
					  }
					: {
							backgroundColor: Colors.light.primary,
					  },
			]}
			disabled={p.disabled}
			{...p}
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
		padding: 10,
		borderRadius: 5,
		marginVertical: 5,
		alignItems: 'center',
		justifyItems: 'center',
	},
	text: {
		fontSize: 16,
		fontWeight: '600',
		color: Colors.light.white,
	},
});
