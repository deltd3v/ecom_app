
import { TopicT } from './topic.data'

export const getCurrentActiveLevel = (levels: TopicT[][]) => levels.reduce((a, l) => (l.every(t => t.progress >= a ? a++ : false), a), 1 )   