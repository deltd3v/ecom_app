import React from 'react';

import { Pressable, StyleSheet, Text } from 'react-native';
import { PressableProps } from 'react-native';

import Colors from '../../constants/Colors';
import type { QuizChoiceT } from '../../types/models.d';

interface QuizChoiceProps extends PressableProps {
	choice?: QuizChoiceT;
	selected?: boolean;
	onChoiceSelect: (ch: QuizChoiceT) => void;
}

const QuizChoice: React.FC<QuizChoiceProps> = (p) => {
	return (
		<Pressable
			style={[
				styles.container,

				p.selected
					? { borderColor: Colors.light.primary }
					: { borderColor: Colors.light.lightGray },
			]}
			onPress={(_) => p.onChoiceSelect(p.choice!)}
			{...p}
		>
			<Text
				style={[
					styles.text,

					p.selected
						? { color: Colors.light.primary }
						: { color: Colors.light.lightGray },
				]}
			>
				{p.choice}
			</Text>
		</Pressable>
	);
};

export default QuizChoice;

const styles = StyleSheet.create({
	container: {
		padding: 8,
		borderWidth: 1,
		marginVertical: 6,
		borderRadius: 6,
		// borderColor: Colors.light.lightGray,
	},
	text: {
		fontSize: 15,
	},
});
