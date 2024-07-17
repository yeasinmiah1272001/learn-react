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
import { motion } from "framer-motion";

const SkillsPrograges = () => {
  const hoverAnimation = {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.5 },
  };

  const skills = [
    { icon: FaHtml5, name: "HTML", level: "90%" },
    { icon: FaCss3Alt, name: "CSS", level: "90%" },
    { icon: MdJavascript, name: "JavaScript", level: "80%" },
    { icon: SiTailwindcss, name: "TailwindCSS", level: "85%" },
    { icon: FaReact, name: "React JS", level: "85%" },
    { icon: SiFirebase, name: "Firebase", level: "85%" },
    { icon: SiVercel, name: "Vercel", level: "50%" },
    { icon: FaNode, name: "Node JS", level: "50%" },
    { icon: SiExpress, name: "Express JS", level: "50%" },
    { icon: SiMongodb, name: "MongoDB", level: "50%" },
    { icon: FaBootstrap, name: "Bootstrap", level: "90%" },
  ];

  return (
    <div className="w-5/6 mx-auto">
      <div>
        <div className="text-center border-b border-white my-20">
          <h1 className="mt-10 text-5xl text-[#c4cfde] mb-5 font-extrabold">
            My Skills
          </h1>
          <div className="my-5 text-center">
            <span className="text-[#ff014f] font-extrabold text-4xl">
              <Typewriter
                options={{
                  strings: skills.map((skill) => skill.name),
                  autoStart: true,
                  loop: true,
                  cursor: " 🔥",
                }}
              />
            </span>
          </div>
          <p className="text-white mb-2">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center md:justify-between">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div className="text-center my-5" key={index}>
                  <motion.div
                    className="text-center bg-[#202327] shadow-2xl p-3 rounded-3xl"
                    whileHover={hoverAnimation}
                  >
                    <IconComponent className="text-9xl p-3 font-extrabold mx-auto text-[#c4cfde] duration-700" />
                    <h1 className="text-[#c4cfde] text-3xl font-extrabold">
                      {skill.level}
                    </h1>
                  </motion.div>
                  <h1 className="text-[#c4cfde] uppercase mt-2 md:text-3xl text-2xl font-extrabold">
                    {skill.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPrograges;
