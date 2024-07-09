import Marquee from "react-fast-marquee";

const Skils = () => {
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
              <li
                key={index}
                className="inline-block px-6 py-3 mx-4 my-2 border-2 border-white rounded-lg text-text-1 font-medium hover:bg-white hover:text-red-500 transition-colors duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Marquee>
    </div>
  );
};

export default Skils;
