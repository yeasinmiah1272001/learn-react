import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/About/logo.png";
import { useContext } from "react";
import { AuthContext } from "../firebase/Provider/AuthProvider";

const Navbar = () => {
  const {user} = useContext(AuthContext)
  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white  fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <a className="" href="">
              {" "}
              {Links}
            </a>
          </ul>
        </div>
        <h1 className="  normal-case md:text-xl">
          <img className="small:w-40 lg: w-44" src={logo} alt="" />
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-xl">
          {Links}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">{/* <img src={navPic} /> */}</div>
        </label>

        <NavLink to="/login">
          <button className="btn">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
