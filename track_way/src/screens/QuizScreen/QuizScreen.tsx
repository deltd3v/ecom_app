import React, { useEffect, useState } from 'react';

import { GestureResponderEvent, Image, ScrollView, StyleSheet, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import QuizChoice from '../../components/QuizChoice';

import Colors from '../../constants/Colors';
import { QuizChoiceT, QuizT } from '../../types/models.d';

const QuizScreen = () => {
    const [qs, setQs] = useState({} as QuizT[]);
    const [q, setQ] = useState({} as QuizT);
    const [answers, setSelectedAnwers] = useState<QuizChoiceT[]>([])

    useEffect(() => {
        import('../../data/quizes').then((m) => setQs(m.default));
        setQ(qs[0]);
    }, []);


    let onChoiceSelect = (ch: QuizChoiceT) => setSelectedAnwers(
        answers =>
            answers.includes(ch) ?
                answers.filter(c => c !== ch) :
                (q.answers?.length! > 1 ?
                    [...answers, ch] :
                    [ch])
    )



    return (

        <ScrollView style={styles.container}>
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
                </>
            )}
        </ScrollView>
    );


};

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.white,
    },
    question: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.light.dark,
        marginVertical: 0,
    },
    image: {
        aspectRatio: 1,
        width: '100%',
        height: 'auto',
    },
});



const user = ["username", "password", "age"];

const userA = ["evans", "$.3x!-3f€4o/5", 33];

