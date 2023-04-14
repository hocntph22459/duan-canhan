import mongoose from "mongoose";

const PostModel = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    images: [
        {
            type: String,
        },
    ],
    author: {
        type: String,
        require: true
    },
    tags: {
        type: String,
        require: true
    },
    views: {
        type: Number,
        require: true
    },
    likes: {
        type: Number,
        require: true
    },
    Comments: [
        {
            type:mongoose.Types.ObjectId,
            ref:"Comment"
        }
    ],
    CategoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
}, { timestamps: true, versionKey: false })

export default mongoose.model("Post", PostModel)