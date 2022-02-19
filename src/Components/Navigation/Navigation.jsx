import * as React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function SimpleBottomNavigation() {
  return (
    <>
      <nav class="nav-bottom nav nav-pills nav-fill">
        <NavLink to="/">
          <a class="nav-item nav-link active" href="#">
            Moveis
          </a>
        </NavLink>
        <NavLink to="/series">
          <a class="nav-item nav-link" href="#">
            Series
          </a>
        </NavLink>
        <NavLink to="/trending">
          <a class="nav-item nav-link" href="#">
            Trending
          </a>
        </NavLink>
        {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
      </nav>
    </>
  );
}
export default SimpleBottomNavigation;
