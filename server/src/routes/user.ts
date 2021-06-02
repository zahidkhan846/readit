import { Router } from "express";
import { checkUserStatus } from "../middleware/user";
import { getUserCreatedData } from "../resolvers/user";

const router = Router();

router.get("/:username", checkUserStatus, getUserCreatedData);

export default router;
