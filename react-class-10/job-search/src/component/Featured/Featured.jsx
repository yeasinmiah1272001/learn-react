import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import AOS from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(8)


  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
       AOS.init({
         duration: 2000, // Set your preferred animation duration
         easing: "ease-in-out", // Set your preferred easing function
       });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Featured Jobs</h1>
        <p className="text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>

      <div
        data-aos="zoom-out-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center mt-4"
        }
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-blue-500 text-white "
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Featured;
