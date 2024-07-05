import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";

import { MdJavascript } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import Typewriter from "typewriter-effect";

const SkillsPrograges = () => {
  return (
    <div className="w-5/6 mx-auto">
      <div>
        <div className="text-center border-b border-white my-20">
          <h1 className="   mt-10 text-5xl  text-[#c4cfde] mb-5 font-extrabold">
            My Skills
          </h1>
          <div className="my-5 text-center">
            <span className="text-[#ff014f] font-extrabold text-4xl  ">
              <Typewriter
                options={{
                  strings: [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "TAILWINDCSS",
                    "REACT JS",
                    "FIREBASE",
                    "VERCEL",
                    "NODE JS",
                    "EXPRESS JS",
                    "MONGODB",
                    "BOOTSTRAP",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: " 🔥",
                }}
              />
            </span>
          </div>
          <p>
            <p className="text-white mb-2">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </p>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center md:justify-between">
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <FaHtml5 className="text-9xl p-3 hover:p-1  font-extrabold mx-auto text-[#c4cfde] duration-700 "></FaHtml5>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  90%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] md:text-3xl text-2xl font-extrabold mt-2">
                HTML
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <FaCss3Alt className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></FaCss3Alt>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  90%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] mt-2 md:text-3xl text-2xl  font-extrabold">
                CSS
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <MdJavascript className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></MdJavascript>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  80%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                javascript
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <SiTailwindcss className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></SiTailwindcss>
                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  85%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                TailwindCSS
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <FaReact className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 "></FaReact>
                <h1
                  className="text-[#c4cfde]
                  md:text-3xl text-2xl  font-extrabold"
                >
                  85%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                react js
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <SiFirebase className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
                  md:text-3xl text-2xl  font-extrabold"
                >
                  85%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                Firebase
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <SiVercel className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
                  md:text-3xl text-2xl  font-extrabold"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                Vercel
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <FaNode className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
                  text-3xl  font-extrabold"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                Node js
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <SiExpress className="text-9xl p-3 hover:p-1 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                Express JS
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover:-mt-5 duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <SiMongodb className="text-9xl p-4 hover:p-0 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold  hover:text-[#8954f7]"
                >
                  50%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] hover:text-[#8954f7]  uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                MongoDB
              </h1>
            </div>
            <div className="text-center my-5">
              <div className="text-center bg-[#202327]  hover: duration-1000 hover:bg-[#010101] shadow-2xl p-3 rounded-3xl">
                <FaBootstrap className="text-9xl p-4 hover:p-0 font-extrabold mx-auto text-[#c4cfde] duration-700 " />

                <h1
                  className="text-[#c4cfde]
             text-3xl font-extrabold  hover:text-[#8954f7]"
                >
                  90%
                </h1>
              </div>
              <h1 className="text-[#c4cfde] hover:text-[#8954f7]  uppercase mt-2 md:text-3xl text-2xl  font-extrabold">
                Bootstrap
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPrograges;
