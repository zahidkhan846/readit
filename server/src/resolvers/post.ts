import { Request, Response } from "express";
import Post from "../entities/Post";
import Sub from "../entities/Sub";

export const createPost = async (req: Request, res: Response) => {
  const { title, body, subName } = req.body;

  const user = res.locals.user;

  if (title.trim() === "")
    return res.status(400).json({ title: "Title must not be empty." });

  try {
    const subDoc = await Sub.findOneOrFail({ name: subName });

    const newPost = new Post({ title, body, sub: subDoc, user });

    await newPost.save();

    return res.json(newPost);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: "Something went wrong!" });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({
      order: { createdAt: "DESC" },
      relations: ["comments", "sub", "votes"],
    });

    if (res.locals.user) {
      posts.forEach((p) => p.setUserVote(res.locals.user));
    }

    if (!posts) {
      throw new Error("Posts not found!");
    }

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: error.message });
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  const { identifier, slug } = req.params;
  try {
    const post = await Post.findOne(
      { identifier, slug },
      { relations: ["sub", "comments"] }
    );
    if (!post) {
      throw new Error("Post not found!");
    }

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: error.message });
  }
};
