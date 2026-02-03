import { RequestListener } from "node:http";
import { FoodModel } from "../../database/schema/food.schema.js";
import { RequestHandler } from "express";

export const createFood: RequestHandler = async (req, res) => {
  const body = req.body;
  const food = await FoodModel.create({
    name: body.name,
    price: body.price,
    image: body.image,
    ingredients: body.ingredients,
    categoryId: body.categoryId,
  });
  res.status(201).json(food);
};
