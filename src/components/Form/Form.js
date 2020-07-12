import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form className="signForm">
      <input type="text" placeholder="Entrer votre nom :" />
      <input type="email" placeholder="Entrer votre email :" />
      <button type="submit">
        <span className="spn">Submit</span>
      </button>
    </form>
  );
};

export default Form;
