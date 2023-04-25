import express from "express";
import { checkPermission } from "../middlewares/CheckPermission";
import { createPost, getAllPost, getOnePost, removePost, updatePost } from "../controllers/post";
const RouterPost = express.Router();

RouterPost.get("/", getAllPost);
RouterPost.get("/:id", getOnePost);
RouterPost.post("/",checkPermission, createPost);
RouterPost.put("/:id",checkPermission, updatePost);
RouterPost.delete("/:id",checkPermission, removePost);

export default RouterPost;