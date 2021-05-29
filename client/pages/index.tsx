import Head from "next/head";
import React, { Fragment } from "react";
import Dashboard from "../components/resources/dashboard";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <Dashboard />
    </Fragment>
  );
}

export default HomePage;
