import Brother from "./Brother";
import Sister from "./Sister";


const Uncle = () => {
       return (
         <div className="border-2 border-yellow-400 p-8">
           <h1 className="text-4xl">Uncle</h1>
           <div className="space-y-2">
             <Brother></Brother>
             <Sister></Sister>
           </div>
         </div>
       );
};

export default Uncle;