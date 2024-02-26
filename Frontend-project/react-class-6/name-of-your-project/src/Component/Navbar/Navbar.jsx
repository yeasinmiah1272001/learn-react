import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Phone Logo */}
        <div className="text-white font-bold text-lg">
          <span role="img" aria-label="Phone Logo">
            Phone Logo
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          {/* Home Icon */}
          <NavLink to="/" className="text-white" activeClassName="font-bold">
            <span role="img" aria-label="Home">
              🏠
            </span>
            Home
          </NavLink>

          {/* Favourite Icon */}
          <NavLink
            to="/favourite"
            className="text-white"
            activeClassName="font-bold"
          >
            <span role="img" aria-label="Favourite">
              ❤️
            </span>
            Favourite
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
