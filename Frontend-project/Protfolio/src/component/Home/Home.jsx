import Bannar from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
                     <Contact></Contact>
                     <Footer></Footer>
                     
              </div>
       );
};

export default Home;