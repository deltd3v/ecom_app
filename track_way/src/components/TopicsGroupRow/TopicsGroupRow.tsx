import React from 'react';

import { StyleSheet, View } from 'react-native';

const TopicsGroupRow: React.FC = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

export default TopicsGroupRow;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
