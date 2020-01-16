import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="cool-link">HOME</h2>
      </Link>
      <Link to="/history" style={{ textDecoration: "none" }}>
        <h2>HISTORY</h2>
      </Link>

      <Link to="/all_launches" style={{ textDecoration: "none" }}>
        <h2>LAUNCHES</h2>
      </Link>
    </div>
  );
};

export default Nav;
