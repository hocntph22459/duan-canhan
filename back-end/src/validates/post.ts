import joi from "joi";
const postSchema = joi.object({
    title: joi.string().required().messages({
        "string.empty": 'Trường tên không được để trống',
        "any.required": 'Trường tên là bắt buộc',
    }),
    content: joi.string().required().messages({
        "string.empty": 'Trường content không được để trống',
        "any.required": 'Trường content là bắt buộc',
    }),
    images: joi.string().required().messages({
        "string.empty": 'Trường images không được để trống',
        "any.required": 'Trường images là bắt buộc',
    }),
    author: joi.string().required().messages({
        "string.empty": 'Trường author không được để trống',
        "any.required": 'Trường author là bắt buộc',
    }),
    tags: joi.string().required().messages({
        "string.empty": 'Trường tags không được để trống',
        "any.required": 'Trường tags là bắt buộc',
    }),
    views: joi.number(),
    likes: joi.number(),
    CategoryId: joi.string().required().messages({
        "string.empty": 'Trường CategoryId không được để trống',
        "any.required": 'Trường CategoryId là bắt buộc',
    })
});

export default postSchema