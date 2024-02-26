import { useState } from "react";

const Blub = () => {
  const [light, setLight] = useState(false)

  const handleBtn = () =>{
    setLight(!light)

  }
       return (
         <div className="mx-auto bg-black ">
           <img className={`w-64 ${light? 'bg-red-600' : 'bg-black'}`}
             src="https://i.ibb.co/cTbWP9t/light-bulb.png"
             alt=""
           />
           <button onClick={handleBtn} className="btn btn-success">
             {light ? "on" : "off"}
           </button>
         </div>
       );
};

export default Blub;