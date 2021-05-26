import { IsEmail, Length } from "class-validator";
import {
  Entity as TypeOrmEntity,
  Column,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import bcrypt from "bcrypt";
import { Exclude } from "class-transformer";

import Entity from "./Entity";
import Post from "./Post";

@TypeOrmEntity("users")
export default class User extends Entity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @Column({ unique: true })
  @Length(3, 255, {
    message: "Username must be longer than or equal to 3 characters",
  })
  username: string;

  @Column({ unique: true })
  @IsEmail(undefined, { message: "Email must be a valid email address" })
  @Length(1, 255, { message: "Email is Empty" })
  email: string;

  @Exclude()
  @Column()
  @Length(3, 255, {
    message: "Password must be longer than or equal to 3 characters",
  })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @BeforeInsert()
  async hashPasword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
