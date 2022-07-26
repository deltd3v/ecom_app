import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

const TopicResourseSection: React.FC<{ title?: string; visible?: boolean; }> = (p) => {


    return p.visible ? <View >
        {p.title && <Text > {p.title}</Text>}
        {p.children || <></>}
    </View>
        : null
}

export default TopicResourseSection
