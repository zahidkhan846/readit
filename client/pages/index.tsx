import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import Dashboard from "../components/resources/dashboard";
import { axiosConnect } from "../config/axios";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <Dashboard posts={props.posts} />
    </Fragment>
  );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let data;
  try {
    const res = await axiosConnect.get("/post/get-posts");

    if (res.status === 200) {
      data = res.data;
    }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      posts: data,
    },
  };
};
