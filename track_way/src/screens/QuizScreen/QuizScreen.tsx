import React, { useEffect, useState } from 'react';

import { GestureResponderEvent, Image, ScrollView, StyleSheet, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import QuizChoice from '../../components/QuizChoice';

import Colors from '../../constants/Colors';
import { QuizChoiceT, QuizT } from '../../types/models.d';

const QuizScreen = () => {
    const [qs, setQs] = useState({} as QuizT[]);
    const [q, setQ] = useState({} as QuizT);
    const [selectedChoices, setSelectedChoices] = useState<QuizChoiceT[]>([])

    useEffect(() => {
        import('../../data/quizes').then((m) => setQs(m.default));
        setQ(qs[0]);
    }, []);


    let onChoiceSelect = (ch: QuizChoiceT) => setSelectedChoices(
        chs =>
            chs.includes(ch) ?
                chs.filter(c => c !== ch) :
                (q.type === "SINGLE_ANSWER" ? [ch] : [...chs, ch])
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
                            selected={selectedChoices.includes(ch)}
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
        marginVertical: 10,
    },
    image: {
        aspectRatio: 1,
        width: '100%',
        height: 'auto',
    },
});
