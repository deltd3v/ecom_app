import { useNavigation } from '@react-navigation/native';

import React from 'react';

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useWindowDimensions } from 'react-native';

import Colors from '../../constants/Colors';
import { TopicT } from '../../types/models.d';
import ProgressCircle from '../ProgressCircle';

const Topic: React.FC<{ locked: boolean; currentLevel: number } & TopicT> = (
	p
) => {
	const { width, height } = useWindowDimensions();
	const nav = useNavigation();
	function getCircleTheme() {
		if (p.locked == false) {
			if (p.progress >= 1 || p.progress >= p.currentLevel) {
				return Colors.light.primary;
			}
			if (p.progress >= 0.1 && p.progress <= 0.9) {
				return Colors.light.tertiary;
			}
		}
		return Colors.light.dark;
	}

	function onPress() {
		nav.navigate('Topic', { id: p.id?.toString()! });
	}
	return (
		<Pressable
			disabled={p.locked}
			onPress={onPress}
			style={[styles.container, { width: width / 3 - 30 }]}
		>
			{/* progress ring */}
			<View style={styles.progress}>
				<ProgressCircle
					bgColor={Colors.light.background}
					pgColor={
						p.progress >= 1 ? Colors.light.primary : Colors.light.tertiary
					}
					strokeWidth={8}
					size={width / 3 - 30}
					progressPercent={p.progress}
				/>

				{/* topic circle */}
				<View
					style={[
						styles.circle,
						{
							width: width / 3 - 30 - 20,
							backgroundColor: getCircleTheme(),
						},
					]}
				>
					<Image
						style={styles.img}
						source={{
							uri: p.imgUri,
						}}
					/>
				</View>
			</View>

			{/* topic title */}
			<Text style={styles.title}>{p.title}</Text>
		</Pressable>
	);
};

export default Topic;

const styles = StyleSheet.create({
	container: {
		maxWidth: 150,
		margin: 10,
		alignItems: 'center',
	},
	progress: {
		width: '100%',
		aspectRatio: 1,
		justifyContent: 'center',
	},
	circle: {
		alignSelf: 'center',
		borderRadius: 999,
		aspectRatio: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: '50%',
		aspectRatio: 1,
	},
	title: {
		color: Colors.light.dark,
		textAlign: 'center',
		marginVertical: 5,
		fontSize: 16,
		fontWeight: '500',
	},
});
