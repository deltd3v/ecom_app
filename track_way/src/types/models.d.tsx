export type TopicT = {
	id?: string | number;
	title: string;
	imgUri: string;
	level: number;
	progress: number;
	description?: string;
	ctxt?: string;
	material?: TopicResourceItemT[];
	exercises?: TopicResourceItemT[];
};

export type TopicResourceItemT = {
	id?: string;
	title?: string;
	url?: string;
	completed?: boolean;
};

export type QuizT = {
	id?: string;
	question?: string;
	imageUrl?: string;
	content?: string;
	choices?: QuizChoiceT[];
	answers?: QuizAnswerT[];
};

export type QuizChoiceT = number | boolean | string
export type QuizAnswerT = number | boolean | string 