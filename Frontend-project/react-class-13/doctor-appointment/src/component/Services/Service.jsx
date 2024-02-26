
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
const Service = ({service}) => {
      const { pic, details, countDoctors, openDays, name } = service;
       return (
         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <a href="#">
             <img className="p-8 rounded-t-lg" src={pic} alt="product image" />
           </a>
           <div className="px-5 pb-5">
             <a href="#">
               <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                 {name}
               </h5>
             </a>
             <div className=" items-center mt-2.5 mb-5">
               <h1 className=" text-xl">Specialised Doctors:{countDoctors}</h1>

               <h1 className=" text-xl">open:{openDays}</h1>
               <br />
               <p>{details.slice(0, 70)}</p>
             </div>
             <div className="items-center text-center justify-between">
               <AwesomeButton type="secondary">Details</AwesomeButton>
             </div>
           </div>
         </div>
       );
};

export default Service;