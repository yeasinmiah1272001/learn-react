import { useContext } from "react";
import { MoneyContext } from "./Dada";


const Yeasin = () => {
  const [money, setMoney] = useContext(MoneyContext)
       return (
         <div className="border-2 border-yellow-400 p-8">
           <h1>Yeasin</h1>
           <p>{money}</p>
           <button onClick={() => setMoney(money + 10)} >Add Money</button>
         </div>
       );
};

export default Yeasin;