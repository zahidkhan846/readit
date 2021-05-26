import {
  BeforeInsert,
  Column,
  Entity as TypeOrmEntity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { generateId } from "../../utils/id";

import Entity from "./Entity";
import Post from "./Post";
import User from "./User";

@TypeOrmEntity("comments")
export default class Comment extends Entity {
  constructor(comment: Partial<Comment>) {
    super();
    Object.assign(this, comment);
  }

  @Column({ unique: true })
  identifier: string;

  @Column()
  body: string;

  @Column()
  username: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post;

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = generateId(8);
  }
}
