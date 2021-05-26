import React, { Fragment } from "react";
import Header from "../UI/Header";
import { useRouter } from "next/router";

function Layout(props) {
  const { pathname } = useRouter();

  const authRoutes = ["/auth/login", "/auth/register"];

  const authRoute = authRoutes.includes(pathname);

  return (
    <Fragment>
      {!authRoute && <Header />}
      <main className="container py-4 mt-12">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
