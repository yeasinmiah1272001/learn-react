import React from 'react';

const Bottle = ({ bottle, handleBottle }) => {
  // console.log(bottle)
  const { name, price, img } = bottle;
  return (
    <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden">
      <h2 className=" font-bold mb-2 text-center">{name}</h2>

      <img
        src={img}
        alt={name}
        className="w-28 h-32 object-cover object-center mx-auto"
      />
      <div className="p-4">
        <p className="text-gray-600 text-center">price: ${price}</p>
        <button
          onClick={() => handleBottle(bottle)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Bottle;