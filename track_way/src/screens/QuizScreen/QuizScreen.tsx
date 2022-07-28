import React, { useEffect, useState } from 'react';

import { Alert, GestureResponderEvent, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import QuizChoice from '../../components/QuizChoice';
import TopicCustomBtn from '../../components/TopicCustomBtn';

import Colors from '../../constants/Colors';
import { QuizChoiceT, QuizT } from '../../types/models.d';

const QuizScreen = () => {
    const [qs, setQs] = useState({} as QuizT[]);
    const [q, setQ] = useState({} as QuizT);
    const [answers, setSelectedAnwers] = useState<QuizChoiceT[]>([])




    let onChoiceSelect = (ch: QuizChoiceT) => setSelectedAnwers(
        answers =>
            answers.includes(ch) ?
                answers.filter(c => c !== ch) :
                (q.answers?.length! > 1 ?
                    [...answers, ch] :
                    [ch])

    )

    useEffect(() => {
        import('../../data/quizes').then((m) => setQs(m.default));
        setQ(qs[0]);



    }, [answers]);


    const wasAnsweredCorrectly = () => {
        if (answers.length === q.answers?.length) {
            return q.answers.every(an => answers.includes(an));
        }

        return false;
    }

    return (

        <ScrollView contentContainerStyle={styles.container}>
            {!!q && (
                <>
                    <Text style={styles.question}>{q.question}</Text>

                    {q.imageUrl && (
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={{ uri: q.imageUrl }}
                        />
                    )}
                    {!!q.content && <Markdown>{q.content}</Markdown>}

                    {q.choices?.map((ch, i) =>
                        <QuizChoice
                            key={`i-${i}`}
                            choice={ch}
                            onChoiceSelect={onChoiceSelect}
                            selected={answers.includes(ch)}
                        />
                    )}

                    <View style={styles.btnContainer}>

                        <TopicCustomBtn
                            onPress={onSubmit}
                            disabled={answers.length == 0}
                            title="Submit">
                        </TopicCustomBtn>
                    </View>

                </>
            )}
        </ScrollView>
    );

    function onSubmit() {
        wasAnsweredCorrectly() ? Alert.alert("✅ Correct !", "The answer was correct !") : Alert.alert("❌ Incorrect !", "The question was answered incorrectly !!");
    }
};

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // minHeight: '100%',
        flexGrow: 1,
        backgroundColor: Colors.light.white,
    },
    question: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.light.dark,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 300,
        minHeight: 300,
    },

    btnContainer: {
        width: "100%",
        marginTop: 'auto',
    },
    btn: {
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        color: Colors.light.white,
    }


});

