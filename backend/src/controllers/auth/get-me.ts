import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";
import jwt from "jsonwebtoken";

type JwtPayload = { _id: string; role: string };
export const getMe: RequestHandler = async (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const token = authorization.split(" ")[1] as string;

  try {
    const { user } = jwt.verify(token, "Secret") as {
      user: JwtPayload;
    };
    const userData = await UserModel.findById({
      _id: user._id,
    });
    res.status(200).json({ user: userData });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
