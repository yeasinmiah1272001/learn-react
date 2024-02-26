import { IoCall } from "react-icons/io5";

const TeamCard = ({ team }) => {
  const { cover, name, address } = team;
  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     

      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
          src={cover}
          alt="Bonnie image"
        />
        <h5 className="mb-1 font-medium text-gray-900 dark:text-white">
          {address}
        </h5>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex justify-between gap-12 mt-4 md:mt-6">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Message
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <IoCall />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
