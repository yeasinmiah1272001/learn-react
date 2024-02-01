import banner from "../../assets/images/user.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {

 useEffect(() => {
   AOS.init({
     duration: 2000, // Set your preferred animation duration
     easing: "ease-in-out", // Set your preferred easing function
   });
 }, []); 

  return (
    <section className="bg-pink-50">
      <div
        data-aos="fade-right"
        className="flex flex-col md:flex-row justify-around items-center p-8"
      >
        <div className="flex flex-col max-w-md mb-8 md:mb-0 md:mr-8">
          <h1 className="text-4xl mb-4 font-bold text-red-500">
            One Step Closer To Your <br />
            <span className="text-sky-500">Dream Job</span>
          </h1>
          <p className="text-sm mb-6">
            Explore thousands of job opportunities with all the information you
            need. It's your future. Come find it. Manage all your job
            applications from start to finish.
          </p>
          <button className="btn bg-white text-black py-2 px-4 rounded-full inline-block">
            Get started
          </button>
        </div>
        <div data-aos="fade-down" className="flex-shrink-0">
          <img src={banner} alt="" className="w-full md:w-96 rounded-md" />
          {/* Image with adjusted width and shadow */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
