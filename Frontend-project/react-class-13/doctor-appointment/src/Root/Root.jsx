import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Root = () => {
       return (
         <div>
           <Navbar></Navbar>
           <div className="lg:mx-12">
             <Outlet></Outlet>
             <Footer></Footer>
           </div>
         </div>
       );
};

export default Root;