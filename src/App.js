import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/nabBar/NavBar";
import { Link } from "react-router-dom";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="Header">
          <NavBar />
        </section>

        <section className="find">
          <h1>Find The Recipes You Search</h1>
        </section>
        <section className="lastProducts">
          <div className="lastProduct">
            <h1>Find the latest recipes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, nostrum iste itaque, deleniti nemo commodi totam libero
              eligendi temporibus vel sint pariatur quod. Necessitatibus,
              nesciunt! Error unde laboriosam eligendi veniam voluptate, quas
              inventore, tenetur ea aperiam, voluptatibus harum doloribus optio.
            </p>
          </div>
          <div className="lastProductImg"></div>
        </section>
        <section className="fold"></section>

        <section className="explore">
          <h1>So What Are You Waiting ?</h1>
          <Link to="recipes" className="exploreLink">
            Explore
          </Link>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
