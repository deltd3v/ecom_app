import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import TopicResourceItem from '../../components/TopicResourceItem'
import { RootStackParamList } from '../../types/types.d'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { topics } from '../../components/Topic/topic.data'
import { TopicT } from '../../types/models'
import Markdown from 'react-native-markdown-display'
import TopicResourseSection from '../../components/TopicResourseSection'
export type Props = NativeStackScreenProps<RootStackParamList, 'Topic'>;

const TopicSreen: React.FC<Props> = (p) => {

  const [topic, setTopic] = useState<TopicT>()

  useEffect(() => {
    setTopic(topics.filter(t => t.id === p.route.params.id)[0]);
    p.navigation.setOptions({ title: topic?.title })
  }, [topic])


  return (
    <ScrollView style={styles.container}>

      <TopicResourseSection visible={!!topic?.description} title="Description" >
        {topic?.description && <Markdown>{
          topic?.description
        }</Markdown>}
      </TopicResourseSection>

      <TopicResourseSection visible={!!topic?.material} title="Material" >
        {topic?.material && topic?.material.map((r, i) =>
          <TopicResourceItem isFinal={i + 1 == topic.material?.length} idx={i} key={r.id} {...r} />
        )}
      </TopicResourseSection>


      <TopicResourseSection visible={!!topic?.ctxt} title="Context" >
        {topic?.ctxt && <Markdown>{
          topic?.ctxt
        }</Markdown>}
      </TopicResourseSection>

      <TopicResourseSection visible={!!topic?.exercises} title="Exercises" >
        {topic?.exercises && topic?.exercises?.map((r, i) =>
          <TopicResourceItem isFinal={i + 1 == topic.exercises?.length} idx={i} key={r.id} {...r} />
        )}
      </TopicResourseSection>


    </ScrollView>
  )
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