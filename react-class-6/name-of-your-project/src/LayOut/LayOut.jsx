import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';


const LayOut = () => {
       return (
              <div className=''>
              
                     <Navbar></Navbar>
                     <Outlet></Outlet>
                     
              </div>
       );
};

export default LayOut;