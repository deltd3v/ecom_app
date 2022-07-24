import { groupByLevel } from "./groupByLevel.util";

 
export type TopicT = {
    id?: string | number;
    title: string | number;
    imgUri: string ;
    level:   number;
    progress:  number;
}
  
export const topics: TopicT[] = ([
    {
        title: "Topic 0",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",  
        level: 0,
        progress: 1 
    }, 
    {
        title: "Topic 1",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 1,
        progress: 1
    }, 
    {
        title: "Topic 2",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 1,
        progress: .7
    }, 
    {
        title: "Topic 3",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 2,
        progress: 0
    }, 
    {
        title: "Topic 4",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 3,
        progress: 0
    }, 
    {
        title: "Topic 5",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 3,
        progress: 0
    }, 
    {
        title: "Topic 6",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 4,
        progress: 0
    }, 
    {
        title: "Topic 7",
        imgUri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Black_star.png",
        // imgUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png",
        level: 4,
        progress: 0
    } 
])

export const levels = groupByLevel(topics)
 
/*

source: https://commons.wikimedia.org/wiki/Star_symbol

blank(future level)
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Star-.svg/180px-Star-.svg.png

black(current level)
https://commons.wikimedia.org/wiki/Star_symbol#/media/File:Black_star.svg

quarter(completed level)
https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Star%C2%BC.svg/180px-Star%C2%BC.svg.png

half(completed level)
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Star%C2%BD.svg/180px-Star%C2%BD.svg.png

almost(completed level)
https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Star%C2%BE.svg/180px-Star%C2%BE.svg.png

gold(complete level)
https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/180px-Golden_star.svg.png

disabled(unavailable-level)
https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/177px-Star_empty.svg.png

*/
   