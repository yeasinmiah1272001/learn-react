import { Link } from "react-router-dom";

const Location = ({ location }) => {
  const { name, cover, id } = location;

  return (
    <Link to={`/locations/${id}`}>
      <div className="relative rounded-lg bg-white shadow-md overflow-hidden">
        <div className="h-64 overflow-hidden relative">
          <img className="w-full h-full object-cover" src={cover} alt={name} />
          <h1 className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white bg-opacity-75 text-lg font-semibold text-gray-800">
            {name}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Location;
