import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllTeacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Respectable Teachers </h1>
      <Slider {...settings}>
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
          >
            <img
              className="w-40 mx-auto mt-4 rounded-full h-40 object-cover"
              src={teacher.image}
              alt={teacher.name}
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {teacher.name}
              </h2>
              <p className="text-gray-600 mt-2">{teacher.school}</p>
              <p className="text-gray-600 mt-2">{teacher.mobile}</p>
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllTeacher;
