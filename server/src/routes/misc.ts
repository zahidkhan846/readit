import { Router } from "express";
import { checkAuthStatus } from "../middleware/auth";
import { createVote } from "../resolvers/misc";

const router = Router();

router.post("/create-vote", checkAuthStatus, createVote);

export default router;
