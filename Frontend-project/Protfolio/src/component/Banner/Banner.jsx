import { Link } from "react-router-dom";
import yeasin from "../../assets/yeasin.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Bannar = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="w-5/6 mx-auto bg-slate-700 flex justify-center">
      <div className="md:flex items-center md:justify-between text-[#dddddd]">
        <motion.div
          className="space-y-5 my-20 md:w-1/2 items-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-extrabold tracking-widest text-4xl text-[#c4cfde]">
            Hello👋,
            <span className="text-[#ff014f]">
              <Typewriter
                options={{
                  strings: ["I`m Yeasin Ahmed", "Frontent Developer"],
                  autoStart: true,
                  loop: true,
                  cursor: " ",
                }}
              />
            </span>
          </h1>
          <h3 className="md:text-5xl font-extrabold text-[#8954f7] tracking-wid">
            A Programmer Specializing in Web Development.
          </h3>
          <p className="text-2xl">
            I break down complex user experience problems to create integrity
            solutions that connect billions of people
          </p>
          <motion.div
            className="flex sm:flex-row items-center gap-5"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://i.ibb.co/QvpvF0R/resume.jpg"
              download="https://i.ibb.co/QvpvF0R/resume.jpg"
            >
              <button className="my-3 px-8 hover:bg-[#8954f7] text-[#8954f7] hover:text-white duration-500 py-2 text-xl rounded-3xl border border-[#8954f7]">
                Download CV
              </button>
            </a>
            <div className="space-x-4">
              <Link
                to="https://github.com/yeasinmiah1272001?tab=repositories"
                target="blank"
              >
                <button className="p-2 rounded-full hover:bg-[#8954f7] text-[#8954f7] border-[#8954f7] hover:text-white duration-500 border">
                  <FaGithub className="text-2xl" />
                </button>
              </Link>
              <a
                href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
                target="blank"
              >
                <button className="p-2 rounded-full hover:bg-[#8954f7] text-[#8954f7] border-[#8954f7] hover:text-white duration-500 border">
                  <FaLinkedinIn className="text-2xl" />
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.img
          src={yeasin}
          className="w-[350px] rounded-full hover:rotate-[5deg] duration-300 hover:border-8 border-[#8954f7] shadow-2xl shadow-indigo-800 hover:grayscale"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </div>
  );
};

export default Bannar;
