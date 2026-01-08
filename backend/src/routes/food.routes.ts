import { Router } from "express";
import { createFood } from "../controllers/food/create-food.js";
import { getFoods } from "../controllers/food/get-food.js";

const FoodRouter = Router();
FoodRouter.get("/", getFoods).post("/create", createFood);
export {FoodRouter}