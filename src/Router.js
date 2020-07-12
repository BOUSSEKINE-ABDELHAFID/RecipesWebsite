import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import Recipes from "./Recipes";
import SignUp from "./SignUp";
import RecipeWithDetails from "./components/recipe/RecipeWithDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/sign up" component={SignUp} />
        <Route path="/recipe/:name" component={RecipeWithDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
