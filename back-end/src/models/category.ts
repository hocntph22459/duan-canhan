import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 3,
    },
    posts: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Post",
        },
    ],
}, { timestamps: true, versionKey: false })

export default mongoose.model("Category", CategoryModel)