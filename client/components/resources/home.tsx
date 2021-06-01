import React, { FC } from "react";
import useSWR from "swr";
import { Sub } from "../../utils/typeDefs";

import PostItem from "./post";
import TrandingSub from "./trandingSub";

const Home: FC = () => {
  const { data: posts, error } = useSWR("/post/get-posts");
  const { data: subs, error: subError } = useSWR("/misc/latest-subs");

  if (!posts || !subs) {
    return (
      <p className="flex items-center justify-center h-full text-3xl font-bold text-gray-500">
        Loading...
      </p>
    );
  }

  if (error || subError) {
    console.log(error, subError);
  }

  return (
    <div className="container flex gap-4 mt-4">
      <div className="flex-1">
        {posts.map((post) => (
          <PostItem key={post.identifier} post={post} />
        ))}
      </div>
      <div
        className="overflow-hidden bg-white rounded w-72"
        style={{ maxHeight: "400px" }}
      >
        <div className="flex items-end w-full h-20 bg-blue-900">
          <h1 className="p-2 font-bold text-white">
            Today's top growing communities
          </h1>
        </div>
        <div className="w-72">
          {subs?.map((sub: Sub, index) => (
            <TrandingSub sub={sub} index={index} key={index} />
          ))}
          <div className="w-full px-4 mt-4">
            <button className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
