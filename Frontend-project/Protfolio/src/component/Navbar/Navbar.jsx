import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b">
      <div className="flex justify-between w-5/6 mx-auto text-white items-center h-20">
        <div className="text-white flex items-center">
          <h1>Yeasin Ahmed</h1>
        </div>
        <ul className="md:flex hidden md:justify-between md:gap-10 gap-2 items-center">
          <Link to="/">
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Home
            </motion.li>
          </Link>
          <Link to="/banner">
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              About
            </motion.li>
          </Link>
          <Link to="/skill">
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Skills
            </motion.li>
          </Link>
          <Link to="/protfolio">
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Projects
            </motion.li>
          </Link>
          <Link to="/contact">
            <motion.li
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Contact
            </motion.li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
