import { RequestListener } from "node:http";
import { FoodModel } from "../../database/schema/food.schema.js";
import { RequestHandler } from "express";
import { CategoryModel } from "../../database/schema/category.schema.js";

export const createCategory: RequestHandler = async (req,res) => {
    const body = req.body;
    const category = await CategoryModel.create({
        name:body.name,
       
    });
    res.status(201).json(category);
}