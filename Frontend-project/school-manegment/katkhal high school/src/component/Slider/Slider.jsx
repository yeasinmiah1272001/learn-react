import React from "react";
import banner2 from "../../assets/428609503_888673196322090_7685149284575512910_n.jpg";
import banner3 from "../../assets/423224566_874677531054990_6719235430676765307_n.jpg";
import banner4 from "../../assets/all sir.jpg";
import banner5 from "../../assets/sir.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1300} // interval in milliseconds
      className="lg:h-[450px] relative"
    >
      <div>
        <img className="lg:h-[950px]" src={banner2} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <h1 className="font-bold text-5xl">Welcome To</h1>
            <h1 className="font-bold text-3xl">Katkhal High School</h1>
          </div>
        </div>
      </div>
      <div>
        <img className="lg:h-[1000px]" src={banner5} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <h1 className="font-bold text-5xl">Welcome To</h1>
            <h1 className="font-bold text-3xl">Katkhal High School</h1>
          </div>
        </div>
      </div>
      <div>
        <img className="lg:h-[1000px]" src={banner4} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <h1 className="font-bold text-5xl">Welcome To</h1>
            <h1 className="font-bold text-3xl">Katkhal High School</h1>
          </div>
        </div>
      </div>
      <div>
        <img className="lg:h-[1000px]" src={banner3} alt="" />
        <div className="absolute top-[300px] left-0 right-0 mx-auto text-center text-white hidden md:block">
          <div className="bg-black bg-opacity-60 p-4 rounded-lg inline-block">
            <h1 className="font-bold text-5xl">Welcome To</h1>
            <h1 className="font-bold text-3xl">Katkhal High School</h1>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
