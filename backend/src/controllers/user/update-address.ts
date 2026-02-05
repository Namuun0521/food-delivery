import { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.js";

export const updateAddress: RequestHandler = async (req: any, res) => {
  const { address } = req.body;
  if (!address || !address.trim()) {
    return res.status(400).json({ message: "Address is required" });
  }
  const updatedUser = await UserModel.findByIdAndUpdate(
    req.userId,
    { address: address.trim() },
    { new: true },
  ).select("-password");
  return res.status(200).json({ user: updatedUser });
};
