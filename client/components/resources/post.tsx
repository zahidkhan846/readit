import moment from "moment";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const PostItem = ({ post }) => {
  const { username, body, createdAt, identifier, subName, url, title } = post;

  const iconLink =
    "px-4 py-1 text-xs text-gray-500 hover:bg-gray-100 font-bold";

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex mb-4 bg-white rounded">
      <div className="flex flex-col w-10 pt-4 text-center bg-gray-100 rounded-l place-items-center">
        <button
          className="text-sm font-bold text-gray-500 focus:outline-none"
          onClick={handleInc}
        >
          <i className="font-extrabold fas fa-arrow-up hover:text-black"></i>
        </button>
        <span className="text-xs font-bold">{count ? count : "Vote"}</span>
        <button
          className="text-sm font-bold text-gray-500 focus:outline-none hover:text-black"
          onClick={handleDec}
        >
          <i className="font-extrabold fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="w-full pt-2 pl-2 pr-2">
        <div className="flex items-center">
          <Fragment>
            <Link href={`/r/${subName}`}>
              <img
                className="w-6 h-6 mr-1 rounded-full"
                src="https://picsum.photos/50"
              />
            </Link>
            <Link href={`/r/${subName}`}>
              <a className="text-xs font-bold hover:underline">{`/r/${subName}`}</a>
            </Link>
          </Fragment>
          <p className="ml-1 text-xs text-gray-500">
            . Posted by{" "}
            <Link href={`/u/${username}`}>
              <a className="hover:underline">{`/u/${username}`}</a>
            </Link>
          </p>
          <Link href={url}>
            <a className="ml-1 text-xs text-gray-500">
              <span className="cursor-default">Posted on</span>{" "}
              <span className="hover:underline">
                {moment(createdAt).startOf("hour").fromNow()}
              </span>
            </a>
          </Link>
        </div>
        <Link href={url}>
          <a className="my-1 font-medium tex-lg">{title} </a>
        </Link>
        {body && <p className="text-sm cursor-pointer">{body}</p>}
        <div className="flex items-center justify-start gap-1 mt-4">
          <Link href="/">
            <a className={iconLink}>
              <i className="fas fa-comment-alt"></i> Comments
            </a>
          </Link>

          <Link href="/">
            <a className={iconLink}>
              <i className="fas fa-share"></i> Share
            </a>
          </Link>
          <Link href="/">
            <a className={iconLink}>
              <i className="fas fa-plus-square"></i> Save
            </a>
          </Link>
          <Link href="/">
            <a className={iconLink}>
              <i className="fas fa-ellipsis-h"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
