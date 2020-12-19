import { Router } from "express";
import * as PingController from "../controllers/PingController";

const router = Router();
router.get("/", PingController.ping);

export default router;
