
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneDetail from './PhoneDetail';


const PhoneDetails = () => {
       const [phone, setPhone] = useState({})
       const phoneDetails = useLoaderData()
       const {id} = useParams()

       useEffect(() =>{
              const findCard = phoneDetails.find((card) => card.id ==id)
              setPhone(findCard)
              //       console.log(findCard);
       },[id, phoneDetails])
 

       return (
              <div>
                     <PhoneDetail phone={phone}></PhoneDetail>
                     
                     
              </div>
       );
};

export default PhoneDetails;