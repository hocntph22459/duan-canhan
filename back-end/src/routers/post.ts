import express from "express";
import { create, get, getAll, remove, update } from "../controllers/post";
const RouterPost = express.Router();

RouterPost.get("/", getAll);
RouterPost.get("/:id", get);
RouterPost.post("/", create);
RouterPost.patch("/:id", update);
RouterPost.delete("/:id", remove);

export default RouterPost;