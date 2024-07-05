import {
  FaLaptopCode,
  FaDraftingCompass,
  FaCode,
  FaStarOfDavid,
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

import { LiaAmericanSignLanguageInterpretingSolid } from "react-icons/lia";
const Work = () => {
  return (
    <div id="/#workplen" className="w-5/6 mx-auto mb-20 ">
      <div className="my-10">
        <span className="my-5 mx-4 font-thin border-[#ff014f] border  rounded-sm px-5 py-2  text-[#ff014f]">
          FEATURES
        </span>
        <h3 className="  border-b py-5 mb-5 pb-5 border-white text-5xl my-5  text-[#c4cfde] font-extrabold">
          What I Do
        </h3>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 sm:flex-row sm:justify-center gap-5">
        <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
          <div className="card-body  text-[#c4cfde] hover:text-white">
            <span>
              <FaLaptopCode className="text-6xl text-[#ff014f]"></FaLaptopCode>
            </span>
            <h2 className="card-title text-3xl my-2 ">Discussion</h2>
            <p className="text-xl">
              To understand the project needs & requirements it’s very important
              for me, for that I discuss with every detail to related projects.
            </p>
          </div>
        </div>
        <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
          <div className="card-body  text-[#c4cfde] hover:text-white">
            <span>
              <LiaAmericanSignLanguageInterpretingSolid className="text-6xl text-[#ff014f]"></LiaAmericanSignLanguageInterpretingSolid>
            </span>
            <h2 className="card-title text-3xl my-2 ">Planning</h2>
            <p className="text-xl">
              Then I can create a plan for the whole project. Planning gives the
              high potential to every project to do successful.
            </p>
          </div>
        </div>
        <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
          <div className="card-body  text-[#c4cfde] hover:text-white">
            <span>
              <FaDraftingCompass className="text-6xl text-[#ff014f]"></FaDraftingCompass>
            </span>
            <h2 className="card-title text-3xl my-2 ">Design</h2>
            <p className="text-xl">
              I give highly concentration to website design, every time I try to
              give my best to do clean and services related awesome design for
              the website.
            </p>
          </div>
        </div>
        <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
          <div className="card-body  text-[#c4cfde] hover:text-white">
            <span>
              <FaCode className="text-6xl text-[#ff014f]"></FaCode>
            </span>
            <h2 className="card-title text-3xl my-2 ">Coding</h2>
            <p className="text-xl">
              We need to code for every website. it’s very important to have
              hand coding, clean and developer friendly coding.
            </p>
          </div>
        </div>
        <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
          <div className="card-body  text-[#c4cfde] hover:text-white">
            <span>
              <FaStarOfDavid className="text-6xl text-[#ff014f]">
                {" "}
              </FaStarOfDavid>
            </span>
            <h2 className="card-title text-3xl my-2 ">Submit for Review</h2>
            <p className="text-xl">
              After design and coding, I send for review to client. After
              client’s checking, If have to change or revision I again do this.
            </p>
          </div>
        </div>
        <div className="card md:w-[350px] mb-5 bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl">
          <div className="card-body  text-[#c4cfde] hover:text-white">
            <span>
              <FaEarthAmericas className="text-6xl text-[#ff014f]" />
            </span>
            <h2 className="card-title text-3xl my-2 ">Website Is Ready!</h2>
            <p className="text-xl">
              After reviewing everything, we are going to the final step, if
              everything has done, then I can publish it for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
