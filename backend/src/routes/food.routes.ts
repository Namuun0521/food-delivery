import { Router } from "express";
import { createFood } from "../controllers/food/create-food.js";
import { getFoods } from "../controllers/food/get-food.js";
import { getFoodsByCategory } from "../controllers/food/get-foods-by-category.js";
import { updateFood } from "../controllers/food/update-foods.js";
import { deleteFood } from "../controllers/food/delete-food.js";

const FoodRouter = Router();
FoodRouter.get("/", getFoods)
  .post("/create", createFood)
  .get("/category/:categoryId", getFoodsByCategory)
  .put("/:id", updateFood)
  .delete("/delete/:id", deleteFood);
export { FoodRouter };
