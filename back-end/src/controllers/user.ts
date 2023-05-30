import User from "../models/user"
export const getAllUser = async (req, res) => {
    try {
        const post = await User.find()
        if (post.length === 0) {
            return res.status(400).json({
                message: "Không có người dùng nào",
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

export const getOneUser = async function (req, res) {
    try {
        const post = await User.findById(req.params.id)
        if (!post) {
            return res.status(400).json({
                message: "Không tìm thấy người dùng",
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

export const updateUser = async function (req, res) {
    try {
        const post = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(400).json({
                message: "Cập nhật người dùng không thành công",
            });
        }
        return res.status(200).json({
            message: "Cập nhật người dùng thành công",
            data: post,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const removeUser = async function (req, res) {
    try {
        const post = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Xóa người dùng thành công",
            post,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};