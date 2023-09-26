import User from "../models/User";
import catchAsync from "../utils/catchAsync";
import { RequestHandler } from "express";
import AppError from "../utils/AppError";

export const signup: RequestHandler = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return next(new AppError(400, "Please provide all required fields!"));

  const user = await User.create({ username, password });
  return res.status(201).json({
    status: "success",
    message: "Account created!",
  });
});
