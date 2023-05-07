import IPost from "../interfaces/post"
import intansce from "./intansce"
export const GetAllPost = () => {
    return intansce.get('/posts')
}

export const GetOnePost = (_id: string) => {
    return intansce.get('/posts/' + _id)
}

export const CreatePost = async (data: IPost) => {
    try {
        return intansce.post(`/posts`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const UpdatePost = async (data: IPost) => {
    try {
        const response = await intansce.put(`/posts/${data._id}`, data, {
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

export const RemovePost = async (_id: string) => {
    try {
        const response = await intansce.delete(`/posts/${_id}`, {
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