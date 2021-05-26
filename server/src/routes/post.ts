import { Router } from "express";
import { checkAuthStatus } from "../middleware/auth";
import { postComment } from "../resolvers/comment";
import { createPost, getAllPosts, getSinglePost } from "../resolvers/post";

const router = Router();

router.post("/create-post", checkAuthStatus, createPost);

router.get("/get-posts", getAllPosts);

router.get("/get-post/:identifier/:slug", getSinglePost);

router.post(
  "/get-post/:identifier/:slug/post-comment",
  checkAuthStatus,
  postComment
);

export default router;
