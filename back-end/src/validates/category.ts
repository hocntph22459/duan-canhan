import joi from "joi";
const categorySchema = joi.object({
    name: joi.string().regex(/^\S+$/).required().messages({
        "string.empty": 'Trường tên không được để trống',
        "any.required": 'Trường tên là bắt buộc',
    }),
});

export default categorySchema