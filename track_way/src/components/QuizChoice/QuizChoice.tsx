import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { QuizChoiceT } from '../../types/models.d'
import Colors from '../../constants/Colors'
import { PressableProps } from 'react-native'

interface QuizChoiceProps {

    choice?: QuizChoiceT; selected?: boolean;
    onChoiceSelect: (ch: QuizChoiceT) => void;
}

const QuizChoice: React.FC<QuizChoiceProps> = (p) => {
    return (
        <Pressable
            style={[
                styles.container,

                p.selected ?
                    { borderColor: Colors.light.quatenary } :
                    { borderColor: Colors.light.lightGray }

            ]}
            onPress={_ => p.onChoiceSelect(p.choice!)}
        >
            <Text style={[
                styles.text,

                p.selected ?
                    { color: Colors.light.quatenary } :
                    { color: Colors.light.lightGray }

            ]}>
                {p.choice}
            </Text>
        </Pressable>
    )
}

export default QuizChoice

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderWidth: 1,
        marginVertical: 6,
        borderRadius: 6,
        // borderColor: Colors.light.lightGray,
    },
    text: {
        fontSize: 15,
    }
})