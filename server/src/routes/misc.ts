import { Router } from "express";
import { checkAuthStatus } from "../middleware/auth";
import { checkUserStatus } from "../middleware/user";
import { createVote } from "../resolvers/misc";

const router = Router();

router.post("/create-vote", checkUserStatus, checkAuthStatus, createVote);

export default router;
