import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
const RouterCategory = express.Router();

RouterCategory.get("/", getAll);
RouterCategory.get("/:id", get);
RouterCategory.post("/", create);
RouterCategory.patch("/:id", update);
RouterCategory.delete("/:id", remove);

export default RouterCategory;