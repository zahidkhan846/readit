import { Expose } from "class-transformer";
import {
  AfterLoad,
  BeforeInsert,
  Column,
  Entity as TypeOrmEntity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { generateId } from "../../utils/id";
import { generateSlug } from "../../utils/slug";
import Comment from "./Comment";

import Entity from "./Entity";
import Sub from "./Sub";
import User from "./User";

@TypeOrmEntity("posts")
export default class Post extends Entity {
  constructor(post: Partial<Post>) {
    super();
    Object.assign(this, post);
  }

  @Column()
  @Index()
  identifier: string;

  @Column()
  title: string;

  @Column()
  @Index()
  slug: string;

  @Column({ type: "text", nullable: true })
  body: string;

  @Column()
  subName: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Column()
  username: string;

  @Expose() get url(): string {
    return `/r/${this.subName}/${this.identifier}/${this.slug}`;
  }

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @ManyToOne(() => Sub, (sub) => sub.posts)
  @JoinColumn({ name: "subName", referencedColumnName: "name" })
  sub: Sub;

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = generateId(7);
    this.slug = generateSlug(this.title, "_");
  }
  // protected url: string;
  // @AfterLoad()
  // createFields() {
  //   this.url = `/r/${this.subName}/${this.identifier}/${this.slug}`;
  // }
}
