import { useEffect, useState } from "react";
import PropertyList from "./PropertyList/PropertyList";


const PropertyLists = () => {
       const [list, setList] = useState([])
       useEffect(() => {
              fetch("list.json")
              .then(res => res.json())
              .then(data => setList(data))
       },[])
       return (
         <div className="mt-9">
           <div className="text-center justify-center">
             <h1 className="text-4xl font-bold">Recent Property Listed</h1>
             <p className="my-2 text-black">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
               enim ad minim veniam.
             </p>
           </div>
           <div className="grid sm:grid-cols-1 lg:grid-cols-3 mx-10 gap-5 md:grid-cols-2 ">
             {
              list.map(list => <PropertyList key={list.id} list={list}></PropertyList>)
             }
           </div>
         </div>
       );
};

export default PropertyLists;