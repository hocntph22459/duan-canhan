import mongoose from "mongoose";
import moment from 'moment-timezone';

moment.tz.setDefault('Asia/Ho_Chi_Minh');
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
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }
    ],
    CategoryId: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        }
    ]
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.createdAt = moment(ret.createdAt).format('DD/MM/YYYY HH:mm:ss');
            ret.updatedAt = moment(ret.updatedAt).format('DD/MM/YYYY HH:mm:ss');
            delete ret.id;
        },
    },
})

export default mongoose.model("Post", PostModel)