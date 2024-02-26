import React, { useState } from 'react';

const Class = () => {
       const [visited, setVisited] = useState(false)

       const handleVisited = () =>{
              setVisited(!visited)

       }
       return (
         <div>
           <h1>Functionality</h1>
           <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20">
             <div className="card-body">
               <h2 className="card-title text-red-500">{visited? "ami cox bazar geshi" : "ami life a 1 bar hole o jabo"}</h2>
               <div className="card-actions justify-end">
                 <button onClick={handleVisited} className="btn btn-primary">
                     {visited? "Visited" : "coming"}
                 </button>
               </div>
             </div>
           </div>
         </div>
       );
};

export default Class;