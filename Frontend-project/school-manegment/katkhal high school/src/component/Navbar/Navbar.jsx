import React from 'react';
import logo from "../../assets/Screenshot_2.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
       return (
         <div className="navbar bg-base-100 font-semibold">
           <div className="navbar-start font-semibold ">
             <div className="dropdown">
               <div
                 tabIndex={0}
                 role="button"
                 className="btn btn-ghost lg:hidden"
               >
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
               </div>
               <ul
                 tabIndex={0}
                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
               >
                 <li>
                   <a href="#home">Home</a>
                 </li>
                 <li>
                   <a>Administration</a>
                   <ul className="p-2">
                     <li>
                       <a href="#staff">Head Teacher</a>
                     </li>
                     <li>
                       <a href="#staff">Teacher</a>
                     </li>
                     <li>
                       <a href="#staff">Managing Commite</a>
                     </li>
                   </ul>
                 </li>
                 <li>
                   <Link to="https://eboardresults.com/en/ebr.app/home/">
                     Result
                   </Link>
                 </li>
                 <li>
                   <a href="#about">About</a>
                 </li>
                 <li>
                   <a href="#contact">Contact</a>
                 </li>
               </ul>
             </div>
             <a className=" text-xl text-red-500" href="#home">
               <img src={logo} alt="School Logo" className="h-20 mr-3" />
             </a>
           </div>
           <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal px-1">
               <li>
                 <a href="#home">Home</a>
               </li>
               <li>
                 <details>
                   <summary>Administration</summary>
                   <ul className="p-2">
                     <li>
                       <a href="#staff">Head Teacher</a>
                     </li>
                     <li>
                       <a href="#staff">Teacher</a>
                     </li>
                     <li>
                       <a href="#staff">Managing Commite</a>
                     </li>
                   </ul>
                 </details>
               </li>
               <li>
                 <Link to="https://eboardresults.com/en/ebr.app/home/">
                   Result
                 </Link>
               </li>
               <li>
                 <a href="#about">About</a>
               </li>
               <li>
                 <a href="#contact">Contact</a>
               </li>
             </ul>
           </div>
           <div className="navbar-end">
             <a className="btn" href="#login">
               Login
             </a>
           </div>
         </div>
       );
};

export default Navbar;