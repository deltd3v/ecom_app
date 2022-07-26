import { Feather } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import React from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import { TopicResourceItemT } from '../../types/models.d';

const TopicResourceItem: React.FC<
	{ idx?: number; isFinal?: boolean } & TopicResourceItemT
> = (p) => {
	function onPress() {
		WebBrowser.openBrowserAsync(p.url!);
	}

	return (
		<Pressable onPress={onPress} style={styles.container}>
			<View style={[styles.idxContainer, p.completed ? styles.completed : {}]}>
				{p.completed ? (
					<Feather
						name="check"
						color={Colors.light.white}
						style={{ fontSize: 20 }}
					/>
				) : (
					<Text style={styles.idxTitle}>{p.idx! + 1}</Text>
				)}
			</View>
			<Text>{p.title}</Text>
			<Feather style={styles.icon} name="share" />
			{!p.isFinal && (
				<View
					style={[
						styles.vertLine,
						{
							backgroundColor: p.completed
								? Colors.light.primary
								: Colors.light.dark,
						},
					]}
				></View>
			)}
		</Pressable>
	);
};

export default TopicResourceItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
	},
	idxContainer: {
		width: 30,
		borderWidth: 2,
		aspectRatio: 1,
		marginRight: 10,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: Colors.light.dark,
	},
	completed: {
		color: 'red',
		borderColor: Colors.light.primary,
		backgroundColor: Colors.light.primary,
	},
	idxTitle: {
		fontWeight: '600',
	},
	icon: {
		fontSize: 20,
		marginLeft: 'auto',
	},
	vertLine: {
		position: 'absolute',
		top: 30,
		left: 15,

		width: 2,
		height: 20,

		// backgroundColor: Colors.light.primary
	},
});
