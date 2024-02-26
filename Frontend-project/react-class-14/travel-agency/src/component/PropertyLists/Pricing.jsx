import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreAppartment } from "../LocalStorage/LocalStorage";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const storeAppart = useLoaderData();
  const [storeHouse, setStoreHouse] = useState([])
  const [showName, setShowName] = useState([])
  const [filters, setFilter] = useState([])


  useEffect(() => {
    const storeid = getStoreAppartment();
    if (storeAppart.length > 0) {
      const appliedHouse = storeAppart.filter((item) =>
        storeid.includes(item.id)
      );
      setStoreHouse(appliedHouse);
    }
  }, []);

  const handleShowName = Name =>{
       const newName = [...showName, Name]
       setShowName(newName)
  }

  const handleFilter = (filter) =>{
       if(filter === "all"){
              setFilter(storeHouse)
       }
       if(filter === "Apartment"){
              const filterApart = storeHouse.filter(
                (filterItem) => filterItem.type === "Apartment"
              )
              setFilter(filterApart)
       }

       else if(filter === "Condos"){
              const filterCondos = storeHouse.filter(
                (filterItem) => filterItem.type === "Condos"
              )
              setFilter(filterCondos)
       }
  }

  

  return (
    <div>
      <div className="dropdown dropdown-hover mx-auto">
        <div tabIndex={0} role="button" className="btn m-1">
          All Design
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("Apartment")}>
            <a>Apartment</a>
          </li>
          <li onClick={() => handleFilter("Condos")}>
            <a>Condos</a>
          </li>
          <li>
            <a>Offices</a>
          </li>
          <li>
            <a>Homes & Villas</a>
          </li>
          <li>
            <a>Commercial</a>
          </li>
        </ul>
      </div>
      <div className="grid-cols-6 flex mx-10 gap-4 mt-4">
        {" "}
        {/* Added padding */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 xl:grid-cols-3 h-56">
          {filters.map((data) => (
            <PricingCard
              key={data.id}
              data={data}
              handleShowName={handleShowName}
            ></PricingCard>
          ))}
        </div>
        <div>
          {showName.map((item) => (
            <div className="p-6 bg-red-400" key={item.id}>
              <div className="flex">
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
                <img className="h-10" src={item.cover} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;





