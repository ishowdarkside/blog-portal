import { RequestHandler, Request, Response, NextFunction } from "express";

type asyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export default function catchAsync(fn: asyncFunction) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}
