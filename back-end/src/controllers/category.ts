import dotenv from "dotenv";
import Category from "../models/category";
import Post from "../models/post";
import categorySchema from "../validates/category";
dotenv.config();

export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find().populate("posts");
        if (categories.length === 0) {
            return res.json({
                message: "Không có danh mục nào",
            });
        }
        return res.json(categories);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const getOneCategory = async function (req, res) {
    try {
        const category = await Category.findById(req.params.id).populate("posts");
        if (!category) {
            return res.json({
                message: "Không có danh mục nào",
            });
        }
        return res.json(category);
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const createCategory = async function (req, res) {
    try {
        const { error } = categorySchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const category = await Category.create(req.body);
        if (!category) {
            return res.json({
                message: "Không thêm được danh mục",
            });
        }
        return res.json({
            message: "Thêm danh mục thành công",
            category,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const updateCategory = async function (req, res) {
    try {
        const { error } = categorySchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.json({
                message: "Cập nhật danh mục không thành công",
            });
        }
        return res.json({
            message: "Cập nhật danh mục thành công",
            category,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const removeCategory = async function (req, res) {
    try {
        // Xoá danh mục và sản phẩm liên quan
        const categories = await Category.findByIdAndDelete(req.params.id)
        if (!categories) {
            return res.status(404).json({
                message: "Xóa danh mục thất bại",
            });
        } else {
           const post = await Post.deleteMany({ CategoryId: req.params.id })
                if (!post) {
                    return res.status(404).json({
                        message: "Xóa sản phẩm liên quan thất bại",
                    });
                } else {
                    return res.status(200).json({
                        message: "Đã xoá danh mục và sản phẩm liên quan thành công!",
                    });
                }
        }

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};