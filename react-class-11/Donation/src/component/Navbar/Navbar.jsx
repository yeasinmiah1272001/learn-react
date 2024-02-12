
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()

    .then(result =>{
      console.log(result.user)
     
    })
    .then(error => {
      console.error(error)
    })


  }



  return (
    <nav className="bg-slate-100 p-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-14 h-12 mr-2" />
      </div>

      {/* Navigation links on the right */}
      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Home
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
          </>
        )}

        <NavLink
          to="/Statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          Statistics
        </NavLink>
        {user ? (
          <>
            <span>{user.email}</span>
            <NavLink
              onClick={handleLogOut}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              LogOut
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 underline" : ""
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
