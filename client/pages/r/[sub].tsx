import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import useSWR from "swr";
import PostItem from "../../components/resources/post";

function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  const { data: sub, error } = useSWR(subName ? "/sub/" + subName : null);

  if (!sub) {
    return (
      <p className="flex items-center justify-center h-screen text-3xl font-bold text-green-500">
        Loading...
      </p>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <Fragment>
      <Head>
        <title>{sub.title}</title>
      </Head>
      <div className="mt-12">
        <header className="w-full h-40 bg-blue-800">
          {sub.imageUrl && (
            <img
              className="object-cover w-full h-full"
              src={sub.imageUrl}
              alt={sub.title}
            />
          )}
        </header>
        <div className="container">
          <div className="flex gap-4 pt-4">
            <div className="flex-1">
              {sub.posts.map((post) => (
                <PostItem key={post.identifier} post={post} />
              ))}
            </div>
            <div className="w-72"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sub;
