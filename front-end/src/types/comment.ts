interface IComment {
    _id: string;
    key: string,
    content: string,
    post: string,
    user:string,
    createdAt?: any;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IComment