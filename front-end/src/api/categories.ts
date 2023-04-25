import ICategory from "../interfaces/category"
import intansce from "./intansce"

export const GetAllCategory = () => {
    return intansce.get('/categories')
}

export const GetOneCategory = (_id:number) => {
    return intansce.get('/categories/' + _id)
}

export const CreateCategory = (data:ICategory) => {
    return intansce.post('/categories',data)
}

export const UpdateCategory = (data:ICategory) => {
    return intansce.put('/categories/' + data._id,data)
}

export const RemoveCategory = (_id:number) => {
    return intansce.delete('/categories/' + _id)
}