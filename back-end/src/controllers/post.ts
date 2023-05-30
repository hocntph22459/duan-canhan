import Post from "../models/post";
import Category from "../models/category";
import postSchema from "../validates/post";
import HashTag from "../models/hashtag";

export const getAllPost = async (req, res) => {
    try {
        const post = await Post.find().populate("tags").populate("Comments").populate("CategoryId")
        if (post.length === 0) {
            return res.status(400).json({
                message: "Không có bài viết nào",
            });
        }
        return res.status(200).json({ 
            message: "thành công",
            data: post
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};

export const getOnePost = async function (req, res) {
    const PostId = req.params.PostId; // Lấy id của bài đăng
    try {
        const post:any = await Post.findById(req.params.id).populate("tags").populate("CategoryId").populate("Comments")
        if (!post) {
            return res.status(400).json({
                message: "Không tìm thấy bài viết",
            });
        }
        // Tìm các bài đăng liên quan
        const relatedPosts = await Post.find({
            $and: [
                { _id: { $ne: PostId } },
                { $or: [{ tags: { $in: post.tags } }, { CategoryId: post.CategoryId }] }],
        }).limit(3).populate("tags");


        // Tăng số lượt xem lên một đơn vị
        post.views++;
        await post.save();

        return res.status(200).json({
            message: "thành công",
            data: post, relatedPosts
        });

    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const createPost = async function (req, res) {
    try {
        const { error } = postSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const post = await Post.create(req.body);
        if (!post) {
            return res.status(400).json({
                message: "Không thể thêm bài viết",
            });
        }
        await HashTag.findByIdAndUpdate(post.tags, {
            $addToSet: {
                posts: post._id,
            },
        });
        await Category.findByIdAndUpdate(post.CategoryId, {
            $addToSet: {
                posts: post._id,
            },
        });
        return res.status(200).json({
            message: "Thêm bài viết thành công",
            data: post,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const updatePost = async function (req, res) {
    try {
        const { error } = postSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(400).json({
                message: "Cập nhật bài viết không thành công",
            });
        }
        await HashTag.findByIdAndUpdate(post.tags, {
            $addToSet: {
                posts: post._id,
            },
        });
        await Category.findByIdAndUpdate(post.CategoryId, {
            $addToSet: {
                posts: post._id,
            },
        });
        return res.status(200).json({
            message: "Cập nhật bài viết thành công",
            data: post,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const removePost = async function (req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Xóa bài viết thành công",
            post,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};