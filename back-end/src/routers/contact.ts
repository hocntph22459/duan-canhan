import express from "express";
import { create, get, getAll, remove, update } from "../controllers/contact";
const RouterContact = express.Router();

RouterContact.get("/", getAll);
RouterContact.get("/:id", get);
RouterContact.post("/", create);
RouterContact.patch("/:id", update);
RouterContact.delete("/:id", remove);

export default RouterContact;