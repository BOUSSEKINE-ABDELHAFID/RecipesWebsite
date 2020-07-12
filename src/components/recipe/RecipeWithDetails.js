import React, { Component } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";
class RecipeWithDetails extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="RecipeDetails">
        <img src={this.props.location.state.image} alt="" />
        <div>
          <h1>{this.props.location.state.name}</h1>
          <ul>
            {this.props.location.state.ingre.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
        <Link to="/recipes" className="linkExplore">
          Explore others
        </Link>
      </div>
    );
  }
}

export default RecipeWithDetails;
