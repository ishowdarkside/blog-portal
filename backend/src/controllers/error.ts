import { ErrorRequestHandler } from "express";
import { Error } from "mongoose";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === "dev") {
    return res.json({
      status: "fail",
      err,
      message: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "production") {
    if (err.name === "ValidationError") {
      const errMsg = Object.values(err.errors)
        .map((e: any) => e.message)
        .at(0);

      return res.status(400).json({
        status: "fail",
        message: errMsg,
      });
    }
    if (err.isOperational) {
      return res.status(err.statusCode || 400).json({
        status: "fail",
        message: err.message,
      });
    } else
      res.status(500).json({
        status: "error",
        message: "Something went really wrong",
      });
  }
};
