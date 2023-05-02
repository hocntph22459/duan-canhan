import IUser from "../interfaces/user"
import intansce from "./intansce"

export const GetAllUser = () => {
    return intansce.get('/users')
}

export const GetOneUser = (_id:string) => {
    return intansce.get('/users/' + _id)
}

export const UpdateUser = (data:IUser) => {
    return intansce.put('/users/' + data._id,data)
}

export const RemoveUser = async(_id:string) => {
    try {
        const response = await intansce.delete(`/users/${_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
        if (response && response.data) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
}