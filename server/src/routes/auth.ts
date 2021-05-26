import { Router } from "express";
import { checkAuthStatus } from "../middleware/auth";
import { getCurrentUser, login, logout, register } from "../resolvers/auth";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", checkAuthStatus, getCurrentUser);
router.get("/logout", checkAuthStatus, logout);

export default router;
