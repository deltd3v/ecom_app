import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { TopicT } from './topic.data'

const Topic: React.FC<{ isUnlocked: boolean } & TopicT> = (p) => {
    return (
        <View style={styles.container}>
            {/* progress ring */}
            <View style={[styles.progressRing, {
                borderColor: p.isUnlocked ? Colors.light.primary : Colors.light.dark,
                backgroundColor: p.isUnlocked ? Colors.light.primary : Colors.light.dark,

            }]}>

                {/* topic circle */}
                <View style={[styles.circle, {
                    backgroundColor: p.isUnlocked ? Colors.light.primary : Colors.light.dark,
                    borderColor: Colors.light.background,

                }]}>
                    <Image style={styles.img} source={{
                        uri: p.imgUri
                    }} /> 
                </View>
            </View>

            {/* topic title */}
            <Text style={styles.title}>{p.title}</Text>
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
    progressRing: {
        borderWidth: 1,
        borderRadius: 999,
        padding: 10,
    },
    circle: {
        // backgroundColor: Colors.light.tertiary,
        backgroundColor: "white",
        borderWidth: 2,
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