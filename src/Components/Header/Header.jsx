// import _default from "react-bootstrap/esm/ToggleButtonGroup"
import "./Header.css";
import React from "react";

function Header({ searchMovies, setSearchKey, NavLink }) {
  return (
    <header onClick={() => window.scroll(0, 0)}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <NavLink to="/">
          <i class="fa fa-film " aria-hidden="true"></i>
        </NavLink>
        <form class="form-inline-block my-2 my-lg-0" onSubmit={searchMovies}>
          <input
            class="form-control mr-sm-2"
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type={"submit"}>
            Поиск
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
