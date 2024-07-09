import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" border-b ">
      <div className="flex  justify-between w-5/6 mx-auto  text-white items-center h-20">
        <div className=" text-white flex items-center">
          <h1 className="">Yeasin Ahmed</h1>
        </div>
        <ul className="md:flex hidden   md:justify-between md:gap-10 gap-2  items-center ">
          <Link>
            {" "}
            <li>Home</li>
          </Link>
          <Link>
            {" "}
            <li>Abouts</li>
          </Link>
          <Link to="#skilla">
            <li>Skills</li>
          </Link>
          <Link>
            {" "}
            <li>Projects</li>
          </Link>
          <Link>
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


