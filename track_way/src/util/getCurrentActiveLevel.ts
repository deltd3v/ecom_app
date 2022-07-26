import { TopicT } from "../types/models.d";

export const getCurrentActiveLevel = (levels: TopicT[][]) => levels.reduce((a, l) => (l.every(t => t.progress >= 1 ? a++ : a), a), 0)   