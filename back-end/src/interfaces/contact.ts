interface IContact {
    _id: string;
    name: string,
    email: string,
    phone: number,
    address: string,
    content:string,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null,
}
export default IContact