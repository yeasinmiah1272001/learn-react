import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDoctors } from "../Utility/LocalStorage";

const DoctorsDetails = () => {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const appointmentDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  console.log(idInt)

  useEffect(() => {
    const findDetails = appointmentDetails.filter((item) => item.id == idInt);
    setDoctorDetails(findDetails);
  }, [idInt, appointmentDetails]);

  // local-storage
  const handleAddDoctor = () =>{
    saveDoctors(idInt)
    
  }

  return (
    <div className="container mx-auto py-10">
      {doctorDetails.map((details) => (
        <div key={details.id} className="flex flex-col items-center">
          <img
            className="w-full h-auto max-h-96 rounded-lg shadow-2xl mb-4"
            src={details.pic}
            alt=""
          />
          <h1 className="text-3xl font-bold mb-2">{details.name}</h1>
          <h2 className="text-2xl font-semibold">{details.specialization}</h2>
          <p className="text-xl mt-2">Fees: ${details.fees}</p>
          <button onClick={handleAddDoctor} className="btn btn-primary mt-4">
            Make Appointment
          </button>
        </div>
      ))}
     
    </div>
  );
};

export default DoctorsDetails;


