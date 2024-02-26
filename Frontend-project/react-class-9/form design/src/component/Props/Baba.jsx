import Jamir from "./Jamir";
import Yeasin from "./Yeasin";


const Baba = ({ mobile }) => {
  return (
    <div className="border-2 border-yellow-400 p-10">
      <h1 className="text-4xl">Baba</h1>
   
      <div className=" border-yellow-400 p-6 space-y-2">
        <Yeasin></Yeasin>
        <Jamir mobile={mobile}></Jamir>
      </div>
    </div>
  );
};

export default Baba;