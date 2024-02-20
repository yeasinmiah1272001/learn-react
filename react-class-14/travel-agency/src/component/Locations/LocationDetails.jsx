import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const LocationDetails = () => {
       const [details, setDetails] = useState([])
       const locationDetails = useLoaderData()
       const {id} = useParams()
       useEffect(() => {
              const findData = locationDetails.find((data) => data.id ==id)
              setDetails(findData)
       },[])
       return (
         <div>
           <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
             <div className="relative overflow-hidden bg-cover bg-no-repeat">
               <img className="rounded-t-lg " src={details.cover} alt="" />
             </div>
             <div className="p-6">
               <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                 {details.name}
               </h5>
               <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                 {details.Apartments}
               </p>
               <p className="text-base text-neutral-600 dark:text-neutral-200">
                 <small className="text-neutral-500 dark:text-neutral-400">
                   {details.Offices}
                 </small>
               </p>
             </div>
           </div>
         </div>
       );
};

export default LocationDetails;