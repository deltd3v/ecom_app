import { ScrollView, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

const QuizScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.question}>
                Select the right answer
            </Text>
            <Image style={styles.image}
                resizeMode={'contain'}
                source={{
                    uri: 'https://raw.githubusercontent.com/deltd3v/track_way/main/track_way/assets/carbon%20(1).png'
                }} />

        </ScrollView>
    )
}

export default QuizScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.white,
    },
    question: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.light.dark
    },
    image: {
        aspectRatio: 1,
        width: '100%',
        height: 'auto',
    },
})