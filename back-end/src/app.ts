import express from "express";
import Connectdb from "./connect/config";
import Router from "./routers";
import cors from "cors"
// config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//router
app.use("/api", Router);

// connect to db
Connectdb()

export const viteNodeApp = app;
