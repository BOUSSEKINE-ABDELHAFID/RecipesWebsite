import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { MdMenu } from "react-icons/md";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <MdMenu className="menuButton" onClick={toggleDrawer("left", true)} />

        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          <div className="drawer">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="link">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/sign up" className="link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
