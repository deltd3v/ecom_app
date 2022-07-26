import React, { useEffect, useState } from 'react';

import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';

import Colors from '../../constants/Colors';
import { QuizT } from '../../types/models.d';

const QuizScreen = () => {
	const [qs, setQs] = useState({} as QuizT[]);
	const [q, setQ] = useState({} as QuizT);

	useEffect(() => {
		import('../../data/quizes').then((m) => setQs(m.default));
		console.log('ha');
		setQ(qs[1]);
	}, [qs]);

	return (
		<ScrollView style={styles.container}>
			{!!q && (
				<>
					<Text style={styles.question}>{q.question}</Text>
					{q.imageUrl && (
						<Image
							resizeMode="contain"
							style={styles.image}
							source={{ uri: q.imageUrl }}
						/>
					)}
					{!!q.content && <Markdown>{q.content}</Markdown>}
				</>
			)}
		</ScrollView>
	);
};

export default QuizScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.white,
	},
	question: {
		fontSize: 20,
		fontWeight: '600',
		color: Colors.light.dark,
		marginVertical: 10,
	},
	image: {
		aspectRatio: 1,
		width: '100%',
		height: 'auto',
	},
});
