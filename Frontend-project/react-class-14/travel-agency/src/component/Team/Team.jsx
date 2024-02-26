import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const Team = () => {
        const [team, setTeam] = useState([]);

        useEffect(() => {
          fetch("team.json")
            .then((res) => res.json())
            .then((data) => setTeam(data));
        }, []);

       return (
         <div className="mt-9">
           <div className="text-center justify-center">
             <h1 className="text-4xl font-bold">Our Featured Agents</h1>
             <p className="my-2 text-black">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut <br /> labore et dolore magna
               aliqua. Ut enim ad minim veniam.
             </p>
           </div>
           <div className="grid grid-cols-1  lg:grid-cols-3 mx-10 gap-8 md:grid-cols-2  px-4 mt-6">
             {team.map((team) => (
               <TeamCard key={team.id} team={team} />
             ))}
           </div>
         </div>
       );
};

export default Team;