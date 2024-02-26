import { useLoaderData } from "react-router-dom";
import Service from "./Service";


const Services = () => {
       const services = useLoaderData()
       console.log(services)
       return (
         <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
           {services.map((service) => (
             <Service key={service.id} service={service}></Service>
           ))}
         </div>
       );
};

export default Services;