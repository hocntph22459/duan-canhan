import express from "express";
import { checkPermission } from "../middlewares/CheckPermission";
import { CreateProduct, SearchProductByName, GetallProduct, RemoveProduct, UpdateProduct, getOneProduct, FilterProductByPrice, FilterProductByCategory, FilterProductBySalePrice } from "../controllers/product";
const RouterProduct = express.Router();

RouterProduct.get("/search", SearchProductByName);
RouterProduct.get("/filter/price", FilterProductByPrice);
RouterProduct.get("/filter", FilterProductByCategory);
RouterProduct.get("/sale", FilterProductBySalePrice);
RouterProduct.get("/", GetallProduct);
RouterProduct.get("/:id", getOneProduct);
RouterProduct.post("/", CreateProduct);
RouterProduct.put("/:id", UpdateProduct);
RouterProduct.delete("/:id", RemoveProduct);
 
export default RouterProduct;