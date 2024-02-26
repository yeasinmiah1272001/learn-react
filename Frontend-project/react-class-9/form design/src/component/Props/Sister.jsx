import React, { useContext } from 'react';
import { RingContext } from './Dada';

const Sister = () => {
  const gift = useContext(RingContext)
       return (
         <div className="border-2 border-yellow-400 p-6">
           <h1>Sister</h1>
           <p>Dada gift :{gift}</p>
         </div>
       );
};

export default Sister;