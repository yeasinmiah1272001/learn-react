import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl text-red-500 mb-6">
        React Tour World
      </h1>
      <div className="flex justify-between mb-4">
        <h2>Number of Countries: {countries.length}</h2>
        <h2>Visited: {visitedCountry.length}</h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {visitedCountry.map((country) => (
          <div key={country.cca3} className="flex items-center">
            <img
              src={country.flags.png}
              alt="Flag"
              className="rounded-lg border border-gray-300 w-16"
            />
            <p className="ml-2">{country.name.common}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
