import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Job = ({ job }) => {
  const {
    salary,
    job_type,
    location,
    remote_or_onsite,
    company_name,
    job_title,
    logo,
    id
  } = job;
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your preferred animation duration
      easing: "ease-in-out", // Set your preferred easing function
    });
  }, []); 


  return (
    <div
      data-aos="zoom-out"
      className="max-w-sm mx-auto bg-white border border-gray-300 rounded-md overflow-hidden shadow-md "
    >
      <img
        className="w-40 h-12 object-cover mx-auto mt-4"
        src={logo}
        alt={company_name}
      />

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500">{job_type}</span>
          <span className="text-gray-500">Posted</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {job_title}
        </h2>

        <p className="text-sm text-gray-600">{company_name}</p>

        <p className="text-sm text-gray-700 mt-2">{location}</p>
        <p className="text-sm text-gray-700 mt-2">{salary}</p>

        <div className="flex mt-4 space-x-2">
          <button className="btn btn-blue font-semibold">
            {remote_or_onsite}
          </button>
          <button className="btn btn-green font-semibold">{job_type}</button>
          <Link to={`/details/${id}`}>
            <button className="btn bg-indigo-200 font-semibold">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
