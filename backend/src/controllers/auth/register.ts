import { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;
  const isUsernameExist = await UserModel.findOne({ username });
  if (isUsernameExist)
    return res.status(400).json({ message: "Username is already existed" });
  const isEmailExist = await UserModel.findOne({ email });
  if (isEmailExist)
    return res.status(400).json({ message: "Email is already existed" });
  const user = await UserModel.create({
    username,
    password,
    email,
  });

  res.status(200).json({ user });
};
