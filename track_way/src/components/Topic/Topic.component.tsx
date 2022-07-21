import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { TopicT } from './topic.data'

const Topic: React.FC<TopicT> = (p) => {
    return (
        <View style={styles.container}>
            {/* topic circle */}
            <View style={styles.circle}>
                <Image style={styles.img} source={{
                    uri: p.imgUri
                }}></Image>
            </View>
            {/* topic title */}
            <Text style={styles.title}>{ p.title}</Text>
        </View>
    )
}

export default Topic

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        width: "30%",
        maxWidth: 150,
    },
    circle: {
        // backgroundColor: Colors.light.tertiary,
        backgroundColor: "white",
        borderRadius: 999,
        aspectRatio: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: "100%",
        aspectRatio: 1,
    },
    title: {
        color: Colors.light.dark,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
        fontWeight: "500",
    },
})