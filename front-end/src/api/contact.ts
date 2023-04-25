import IContact from "../interfaces/contact"
import intansce from "./intansce"

export const GetAllContact = () => {
    return intansce.get('/contacts')
}

export const GetOneContact = (_id:number) => {
    return intansce.get('/contacts/' + _id)
}

export const CreateContact = (data:IContact) => {
    return intansce.post('/contacts',data)
}

export const UpdateContact = (data:IContact) => {
    return intansce.put('/contacts/' + data._id,data)
}

export const RemoveContact = (_id:string) => {
    return intansce.delete('/contacts/' + _id)
}