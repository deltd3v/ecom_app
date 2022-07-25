export type TopicT = {
    id?: string | number;
    title: string;
    imgUri: string;
    level: number;
    progress: number;
    resources?: TopicResourceItemT[]
}

export type TopicResourceItemT = {
    id?: string;
    title?: string;
    url?: string;
    completed?: boolean;
}