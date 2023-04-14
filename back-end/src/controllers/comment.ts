import Category from "../models/category";
import Comment from "../models/comment";
import Post from "../models/post";

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
//         const comments = await comment.paginate({}, options);
//         if (comments.length === 0) {
//             return res.json({
//                 message: "Không có bình luận nào",
//             });
//         }
//         return res.json(comments);
//     } catch (error) {
//         return res.status(400).json({
//             message: error,
//         });
//     }
// };

export const getAll = async (req, res) => {
    try {
        const comment = await Comment.find()
        if (comment.length === 0) {
            return res.status(400).json({
                message: "Không có bình luận nào",
            });
        }
        return res.status(200).json({
            message: "thành công",
            data: comment
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};

export const get = async function (req, res) {
    try {
        const comment = await Comment.findById(req.params.id).populate("PostId").populate("UserId")
        if (!comment) {
            return res.status(400).json({
                message: "Không có bình luận nào",
            });
        }
        return res.status(200).json({
            message: "thành công",
            data: comment
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const create = async function (req, res) {
    try {
        const comment = await Comment.create(req.body);
        if (!comment) {
            return res.status(400).json({
                message: "Không thể thêm bình luận",
            });
        }
        await Post.findByIdAndUpdate(comment.PostId, {
            $addToSet: {
                Comments: comment._id,
            },
        });
        await Post.findByIdAndUpdate(comment.UserId, {
            $addToSet: {
                Comments: comment._id,
            },
        });
        return res.status(200).json({
            message: "Thêm bình luận thành công",
            data: comment,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const update = async function (req, res) {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) {
            return res.status(400).json({
                message: "Cập nhật bình luận không thành công",
            });
        }
        return res.status(200).json({
            message: "Cập nhật bình luận thành công",
            data: comment,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const remove = async function (req, res) {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Xóa bình luận thành công",
            comment,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};