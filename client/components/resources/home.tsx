import React, { FC } from "react";
import useSWR from "swr";

import PostItem from "./post";

const Home: FC = () => {
  const { data: posts, error } = useSWR("/post/get-posts");

  if (!posts) {
    return (
      <p className="flex items-center justify-center h-full text-3xl font-bold text-gray-500">
        Loading...
      </p>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="container flex gap-4 mt-4 place-items-center">
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
