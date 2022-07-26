export type TopicT = {
    id?: string | number;
    title: string;
    imgUri: string;
    level: number;
    progress: number;
    description?: string;
    ctxt?: string;
    material?: TopicResourceItemT[]
    exercises?: TopicResourceItemT[]
}

export type TopicResourceItemT = {
    id?: string;
    title?: string;
    url?: string;
    completed?: boolean;
}