import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <div className="space-x-4">
            <NavLink className="text-white" to="/">
              Homes
            </NavLink>
            <NavLink className="text-white" to="/product">
              Product
            </NavLink>
            <NavLink className="text-white" to="/add">
              Add Product
            </NavLink>
            
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;