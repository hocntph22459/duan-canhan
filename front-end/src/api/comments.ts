import IComment from "../interfaces/comment"
import intansce from "./intansce"

export const GetAllComment = () => {
    return intansce.get('/comments')
}

export const GetOneComment = (_id: number) => {
    return intansce.get('/comments/' + _id)
}

export const CreateComment = (data: IComment) => {
    return intansce.post('/comments', data)
}

export const UpdateComment = (data: IComment) => {
    return intansce.put('/comments/' + data._id, data)
}

export const RemoveComment = async (_id: number) => {
    try {
        const response = await intansce.delete(`/comments/${_id}`, {
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