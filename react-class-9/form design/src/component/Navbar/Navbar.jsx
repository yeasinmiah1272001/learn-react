import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
       return (
         <div>
           <ul className="flex justify-around">
             <Link to="/form1">From1</Link>
             <Link to="/form2">From2</Link>
             <Link>From3</Link>
             <Link>From4</Link>
             <Link to="props">PropsDelling</Link>
           </ul>
         </div>
       );
};

export default Navbar;