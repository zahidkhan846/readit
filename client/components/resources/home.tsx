import React, { FC, useEffect, useState } from "react";
import { axiosConnect } from "../../config/axios";
import { Post } from "../../utils/typeDefs";
import PostItem from "./post";

const Home: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axiosConnect.get("/post/get-posts");

      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="flex gap-4 mt-4 place-items-center">
      <div className="flex-1">
        {posts.map((post) => (
          <PostItem key={post.identifier} post={post} />
        ))}
      </div>
      <div className="w-72"></div>
    </div>
  );
};

export default Home;
