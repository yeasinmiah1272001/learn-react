import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div className="mt-7">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {details.map((item) => (
          <Link
            key={item._id}
            // Adjust the route as per your application
            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg h-52 mx-auto"
                src={item.cover}
                alt=""
              />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Rating: {item.rating}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/cartDetails/${item._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Details
                  </button>
                </Link>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Details;
