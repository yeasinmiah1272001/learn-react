import { useEffect, useState } from "react";
import Doctor from "./Doctor";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";



const Doctors = () => {
       const [doctors, setDoctors] = useState([])
       const [showAll, setShowAll] = useState(3)
    
      
       useEffect(() =>{
              fetch("/doctors.json")
              .then(res => res.json())
              .then(data => setDoctors(data))

       },[])

      

       return (
         <div>
           <h1 className="text-center text-3xl font-semibold mt-5">
             Request Appointment
           </h1>
           <p className="text-center text-xl font-semibold my-2">
             Make sure to make an appointment before visiting our clinic
           </p>
           <h1>Doctors : {doctors.length}</h1>

           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {doctors.slice(0,showAll).map((doctor) => (
               <Doctor key={doctor.id} doctor={doctor}></Doctor>
             ))}
           </div>
           <div className={showAll === doctors.length ? 'hidden' : 'items-center text-center justify-between'}>
             <Link onClick={() => setShowAll(doctors.length)}>
               <AwesomeButton type="secondary">Show all</AwesomeButton>
             </Link>
           </div>
         </div>
       );
};

export default Doctors;