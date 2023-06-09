import express from "express";
import { checkPermission } from "../middlewares/CheckPermission";
import { createBill, getAllBill, getBillByUser, getOneBill, removeBill, updateBill } from "../controllers/bill";
const RouterBill = express.Router();

RouterBill.get("/", getAllBill);
RouterBill.get("/", getOneBill);
RouterBill.get("/:User_id", getBillByUser);
RouterBill.post("/", createBill);
RouterBill.put("/:id", checkPermission, updateBill);
RouterBill.delete("/:id", checkPermission, removeBill);

export default RouterBill; 