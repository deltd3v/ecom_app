import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { TopicT } from './topic.data'
import ProgressCircle from '../ProgressCircle'
import { useWindowDimensions } from 'react-native'

const Topic: React.FC<{ isUnlocked: boolean; currentLevel: number; } & TopicT> = (p) => {
    const { width, height } = useWindowDimensions()

    function getCircleTheme() {
        if (p.isUnlocked) {
            if (p.progress >= 1) {
                return Colors.light.primary
            }
            if (p.progress>=.1 && p.progress < 1) {
                return Colors.light.tertiary

            }
            return Colors.light.dark

        }
        return Colors.light.dark



    }
    return (
        <View style={[styles.container, { width: width / 3 - 30 }]}>
            {/* progress ring */}
            <View style={styles.progress}>

                <ProgressCircle
                    bgColor={Colors.light.background}
                    pgColor={p.progress >= 1 ? Colors.light.primary : Colors.light.tertiary}
                    strokeWidth={8}
                    size={width / 3 - 30}
                    progressPercent={p.progress}
                />

                {/* topic circle */}
                <View style={[styles.circle, {
                    width: (width / 3 - 30) - 20, backgroundColor: getCircleTheme()
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
        maxWidth: 150,
        margin: 10,
        alignItems: 'center',
    },
    progress: {
        width: "100%",
        aspectRatio: 1,
        justifyContent: 'center',
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