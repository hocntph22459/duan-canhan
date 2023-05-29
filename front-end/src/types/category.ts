export interface ICategory {
    _id: string;
    name: string,
    posts: IPost[],
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}

interface IPost {
    _id: string;
    title: string;
    content: string;
    images: string[];
    author: string;
    tags: Tag[];
    views: number;
    likes: number;
    comments: Comment[];
    CategoryId: Category[];
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