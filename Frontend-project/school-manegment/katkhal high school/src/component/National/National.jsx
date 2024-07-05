import React from "react";
import video from "../../assets/আমার সোনার বাংলা _ দেশ বরেণ্য ৫০ জন শিল্পীর কন্ঠে জাতীয় সংগীত _ National Anthem of Bangladesh.mp4";
import img1 from "../../assets/ima1.jpeg";
import img2 from "../../assets/images2.jpeg";
import img3 from "../../assets/img3.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const National = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="mt-3 font-bold text-2xl text-black">National Anthem</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Side - Video Player */}
        <div className="md:order-2">
          <video
            autoPlay={true}
            className="w-full rounded-lg shadow-lg"
            controls
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side - Autoplay Slider */}
        <div className="md:order-1">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={3000} // Adjust autoplay interval as needed
            className="relative overflow-hidden rounded-lg"
          >
            <div>
              <img
                className="w-full h-60 md:h-80 object-cover"
                src={img1}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-60 md:h-80 object-cover"
                src={img2}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-60 md:h-80 object-cover"
                src={img3}
                alt=""
              />
            </div>
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};

export default National;
