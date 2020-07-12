import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";
const Recipe = (props) => {
  return (
    <div className="Recipe">
      <Link
        to={{
          pathname: `/recipe/${props.name}`,
          state: {
            name: props.name,
            image: props.img,
            ingre: props.ingre,
          },
        }}
        className="RecipeLink"
      >
        <h2>{props.name.substr(0, 15) + "..."}</h2>
        <img src={props.img} alt="recipe" />
      </Link>
    </div>
  );
};

export default Recipe;
