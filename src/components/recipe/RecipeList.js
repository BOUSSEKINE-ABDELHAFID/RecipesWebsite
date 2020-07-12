import React from "react";
import Recipe from "./Recipe";
import "./Recipe.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="RecipesList">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.image}
          name={recipe.recipe.label}
          img={recipe.recipe.image}
          ingre={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default RecipeList;
