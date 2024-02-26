import { createContext, useState } from "react";
import Baba from "./Baba";
import Uncle from "./Uncle";

export const RingContext = createContext("Diamond")
export const MoneyContext = createContext(100)


const Dada = () => {
  const [money, setMoney] = useState(100)
       const mobile = "Iphone"
       return (
         <div className="border-2 border-yellow-400 p-12">
           <h1 className="text-4xl">Dada</h1>
           <p>{mobile}</p>
           <p>{money}</p>
           <MoneyContext.Provider value={[money, setMoney]}>
             <RingContext.Provider value="Diamond">
               <div className="space-y-2 gap-3">
                 <Baba mobile={mobile}></Baba>
                 <Uncle></Uncle>
               </div>
             </RingContext.Provider>
           </MoneyContext.Provider>
         </div>
       );
};

export default Dada;