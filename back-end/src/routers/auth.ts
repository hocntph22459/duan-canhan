import express from "express";
import { Signin, Signup } from "../controllers/auth";

const routerAuth = express.Router();

routerAuth.post("/signup", Signup);
routerAuth.post("/signin", Signin);
export default routerAuth;