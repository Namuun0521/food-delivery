import { RequestListener } from "node:http";
import { FoodModel } from "../../database/schema/food.schema.js";
import { RequestHandler } from "express";
import { CategoryModel } from "../../database/schema/category.schema.js";

export const getCategories: RequestHandler = async (req,res) => {
    const categories = await CategoryModel.find({});
 
    res.status(200).json(categories);
}