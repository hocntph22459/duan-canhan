import { IPost } from "../types/post"
import intansce from "./intansce"
export const GetAllPost = () => {
    return intansce.get('/posts')
}

export const GetOnePost = (_id: string) => {
    return intansce.get('/posts/' + _id)
}

export const CreatePost = (data: IPost) => {
    return intansce.post(`/posts`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}

export const UpdatePost = (data: IPost) => {
    return intansce.put(`/posts/${data._id}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}

export const RemovePost = async (_id: string) => {
    return intansce.delete(`/posts/${_id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    });
}