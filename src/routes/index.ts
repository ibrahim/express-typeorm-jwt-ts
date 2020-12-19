import { Router } from "express";
import auth from "./auth";
import user from "./user";
import ping from "./ping";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/ping", ping);

export default routes;
