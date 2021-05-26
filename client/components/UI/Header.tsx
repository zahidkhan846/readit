import Link from "next/link";
import React from "react";
import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 gap-2 px-5 bg-white">
      <div className="mr-auto">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <Search />
      <div className="ml-auto">
        <HeaderButtons user={false} />
      </div>
    </header>
  );
};

export default Header;
