import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portfolio1 from "../../assets/protfolio/car-doctors.png";

const Protfolio = () => {
  const [protfolio, setProtfolio] = useState([]);

  useEffect(() => {
    fetch("/protfolio.json")
      .then((res) => res.json())
      .then((data) => setProtfolio(data));
  }, []);

  return (
    <div className="w-5/6 mx-auto">
      <div className="text-center my-20">
        <motion.span
          className="my-2 md:text-xl text-[11px] md:mx-4 font-thin border-[#ff014f] border rounded-sm md:px-5 py-2 text-[#ff014f]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </motion.span>
        <motion.h1
          className="border-b border-white pb-5 mt-10 text-5xl text-[#c4cfde] mb-10 font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Portfolio
        </motion.h1>
      </div>
      <div className="grid md:grid-cols-3 items-center gap-8">
        {protfolio.map((item) => (
          <motion.div
            key={item.id}
            className="border p-5 shadow-2xl rounded-lg border-[#ff014f] bg-[#202327] hover:bg-[#010101] transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <div className="overflow-hidden rounded-t-lg h-60">
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover object-top rounded-t-2xl"
                initial={{ y: 0 }}
                whileHover={{ y: -80 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Link to={item.liveLink}>
                  <motion.button
                    className="text-white border border-[#ff014f] rounded-full px-4 py-2 hover:bg-[#ff014f] transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Demo
                  </motion.button>
                </Link>
                <Link to={item.githubLink}>
                  <motion.button
                    className="text-white border border-[#ff014f] rounded-full px-4 py-2 hover:bg-[#ff014f] transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    GitHub
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Protfolio;
