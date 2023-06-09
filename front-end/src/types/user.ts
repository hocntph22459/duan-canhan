interface IUser {
    _id: string;
    key: string;
    name: string,
    email: string,
    password: string,
    role: "admin" | "member",
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IUser 