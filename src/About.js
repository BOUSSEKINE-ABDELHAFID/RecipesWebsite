import React from "react";
import NavBar from "./components/nabBar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

const About = () => {
  return (
    <div className="About">
      <section className="AboutHeader">
        <NavBar />
      </section>
      <section className="AboutSection">
        <div className="AboutSectionText">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            est, architecto illum inventore exercitationem ea quasi provident
            libero rerum praesentium voluptatem consectetur sit natus et maxime,
            reiciendis quos numquam explicabo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repudiandae est, architecto illum
            inventore exercitationem ea quasi provident libero rerum praesentium
            voluptatem consectetur sit natus et maxime, reiciendis quos numquam
            explicabo.
          </p>
        </div>
        <div className="AboutSectionImg"></div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
