import joi from "joi";
const contactSchema = joi.object({
    name: joi.string().regex(/^\S+$/).required().messages({
        "string.empty": 'Trường tên không được để trống',
        "any.required": 'Trường tên là bắt buộc',
    }),
    email: joi.string().regex(/^\S+$/).email().required().messages({
        "string.empty": 'Trường email không được để trống',
        "string.email": 'Trường email không đúng định dạng',
        "any.required": 'Trường email là bắt buộc',
    }),
    phone: joi.number().required().messages({
        "string.empty": 'Trường phone không được để trống',
        "any.required": 'Trường phone là bắt buộc',
    }),
    address: joi.string().regex(/^\S+$/).required().messages({
        "string.empty": 'Trường address không được để trống',
        "any.required": 'Trường address là bắt buộc',
    }),
    support: joi.string().regex(/^\S+$/).required().messages({
        "string.empty": 'Trường support không được để trống',
        "any.required": 'Trường support là bắt buộc',
    }),
});

export default contactSchema