import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

const QuizProgressBar: React.FC<{ progress?: number }> = (p) => {
	return (
		<View style={styles.container}>
			<View
				style={[{ width: `${Math.max(2, p.progress!)}%` }, styles.bar]}
			></View>
		</View>
	);
};

export default QuizProgressBar;

const styles = StyleSheet.create({
	container: {
		height: 8,
		backgroundColor: Colors.light.white,
		paddingVertical: 8,
		color: 'red',
	},
	bar: {
		height: '100%',
		paddingVertical: 4,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		backgroundColor: Colors.light.primary,
	},
	title: {},
});
