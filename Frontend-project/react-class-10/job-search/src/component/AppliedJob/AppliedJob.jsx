import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../utility/LocalStroge";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [storeJob, setStoreJob] = useState([]);
  const [dataLength, setDataLength] = useState(4)
  const [filterJob, setFilterJob] = useState([])
// filter
  const handleFilter = filter =>{
    if(filter === "all"){
      setFilterJob(storeJob)
    }
    else if(filter === "remote"){
      const remoteJob = storeJob.filter((item) => item.remote_or_onsite === "Remote")
      setFilterJob(remoteJob)

    }
    else if(filter === "onsite"){
      const onsitJob = storeJob.filter(
        (item) => item.remote_or_onsite === "Onsite"
      );
      setFilterJob(onsitJob)

    }

  }
  // filter end

  useEffect(() => {
    const storeJobIds = getStoreJobApplication();
    if (jobs.length > 0) {
      const appliedJob = jobs.filter((job) => storeJobIds.includes(job.id));
      setStoreJob(appliedJob);
      setFilterJob(appliedJob)
    }
  }, [jobs]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        Applied Jobs: {storeJob.length}
      </h1>

      {/* filter */}
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter By
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>

      {/* filter end */}

      {filterJob.slice(0, dataLength).map((job) => (
        <div
          key={job.id}
          className="my-4 p-6 border-2 rounded-lg bg-amber-100 shadow-md flex items-center gap-10"
        >
          <img
            className="w-32 h-32 object-contain bg-gray-200 rounded-md"
            src={job.logo}
            alt={`${job.company_name} logo`}
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-2">{job.job_title}</h1>
            <p className="text-gray-600 mb-4">{job.company_name}</p>
            <div className="flex items-center mb-2">
              <button className="btn btn-orange">{job.remote_or_onsite}</button>
              <button className="btn btn-green ml-2">{job.job_type}</button>
            </div>
            <div className="flex gap-3">
              <p>{job.location}</p>
              <p>Salary: {job.salary}</p>
            </div>
            <button className="btn btn-orange font-semibold mt-4">
              View Details
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={() => setDataLength(jobs.length)}
        className={
          jobs.length === dataLength
            ? "hidden"
            : "btn bg-red-500 font-semibold mt-4"
        }
      >
        Show All
      </button>
    </div>
  );
};

export default AppliedJob;
