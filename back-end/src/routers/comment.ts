import express from "express";
import { create, get, getAll, remove, update } from "../controllers/comment";
const RouterComment = express.Router();

RouterComment.get("/", getAll);
RouterComment.get("/:id", get);
RouterComment.post("/", create);
RouterComment.patch("/:id", update);
RouterComment.delete("/:id", remove);

export default RouterComment;