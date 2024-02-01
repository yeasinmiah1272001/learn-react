import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
      AOS.init({
        duration: 2000, // Set your preferred animation duration
        easing: "ease-in-out", // Set your preferred easing function
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div data-aos="zoom-in" className="text-center my-4">
        <h1 className="text-4xl font-semibold">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {category.map((item) => (
          <div
            data-aos="fade-up"
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={item.id}
          >
            <img className="mx-auto w-14" src={item.logo} alt="" />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                {item.category_name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-center text-gray-500 dark:text-gray-400">
              {item.availability}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
