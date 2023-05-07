interface IComment {
    _id: string;
    content: string,
    UserId:string[],
    PostId:string[],
    createdAt?: String;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IComment