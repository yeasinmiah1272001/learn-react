import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Banner from "../component/Banner/Banner";

const Root = () => {
       return (
         <div>
           <Navbar></Navbar>
           <Banner></Banner>
             <Outlet></Outlet>
         </div>
       );
};

export default Root;