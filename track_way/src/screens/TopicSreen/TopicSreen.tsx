import { ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import TopicResourceItem from '../../components/TopicResourceItem'
import { RootStackParamList } from '../../types/types.d'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TopicT } from '../../types/models.d'
import Markdown from 'react-native-markdown-display'
import TopicResourseSection from '../../components/TopicResourseSection'
import TopicCustomBtn from '../../components/TopicCustomBtn'
import { topics } from '../../data/topic'

type TopicScreenProps = NativeStackScreenProps<RootStackParamList, 'Topic'>;

const TopicSreen: React.FC<TopicScreenProps> = (p) => {

  const [topic, setTopic] = useState<TopicT>()

  useEffect(() => {
    setTopic(topics.filter(t => t.id === p.route.params.id)[0]);

    p.navigation.setOptions({ title: topic?.title })
  }, [topic])


  return (
    <ScrollView style={styles.container}>

      <TopicResourseSection visible={!!topic?.description} title="Description" >
        {topic?.description &&
          <Markdown>{
            topic?.description
          }</Markdown>}
      </TopicResourseSection>

      <TopicResourseSection visible={!!topic?.material} title="Material" >
        {topic?.material && topic?.material.map((r, i) =>
          <TopicResourceItem isFinal={i + 1 == topic.material?.length} idx={i} key={r.id} {...r} />
        )}
      </TopicResourseSection>

      <TopicResourseSection visible={!!topic?.ctxt} title="Context" >
        {topic?.ctxt &&
          //@ts-ignore
          <Markdown>{
            topic?.ctxt
          }</Markdown>}
      </TopicResourseSection>

      <TopicResourseSection visible={!!topic?.exercises} title="Exercises" >
        {topic?.exercises && topic?.exercises?.map((r, i) =>
          <TopicResourceItem isFinal={i + 1 == topic.exercises?.length} idx={i} key={r.id} {...r} />
        )}
      </TopicResourseSection>

      <TopicCustomBtn title="Start" onPress={onStartBtnPress} />

    </ScrollView>
  )

  function onStartBtnPress() {

    p.navigation.navigate('Quiz', { id: '123' });

  }
}

export default TopicSreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.light.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginTop: 25,
    marginBottom: 10,
  },
}) 