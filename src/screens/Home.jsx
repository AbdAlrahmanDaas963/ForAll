import React from "react";
import About from "../components/about/About";
import OurPro from "../components/our-providers/OurPro";
import Services from "../components/services-section/Services";

function Home() {
  return (
    <div className="home">
      <About />
      <Services />
      <OurPro />
    </div>
  );
}

export default Home;
