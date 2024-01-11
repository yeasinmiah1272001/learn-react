import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
  const [bottle, setBottle] = useState([]);
  const [clickBottle, setClickBottle] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottle(data));
  }, []);

  const handleBottle = (bottle) => {
    const newBottle = [...clickBottle, bottle];
    setClickBottle(newBottle);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl text-red-600">
          Memorable WaterBottle
        </h1>
        <h1 className="text-center text-2xl text-red-600">
          Bottles here: {bottle.length}
        </h1>
      </div>
      <div>
        <h1 className="text-center text-2xl text-red-600">
          Bottle-Available : {clickBottle.length}
        </h1>
        {clickBottle.map((item) => (
          <div key={item.id} >
            <img className='w-20' src={item.img} alt="" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-10 mt-12">
        {bottle.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleBottle={handleBottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;