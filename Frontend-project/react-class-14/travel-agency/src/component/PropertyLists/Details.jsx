import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveAppartment } from "../LocalStorage/LocalStorage";
import { ToastContainer, toast } from "react-toastify";


const Details = () => {
       const [list, setList] = useState([])
       const listItem = useLoaderData()
       const {id} = useParams()
       
       const intId = parseInt(id)
       useEffect(() => {
              const findList = listItem.find((data) =>data.id == intId )
              setList(findList)
            
       },[])

       const handleAppartment = () =>{
        saveAppartment(intId)
        console.log(id)
        toast("House select done")
       }
      
       return (
         <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row">
             <img
               src={list.cover}
               className="max-w-sm rounded-lg shadow-2xl"
             />
             <div>
               <h1 className="text-5xl font-bold">{list.name}</h1>
               <p className="py-6">
                {list.location}
               </p>
               <p className="py-6">
                {list.price}
               </p>
               <button onClick={handleAppartment} className="btn btn-primary">Add to Appartment</button>
             </div>
           </div>
           <ToastContainer></ToastContainer>
         </div>
       );
};

export default Details;