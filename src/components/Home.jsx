import React from "react";
import manProductsBanner from "./images/manProductsBanner.jpg";
import Layout from "./reusable/Layout";
const Home = () => {
  return (
    <Layout>
      <img src={manProductsBanner} className="w-100" alt="manProductBannner" />
    </Layout>
  );
};

export default Home;
