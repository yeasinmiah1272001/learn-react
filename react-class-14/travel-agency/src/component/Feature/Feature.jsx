import { useEffect, useState } from "react";

const Feature = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("feeature.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-10">
        <div className="justify-center text-center">
          <h1 className="text-4xl font-bold my-1">Featured Property Types</h1>
          <p>Find All Type of Property.</p>
        </div>
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {feature.map((item) => (
            <div key={item.id} className="">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="h-20 mx-auto" src={item.cover} alt="" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
                  {item.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
