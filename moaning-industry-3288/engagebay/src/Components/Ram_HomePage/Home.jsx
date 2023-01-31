import React, { useEffect, useState } from "react";
import Head from "./HeadPart/Head";
import MiddleUper from "./MiddlePart/MiddleUper";
import Carousele from "./MiddlePart/MiddleLower/Carousel";
import MiddleCenter from "./MiddlePart/MiddleCenter";
import Footer from "./Footer/Footer";

const Home = () => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token != undefined) {
      // window.location.href("/");
    }
  }, []);

  return (
    <div>
      <Head />
      <MiddleUper />
      <MiddleCenter />
      <Carousele />
      <Footer />
    </div>
  );
};

export default Home;
