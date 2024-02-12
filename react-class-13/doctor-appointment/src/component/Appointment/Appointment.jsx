import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDoctor } from "../Utility/LocalStorage";

const Appointment = () => {
  const appointment = useLoaderData();
  console.log("Appointment:", appointment);
  const [storeAppointment, setStoreAppointment] = useState([]);

  useEffect(() => {
    const storeDoctorId = getStoreDoctor();
    console.log("Store Doctor IDs:", storeDoctorId);
    if (appointment.length > 0) {
      const appliedDoctor = appointment.filter((doctor) =>
        storeDoctorId.includes(doctor.id)
      );
      console.log("Filtered Doctors:", appliedDoctor);
      setStoreAppointment(appliedDoctor);
    }
  }, [appointment]);

  return (
    <div>
      {storeAppointment.map((doctor) => (
        <div key={doctor.id}>
          <h1>Doctor Name: {doctor.name}</h1>
          <img src={doctor.pic} alt="" />
        </div>
      ))}
      <h1>Total Doctors: {storeAppointment.length}</h1>
    </div>
  );
};

export default Appointment;
