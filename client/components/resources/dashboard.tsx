import React from "react";
import Featured from "./featured";
import Home from "./home";

function Dashboard(props) {
  return (
    <div>
      <Featured />
      <Home posts={props.posts} />
    </div>
  );
}

export default Dashboard;
