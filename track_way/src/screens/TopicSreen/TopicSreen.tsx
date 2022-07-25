import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import TopicResourceItem from '../../components/TopicResourceItem'
import { RootStackParamList, RootStackScreenProps } from '../../types/types.d'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { topics } from '../../components/Topic/topic.data'
import { TopicT } from '../../types/models'
import { useNavigation } from '@react-navigation/native'
export type Props = NativeStackScreenProps<RootStackParamList, 'Topic'>;

const TopicSreen: React.FC<Props> = (p) => {

  const [topic, setTopic] = useState<TopicT>()

  useEffect(() => {
    setTopic(topics.filter(t => t.id === p.route.params.id)[0]);
    p.navigation.setOptions({ title: topic?.title })
  }, [topic])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topic Content </Text>

      {topic?.resources?.map((r, i) => <TopicResourceItem isFinal={i + 1 == topic.resources?.length} idx={i} key={r.id} {...r} />)}
    </View>
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
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
}) 