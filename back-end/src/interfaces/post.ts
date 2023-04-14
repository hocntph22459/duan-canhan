interface IPost {
    _id: string;
    title: string,
    content: string,
    images: string,
    author: string,
    tags:string,
    views: number,
    likes: number,
    comments: string,
    CategoryId:string[]
}
export default IPost