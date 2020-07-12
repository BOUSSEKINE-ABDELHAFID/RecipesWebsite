import React, { Component } from "react";
import "./NavBar.css";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const s = window.scrollY;

      if (s > 0) {
        this.setState({
          scrolled: true,
        });
      } else {
        this.setState({
          scrolled: false,
        });
      }
    });
  }

  componentWillUnmount() {
    return null;
  }

  render() {
    return (
      <nav className={this.state.scrolled ? "navBar2" : "navBar"}>
        <div className="navDrawerBtn">
          <Drawer className="navDrawer" />
        </div>
        <div className="logo">recipe.com</div>
        <div className="navSpace" />
        <div className="navElements">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                className="link"
                activeStyle={{ textDecoration: "underline" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="link"
                activeStyle={{ textDecoration: "underline" }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className="link"
                activeStyle={{ textDecoration: "underline" }}
              >
                Recipes
              </NavLink>
            </li>
            <li className={this.state.scrolled ? "sign2" : "sign"}>
              <NavLink
                to="/sign up"
                className={this.state.scrolled ? "signLink" : "link"}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
