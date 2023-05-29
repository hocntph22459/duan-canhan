export default interface IhashTag {
    _id: string;
    name: string,
    posts: Post[],
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}

interface Post {
    _id: string;
    title: string;
    content: string;
    images: string[];
    author: string;
    tags: Tag[];
    views: number;
    likes: number;
    comments: Comment[];
    categoryId: Category[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}

interface Tag {
    _id: string;
    name: string;
    posts: string[];
    createdAt: string;
    updatedAt: string;
}

interface Comment {
    _id: string;
    content: string;
    author: string;
    post: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}

interface Category {
    _id: string;
    name: string;
    posts: string[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}