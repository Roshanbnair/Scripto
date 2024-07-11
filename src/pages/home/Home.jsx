import React from "react";
import Banner from "../../components/banner/Banner";
import Navigate from "../../components/navigate/Navigate";
import AboutUs from "../../components/aboutus/AboutUs";
import Service from "../../components/services/Service";
import Team from "../../components/team/Team";
import Test from "../../components/testimonials/Test";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Banner />
      <Navigate/>
      <AboutUs id="aboutUs"/>
      <Service/>
      <Team/>
      <Test/>
      <Contact/>
    </div>
  );
};

export default Home;
