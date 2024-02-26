import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoreDonation } from "../Utility/LocalStorage";

const Donation = () => {
  const donation = useLoaderData();
  const [storeDonation, setStoreDonation] = useState([]);
  const [donationLength, setDonationLength] = useState(4);
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const storeDonationId = getStoreDonation();
    if (storeDonationId.length > 0) {
      const appliedDonation = donation.filter((item) =>
        storeDonationId.includes(item.id)
      );
      setStoreDonation(appliedDonation);
      setDonationLength(donationLength);
      setFilterData(storeDonation)
    }
  }, [donation]);

  // filter
  const handleFilter = filter =>{
    if(filter === 'all'){
      setFilterData(storeDonation)
      
    }
    else if(filter === 'Health Product 1'){
       const filterProduct = storeDonation.filter(
         (item) => item.category === "Health Product 1"
       );
      setFilterData(filterProduct);
    }
    else if(filter === 'Food'){
      const filterFood = storeDonation.filter(
        (item) => item.category === "Food"
      );
      setFilterData(filterFood)
    }
    else if(filter === 'Clothing'){
       const filterClothing = storeDonation.filter(
         (item) => item.category === "Clothing"
       );
      setFilterData(filterClothing)
    }
    else if(filter === 'Education'){
       const filterEducation = storeDonation.filter(
         (item) => item.category === "Education"
       );
      setFilterData(filterEducation);
    }
    else if(filter === 'Health'){
       const filterHealth = storeDonation.filter(
         (item) => item.category === "Health"
       );
      setFilterData(filterHealth);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <div className="relative group">
          <button className="btn bg-green-500">
            Select your category
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
              ▼
            </span>
          </button>
          <ul className="dropdown-content hidden group-hover:block absolute z-10 top-full left-0 bg-white border border-gray-200 rounded-md shadow w-52">
            <li onClick={() => handleFilter("all")}>
              <a className="block p-2">All</a>
            </li>
            <li onClick={() => handleFilter("Health Product 1")}>
              <a className="block p-2">Health Product 1</a>
            </li>
            <li onClick={() => handleFilter("Food")}>
              <a className="block p-2">Food</a>
            </li>
            <li onClick={() => handleFilter("Clothing")}>
              <a className="block p-2">Clothing</a>
            </li>
            <li onClick={() => handleFilter("Education")}>
              <a className="block p-2">Education</a>
            </li>
            <li onClick={() => handleFilter("Health")}>
              <a className="block p-2">Health</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* jodi filter na kori tahole storeDonation hobe r jodi filter kori tahole filterData hobe */}
        {filterData.slice(0, donationLength).map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              className="object-cover w-full h-64 md:h-48 lg:h-64 rounded-t-lg"
              src={data.picture}
              alt=""
            />
            <div className="p-4 flex flex-col items-center">
              <h5 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {data.category}
              </h5>
              <p className="text-gray-700 dark:text-gray-400 mb-3">
                {data.title}
              </p>
              <p
                style={{ color: data.category_bg_color }}
                className="text-gray-700 dark:text-gray-400 mb-3"
              >
                {data.price}
              </p>
              <Link to="/" className="text-white">
                <button
                  style={{ backgroundColor: data.category_bg_color }}
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setDonationLength(donation.length)}
          className={
            donation.length === donationLength
              ? "hidden"
              : "bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          }
        >
          See all
        </button>
      </div>
    </div>
  );
};

export default Donation;
