import { Router } from "express";
import { checkAuthStatus } from "../middleware/auth";
import { createSub } from "../resolvers/sub";

const router = Router();

router.post("/create-sub", checkAuthStatus, createSub);

export default router;
