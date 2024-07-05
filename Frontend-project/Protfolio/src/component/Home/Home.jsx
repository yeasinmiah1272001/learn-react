import Bannar from "../Banner/Banner";
import SkillsPrograges from "../SkillsPrograges/SkillsPrograges";
import Skils from "../Skils/Skils";
// import What from "../What/What";
import Work from "../Work/Work";
import Protfolio from './../Protfolio/Protfolio';


const Home = () => {
       return (
              <div>
                     <Bannar></Bannar>
                     <Skils></Skils>
                     {/* <What></What> */}
                     <Work></Work>
                     <SkillsPrograges></SkillsPrograges>
                     <Protfolio></Protfolio>
                     
              </div>
       );
};

export default Home;