import ICategory from "../interfaces/category"
import intansce from "./intansce"

export const GetAllCategory = () => {
    return intansce.get('/categories')
}

export const GetOneCategory = (_id: number) => {
    return intansce.get('/categories/' + _id)
}

export const CreateCategory = async (data: ICategory) => {
    try {
        const response = await intansce.post(`/categories`, data, {
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

export const UpdateCategory = async (data: ICategory) => {
    try {
        const response = await intansce.put(`/categories/${data._id}/`, data, {
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

export const RemoveCategory = async (_id: number) => {
    try {
        const response = await intansce.delete(`/categories/${_id}`, {
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