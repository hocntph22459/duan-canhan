import mongoose from "mongoose";

const CommentModel = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    UserId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    PostId: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
}, { timestamps: true, versionKey: false })

export default mongoose.model("Comment", CommentModel)