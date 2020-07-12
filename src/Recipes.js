import React, { useEffect, useState } from "react";
import RecipeList from "./components/recipe/RecipeList";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavBar from "./components/nabBar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

const Recipes = () => {
  const App_Id = "22fa9e8d";
  const App_key = "54ea846a34b1f42bc4017f3824cf5524";
  const [recipes, setRecipes] = useState([]);
  const [food, setFood] = useState("");
  const [val, setVal] = useState("");
  const [load, setLoad] = useState(false);
  const getRecipes = async () => {
    setLoad(false);
    const response = await fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${App_Id}&app_key=${App_key}&from=0&to=30&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setLoad(true);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [food]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFood(val);
  };

  const changeValue = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="Recipies">
      <section>
        <NavBar />
      </section>
      <form onSubmit={submitHandler} className="RecipiesSearchForm">
        <input
          type="text"
          value={val}
          onChange={changeValue}
          className="RecipeSearchInput"
        />
        <button type="submit" className={val === "" ? "btn" : "btn2"}>
          Search
        </button>
      </form>

      {load ? (
        <RecipeList recipes={recipes} />
      ) : (
        <div className="CircularLoad">
          <CircularProgress />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Recipes;
