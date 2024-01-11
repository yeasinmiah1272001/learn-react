import React, { useState } from "react";
import "./Country.css"; // Corrected import statement

const Country = ({ country, handleVisitedCountry }) => {
  // Destructure properties from the country object
  const { name, flags } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country-card ${visited ? "visited" : "not-visited"}`}>
      <figure className="flex justify-center items-center">
        <img
          src={flags.png} // Make sure capitalInfo and flags exist
          alt="Flag"
          className="rounded-lg border border-gray-300 country-image"
        />
      </figure>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{name.common}</h2>
        <button
          onClick={handleVisited}
          className={`status-btn ${
            visited ? "bg-green-500" : "bg-yellow-500"
          } text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300`}
        >
          {visited ? "Visited" : "Coming"}
        </button>
        <p className="status-text">
          {visited
            ? "I have visited this country"
            : "I want to visit this country"}
        </p>
        <br />
        <button
          onClick={() => handleVisitedCountry(country)}
          className="visit-btn bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Mark as Visited
        </button>
      </div>
    </div>
  );
};

export default Country;
