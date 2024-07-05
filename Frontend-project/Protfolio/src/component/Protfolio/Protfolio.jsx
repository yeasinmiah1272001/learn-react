import { Link } from "react-router-dom";

import portfolio1 from "../../assets/protfolio/car-doctors.png";
import { useEffect, useState } from "react";


const Protfolio = () => {
       const [protfolio, setProtfolio] = useState([])
       useEffect(() => {
              fetch("/protfolio.json")
              .then(res => res.json())
              .then(data => setProtfolio(data))
       },[])
       return (
         <div className="w-5/6 mx-auto">
           <div className="text-center my-20">
             <span className="my-2 md:text-xl text-[11px] md:mx-4 font-thin border-[#ff014f] border  rounded-sm md:px-5 py-2   text-[#ff014f]">
               VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
             </span>
             <h1 className=" border-b border-white pb-5 mt-10 text-5xl  text-[#c4cfde] mb-10 font-extrabold">
               My Portfolio
             </h1>
           </div>
           <div className="grid md:grid-cols-3 items-center gap-5">
             {protfolio.map((item) => (
               <div key={item.id} className="border p-5 h-[478px] shadow-2xl rounded-br-3xl  border-[#ff014f] rounded-tl-3xl  bg-[#202327]   duration-1000 hover:bg-[#010101]">
                 <img
                   src={item.image}
                   alt=""
                   className="w-full h-80 object-cover object-top rounded-t-2xl hover:object-bottom duration-[5000ms]"
                 />

                 <div className="flex justify-evenly items-center my-5 text-white">
                   <Link to={item.liveLink}>
                     <button>Demo</button>
                   </Link>
                   <Link
                     to={item.githubLink}
                     
                   >
                     <button>GitHub</button>
                   </Link>
                 </div>
                 <div>
                   <ul className="text-white">
                     <li>{item.name}</li>
                   </ul>
                 </div>
               </div>
             ))}
           </div>
         </div>
       );
};

export default Protfolio;