import React from "react";
import ShowMore from "./ShowMore.jsx";

const Home = () => (
  <div>
    <h1>Welcome Home!</h1>
    <ShowMore limit={5}></ShowMore>
  </div>
);

export default Home;
