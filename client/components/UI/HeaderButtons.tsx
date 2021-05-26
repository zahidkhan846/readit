import Link from "next/link";
import React, { FC } from "react";

interface HeaderButtonType {
  user?: boolean;
}

const HeaderButtons: FC<HeaderButtonType> = ({ user }) => {
  return (
    <nav className="flex justify-center gap-4 item-center">
      <Link href="/auth/login">
        <a className="px-8 py-1 text-sm font-bold text-blue-500 bg-white border border-blue-500 rounded-full hover:bg-blue-100">
          Log In
        </a>
      </Link>
      <Link href="/auth/register">
        <a className="px-8 py-1 text-sm font-bold text-white bg-blue-500 border border-blue-500 rounded-full hover:bg-blue-400">
          Sign Up
        </a>
      </Link>
      <Link href="/">
        <a className="px-6 py-1 bg-white border rounded hover:border-gray-300 hover:bg-gray-200">
          <i
            className={`fa fa-user ${user ? "text-black" : "text-gray-300"}`}
            aria-hidden="true"
          ></i>
        </a>
      </Link>
    </nav>
  );
};

export default HeaderButtons;
