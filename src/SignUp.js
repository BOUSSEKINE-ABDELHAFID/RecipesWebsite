import React from "react";
import Form from "./components/Form/Form";
import NavBar from "./components/nabBar/NavBar";
import Footer from "./components/footer/Footer";

const SignUp = () => {
  return (
    <div className="SignUp">
      <section className="SignUpHeader">
        <NavBar />
      </section>
      <section className="SignUpMethods">
        <div className="SocialMediaSignUp">
          <h1>Or</h1>
          <div className="SignWith">Sign Up With Googe</div>
          <div className="SignWith">Sign Up With FaceBook</div>
        </div>
        <div className="FormSection">
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
