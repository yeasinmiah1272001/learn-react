import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="mt-10">
      <Marquee gradient={true}>
        <div className="flex items-center space-x-10 px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full shadow-lg">
          <h1 className="text-xl font-bold">Welcome to Katkhal High School</h1>
          <h1 className="text-lg">
            Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today...
          </h1>
          <h1 className="text-lg">
            Empowering minds, shaping futures—where knowledge meets inspiration.
          </h1>
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
