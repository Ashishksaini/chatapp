import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Logo">chat-app</div>
      <div>
        <ul className="navbar--elements">
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/todo">
            <li>todo</li>
          </Link>
          <Link to="/joining--page">
            <li>join meet</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
