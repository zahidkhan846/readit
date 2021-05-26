import { isEmpty } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Sub from "../entities/Sub";
import User from "../entities/User";

export const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;

  const user: User = res.locals.user;

  try {
    let errors: any = {};
    if (isEmpty(name)) errors.name = "Name must not be empty.";
    if (isEmpty(title)) errors.title = "Title must not be empty.";

    const sub = await getRepository(Sub)
      .createQueryBuilder("sub")
      .where("lower(sub.name) = :name", { name: name.toLowerCase() })
      .getOne();

    if (sub) errors.name = "Sub already exists";

    if (Object.keys(errors).length > 0) {
      throw errors;
    }

    try {
      const newSub = await new Sub({ name, title, description, user });

      await newSub.save();

      return res.json(newSub);
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
