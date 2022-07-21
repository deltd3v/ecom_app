import { StyleSheet, FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Topic from '../../components/Topic'
import TopicsGroupRow from '../../components/TopicsGroupRow'
import { topics, TopicT } from '../../components/Topic/topic.data'
import { groupByLevel } from '../../components/Topic/groupByLevel.util'

const TopicsScreen = () => {
  const [levels, setLevels] = useState([] as TopicT[][]);

  useEffect(() => {
    setLevels(groupByLevel(topics))
  }, [])

  return (
    <View style={styles.container}>

      <FlatList
        data={levels}
        showsVerticalScrollIndicator={false}

        renderItem={({ item: level }) =>
          <TopicsGroupRow>

            {
              level.map((topic,i) => (<Topic key={ i} {...topic} />))
            }
          </TopicsGroupRow>}
      /> 


    </View>
  )
}

export default TopicsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",

  }
})