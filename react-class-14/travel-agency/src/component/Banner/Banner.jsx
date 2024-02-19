import banner from "../../assets/images/logo/banner.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-opacity-80 mb-8">
            Discover new and featured properties in your area.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <input
              className="bg-white text-gray-800 placeholder-gray-600 rounded-md py-2 px-4 mb-4 md:mb-0 w-full md:w-auto"
              type="text"
              placeholder="Enter City/Street"
            />
            <input
              className="bg-white text-gray-800 placeholder-gray-600 rounded-md py-2 px-4 mb-4 md:mb-0 w-full md:w-auto"
              type="text"
              placeholder="Property Type"
            />
            <input
              className="bg-white text-gray-800 placeholder-gray-600 rounded-md py-2 px-4 mb-4 md:mb-0 w-full md:w-auto"
              type="text"
              placeholder="Price Range"
            />
            <button className="bg-blue-600 text-white rounded-md py-2 px-6 hover:bg-blue-700 transition duration-300 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
