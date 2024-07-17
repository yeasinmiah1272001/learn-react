import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Skils = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="text-white text-center bg-gray-800 p-10 rounded-lg shadow-lg">
      <Marquee gradient={false}>
        <div className="text-4xl my-10 mx-8">
          <ul>
            {[
              "HTML-CSS",
              "JavaScript",
              "React",
              "TailwindCSS",
              "Bootstrap",
              "MaterialUI",
              "NodeJS",
              "ExpressJS",
              "MongoDB",
              "Firebase",
              "Vercel",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="inline-block px-6 py-3 mx-4 my-2 border-2 border-white rounded-lg text-text-1 font-medium hover:bg-white hover:text-red-500 transition-colors duration-300"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </Marquee>
    </div>
  );
};

export default Skils;
