import { Comment } from "./comment.model";

export class Animal {
    name: string;
    image: string;
    likes: number;
    description:string;
    comments: Comment[]
}