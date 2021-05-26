import { Request, Response } from "express";
import Comment from "../entities/Comment";
import Post from "../entities/Post";

export const postComment = async (req: Request, res: Response) => {
  const { body } = req.body;
  const { identifier, slug } = req.params;

  try {
    const post = await Post.findOneOrFail({ identifier, slug });

    const newComent = await new Comment({ body, user: res.locals.user, post });

    await newComent.save();

    return res.json(newComent);
  } catch (error) {
    return res.status(404).json({ error: "Post not found" });
  }
};
