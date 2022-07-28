import { NativeStackScreenProps } from '@react-navigation/native-stack';

import React, { useEffect, useState } from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

import TopicCustomBtn from '../../components/TopicCustomBtn';
import TopicResourceItem from '../../components/TopicResourceItem';
import TopicResourseSection from '../../components/TopicResourseSection';
import Colors from '../../constants/Colors';
import { topics } from '../../data';
import { TopicT } from '../../types/models.d';
import { RootStackParamList } from '../../types/types.d';

type TopicScreenProps = NativeStackScreenProps<RootStackParamList, 'Topic'>;

const TopicSreen: React.FC<TopicScreenProps> = (p) => {
	const [topic, setTopic] = useState<TopicT>();

	useEffect(() => {
		setTopic(topics.filter((t) => t.id === p.route.params.id)[0]);

		p.navigation.setOptions({ title: topic?.title });
	}, [topic]);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<TopicResourseSection visible={!!topic?.description} title="Description">
				{topic?.description && <Markdown>{topic?.description}</Markdown>}
			</TopicResourseSection>

			<TopicResourseSection visible={!!topic?.material} title="Material">
				{topic?.material &&
					topic?.material.map((r, i) => (
						<TopicResourceItem
							isFinal={i + 1 == topic.material?.length}
							idx={i}
							key={r.id}
							{...r}
						/>
					))}
			</TopicResourseSection>

			<TopicResourseSection visible={!!topic?.ctxt} title="Context">
				{topic?.ctxt && (
					//@ts-ignore
					<Markdown>{topic?.ctxt}</Markdown>
				)}
			</TopicResourseSection>

			<TopicResourseSection visible={!!topic?.exercises} title="Exercises">
				{topic?.exercises &&
					topic?.exercises?.map((r, i) => (
						<TopicResourceItem
							isFinal={i + 1 == topic.exercises?.length}
							idx={i}
							key={r.id}
							{...r}
						/>
					))}
			</TopicResourseSection>

			<TopicCustomBtn title="Start" onPress={onStartBtnPress} />
		</ScrollView>
	);

	function onStartBtnPress() {
		p.navigation.navigate('Quiz', { id: '123' });
	}
};

export default TopicSreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		minHeight: '100%',
		backgroundColor: Colors.light.white,
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		letterSpacing: 1.5,
		marginTop: 25,
		marginBottom: 10,
	},
});
