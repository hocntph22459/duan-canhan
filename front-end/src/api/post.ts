import IPost from "../interfaces/post"
import intansce from "./intansce"

export const GetAllPost = () => {
    return intansce.get('/posts')
}

export const GetOnePost = (_id:any) => {
    return intansce.get('/posts/' + _id)
}

export const CreatePost = (data:IPost) => {
    return intansce.post('/posts',data)
}

export const UpdatePost = (data:IPost) => {
    return intansce.put('/posts/' + data._id,data)
}

export const RemovePost = (_id:any) => {
    return intansce.delete('/posts/' + _id)
}