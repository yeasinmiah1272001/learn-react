import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationApplication } from "../Utility/LocalStorage";


const CardDetails = () => {
       const details = useLoaderData()
       const [data, setData] = useState([])
       const {id} = useParams()
       const intId = parseInt(id)
       
        useEffect(() => {
          const findData = details.find(item => item.id === intId);
          setData(findData);
          console.log(findData);
        }, []);

        const handleAddBtn = () =>{
              saveDonationApplication(+intId)
              toast("Donation succesfull done")

        }



       return (
         <div className="bg-white p-8 rounded-lg shadow-md mx-auto my-8 relative">
           <div className="">
             <img className="w-full h-96" src={data.picture} alt="" />
             <div className="">
               <button
                 onClick={handleAddBtn}
                 className="bg-blue-500 text-white px-4 py-2 rounded-md absolute -mt-14 left-11 "
               >
                 Donation {data.price}
               </button>
             </div>
           </div>
           <div>
             <h1>{data.title}</h1>
             <p>{data.description}</p>
           </div>
           <ToastContainer />
         </div>
       );
};

export default CardDetails;