const PricingCard = ({ data, handleShowName }) => {
  const { cover, name, price, type } = data;
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-md dark:bg-neutral-700">
      <img
        className="h-48 w-full object-cover rounded-t-lg"
        src={cover}
        alt=""
      />
      <div className="p-4">
        <h5 className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {type}
        </p>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          {price}
        </p>
        <button
          onClick={() =>handleShowName(data)}
          className="bg-primary text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
