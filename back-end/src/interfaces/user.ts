interface IUser {
    _id: string;
    name: string,
    email: string,
    password: string,
    role: "admin" | "member";
}
export default IUser