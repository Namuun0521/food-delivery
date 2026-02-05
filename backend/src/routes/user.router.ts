import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { updateAddress } from "../controllers/user/update-address.js";

export const UserRouter = Router();

UserRouter.put("/address", authMiddleware, updateAddress);
