import { Router } from "express";
import { checkAuthStatus } from "../middleware/auth";
import { checkUserStatus } from "../middleware/user";
import { postComment } from "../resolvers/comment";
import { createPost, getAllPosts, getSinglePost } from "../resolvers/post";

const router = Router();

router.post("/create-post", checkUserStatus, checkAuthStatus, createPost);

router.get("/get-posts", checkUserStatus, getAllPosts);

router.get("/get-post/:identifier/:slug", getSinglePost);

router.post(
  "/get-post/:identifier/:slug/post-comment",
  checkUserStatus,
  checkAuthStatus,
  postComment
);

export default router;
