import { NextFunction, Request, Response, Router } from "express";
export const PingController: Router = Router();

export const ping = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.status(200).send({ data: "Pong! (" + process.env.DB_NAME + ")" });
  } catch (e) {
    next(e);
  }
};
