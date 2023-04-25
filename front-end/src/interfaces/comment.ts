interface IComment {
    _id: string;
    content: string,
    UserId:string[],
    PostId:string[],
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IComment