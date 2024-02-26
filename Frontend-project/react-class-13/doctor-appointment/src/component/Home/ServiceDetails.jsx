import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const serviceDetails = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findDetails = serviceDetails.filter((item) => item.id === id);
    setDetails(findDetails);
  }, [id, serviceDetails]);

  return (
    <div className="container mx-auto py-10">
      {details.map((card) => (
        <div
          key={card.id}
          className="flex flex-col md:flex-row items-center justify-center md:justify-between"
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={card.pic}
              alt=""
              className="w-full md:max-w-lg h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {card.name}!
            </h1>
            <p className="py-2 font-semibold text-xl">
              Specialized Doctors: {card.countDoctors}
            </p>
            <p className="py-2 font-semibold text-xl">Open: {card.openDays}</p>
            <Link to="/">
              <button className="btn btn-primary mt-4">Back</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails;
