import { TopicT } from '../types/models.d';

// sort the list of topics into different arrays labeled by the level
export const groupByLevel = (topics: TopicT[]) => {
	let levels: TopicT[][] = [];
	// [ [level-0], [level-1], .. ]

	topics.forEach((t, i) =>
		levels[t.level]
			? (levels[t.level] = [...levels[t.level], { id: i, ...t }])
			: (levels[t.level] = [{ id: i, ...t }])
	);

	return levels;
};
