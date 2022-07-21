
import  { TopicT } from './topic.data'


// sort the list of topics into different arrays labeled by the level
 export const groupByLevel = (topics: TopicT[]) => {
   
    let levels: TopicT[][] = [];

    topics.forEach((t) => {
    if (!levels[t.level]) {
        levels[t.level] = [];
    }

    levels[t.level].push(t)

    });

    return levels
}