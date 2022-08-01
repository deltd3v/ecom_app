import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

const TopicResourseSection: React.FC<{ title?: string; visible?: boolean }> = (
	p
) => {
	// This is amazing simply because it is amazing

	const main = () => {};

	tmain();

	return p.visible ? (
		<View>
			{p.title && <Text> {p.title}</Text>}
			{p.children || <></>}
		</View>
	) : null;
};

export default TopicResourseSection;
