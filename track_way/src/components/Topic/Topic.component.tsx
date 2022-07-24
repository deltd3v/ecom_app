import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { TopicT } from './topic.data'
 import ProgressCircle from '../ProgressCircle'
import { useWindowDimensions } from 'react-native'

const Topic: React.FC<{ isUnlocked: boolean } & TopicT> = (p) => {
    const { width, height } = useWindowDimensions()
    return (
        <View style={[styles.container, { width: width / 3 - 30 }]}>
            {/* progress ring */}
            <View style={styles.progress}>

                <ProgressCircle
                    bgColor={Colors.light.background}
                    pgColor={Colors.light.secondary}
                    strokeWidth={8}
                    size={width / 3 - 30}
                    progressPercent={p.progress}
                />

                    {/* topic circle */}
                    <View style={[styles.circle, { width: (width / 3 - 30) - 20,backgroundColor: p.isUnlocked ? Colors.light.primary  : Colors.light.dark}]}>
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
        maxWidth: 150,
        margin: 10,
        alignItems: 'center',
     },
    progress: {
        width: "100%",
        aspectRatio: 1,
        justifyContent: 'center'
    },
    circle: {
        alignSelf: 'center',
        borderRadius: 999,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: "50%",
        aspectRatio: 1,
    },
    title: {
        color: Colors.light.dark,
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 16,
        fontWeight: "500",
    },
}) 