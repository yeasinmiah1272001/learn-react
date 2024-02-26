// Import necessary styles or define them inline
import { useLoaderData, useParams } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/LocalStroge";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const { id } = useParams();
   const idInt = parseInt(id);

  const jobFind = jobDetails.find((details) => details.id === idInt)

  const handleApply = () =>{
    saveJobApplication(idInt)

    toast("apply done")
  }

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your preferred animation duration
      easing: "ease-in-out", // Set your preferred easing function
    });
  }, []); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div data-aos="flip-up" className="md:col-span-2 ">
        <div className="mx-auto">
          <figure>
            <img
              className="mx-auto w-48 md:w-64 rounded-md shadow-md"
              src={jobFind.logo}
              alt="Job Logo"
            />
          </figure>
        </div>
        <div className="card card-side bg-white shadow-md p-6">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-4">{jobFind.job_title}</h2>
            <p className="text-gray-700 mb-4">{jobFind.job_description}</p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Responsibilities:</span>{" "}
              {jobFind.job_responsibility}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Education:</span>{" "}
              {jobFind.educational_requirements}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Experience:</span>{" "}
              {jobFind.experiences}
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down-left"
        className="md:col-span-1 bg-sky-200 p-4 rounded-lg shadow"
      >
        <h1 className="text-center text-3xl font-bold">Job Details</h1>
        <div className="mt-10">
          <h1 className="font-bold">
            Salary : <span className="ml-5">{jobFind.salary}</span>
          </h1>
          <br />
          <h1 className="font-bold">
            Job Title : <span className="ml-5">{jobFind.job_title}</span>
          </h1>
          <br />
          <h1 className="font-bold">
            Phone :{" "}
            <span className="ml-5">{jobFind.contact_information.phone}</span>
          </h1>
          <br />
          <h1 className="font-bold">
            Email :{" "}
            <span className="ml-5">{jobFind.contact_information.email}</span>
          </h1>
          <br />
          <h1 className="font-bold">
            Address :{" "}
            <span className="ml-5">{jobFind.contact_information.address}</span>
          </h1>
        </div>
        <button
          onClick={handleApply}
          className="btn w-full bg-blue-500 text-white py-2 px-4 rounded-full mt-20"
        >
          Apply Now
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;

