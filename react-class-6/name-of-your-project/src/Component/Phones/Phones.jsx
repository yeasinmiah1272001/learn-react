import React from 'react';
import PhoneCard from './PhoneCard';

const Phones = ({phones}) => {
       return (                 
         <div>
           <h1 className="text-center text-xl">Phone Categories</h1>
           <div className='grid grid-cols-4 gap-6'>
             {phones.map((phone) => (
               <PhoneCard key={phone.id} phone={phone}></PhoneCard>
             ))}
           </div>
         </div>
       );
};

export default Phones;