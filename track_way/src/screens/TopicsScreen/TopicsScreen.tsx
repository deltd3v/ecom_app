import { StyleSheet, FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Topic from '../../components/Topic'
import TopicsGroupRow from '../../components/TopicsGroupRow'
import { topics, TopicT } from '../../components/Topic/topic.data'
import { groupByLevel } from '../../components/Topic/groupByLevel.util'
import { getCurrentActiveLevel } from '../../components/Topic/getCurrentActiveLevel.util'

const TopicsScreen = () => {
  const [levels, setLevels] = useState([] as TopicT[][]);

  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    setLevels(groupByLevel(topics))
    setCurrentLevel(getCurrentActiveLevel(levels))
  }, [])

  return (
    
    <View style={styles.container}>
      <Text>{ currentLevel }</Text>
      <FlatList
        data={levels} 
        bounces={true}
        showsVerticalScrollIndicator={false}

        renderItem={({ item: level }) =>
          <TopicsGroupRow>

            {
              level && level.map((topic, i) => (  
                <Topic key={i} isUnlocked={topic.level < currentLevel} currentLevel={currentLevel} {...topic} />
              ))
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