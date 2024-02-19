import { useEffect, useState } from "react";
import Location from "./Location";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/location.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <div className="mt-9">
      <div className="text-center justify-center">
        <h1 className="text-4xl font-bold">Explore By Location</h1>
        <p className="my-2 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3  lg:gap-8 mx-10   mt-6 md:grid-cols-2">
        {locations.map((location) => (
          <Location key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
