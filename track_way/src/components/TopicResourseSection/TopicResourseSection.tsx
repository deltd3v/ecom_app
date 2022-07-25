import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

const TopicResourseSection: React.FC<{ title?: string; visible?: boolean; }> = (p) => {


    return p.visible ? <View style={styles.container}>
        {p.title && <Text style={styles.title}> {p.title}</Text>}
        {p.children || <></>}
    </View>
        : null
}

export default TopicResourseSection

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 1.1,
        // marginTop: 30,
        marginBottom: 10,
        // color: Colors.light.dark
    },
})