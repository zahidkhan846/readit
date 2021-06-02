import { Request, Response } from "express";
import Comment from "../entities/Comment";
import Post from "../entities/Post";
import User from "../entities/User";

export const getUserCreatedData = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const user = await User.findOneOrFail({
      where: { username },
      select: ["username", "createdAt"],
    });

    const posts = await Post.find({
      where: { user },
      relations: ["comments", "votes", "sub"],
    });

    const comments = await Comment.find({
      where: { user },
      relations: ["post"],
    });

    if (res.locals.user) {
      posts.forEach((post) => post.setUserVote(res.locals.user));
      comments.forEach((post) => post.setUserVote(res.locals.user));
    }

    let submissitions: any[] = [];

    posts.forEach((post) =>
      submissitions.push({ type: "Post", ...post.toJSON() })
    );
    comments.forEach((comment) =>
      submissitions.push({ type: "Comment", ...comment.toJSON() })
    );

    submissitions.sort((a, b) => {
      if (b.createdAt > a.createdAt) {
        return 1;
      }
      if (b.createdAt < a.createdAt) {
        return -1;
      }
      return 0;
    });
    return res.json({ user, submissitions });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
