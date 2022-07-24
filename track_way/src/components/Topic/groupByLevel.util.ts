
import  { TopicT } from './topic.data'


// sort the list of topics into different arrays labeled by the level
export const groupByLevel = (topics: TopicT[]) => {
   
    let levels: TopicT[][] = [];
    // [ [level-0], [level-1], .. ]

    topics.forEach((t) =>  levels[t.level] ? (levels[t.level] = [t, ...levels[t.level]]) : (levels[t.level] = [t]));
       
    return levels
}