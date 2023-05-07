import Post from "../models/post";
import Category from "../models/category";
import postSchema from "../validates/post";

// export const getAll = async (req, res) => {
//     const { _sort = "createAt", _order = "asc", _limit = 10, _page = 1 } = req.query;
//     const options = {
//         page: _page,
//         limit: _limit,
//         sort: {
//             [_sort]: _order === "desc" ? -1 : 1,
//         },
//     };
//     try {
//         const posts = await Post.paginate({}, options);
//         if (posts.length === 0) {
//             return res.json({
//                 message: "Không có bài viết nào",
//             });
//         }
//         return res.json(posts);
//     } catch (error) {
//         return res.status(400).json({
//             message: error,
//         });
//     }
// };

export const getAllPost = async (req, res) => {
    try {
        const post = await Post.find()
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
    try {
        const post = await Post.findById(req.params.id).populate("CategoryId","posts").populate("Comments")
        if (!post) {
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
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(400).json({
                message: "Cập nhật bài viết không thành công",
            });
        }
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