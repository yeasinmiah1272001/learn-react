import About from "../About/About";
import AllTeacher from "../AllTeacher/AllTeacher";
import BreakingNews from "../BreakingNews/BreakingNews";
import National from "../National/National";
import Rostopoti from "../Rostopoti/Rostopoti";
import Slider from "../Slider/Slider";
import TwoTeacher from "../TwoTeacher/TwoTeacher";


const Home = () => {
       return (
              <div>
                    <Slider></Slider>
                    <BreakingNews></BreakingNews>
                    <About></About>
                    <National></National>
                    <Rostopoti></Rostopoti>
                    <TwoTeacher></TwoTeacher>
                    <AllTeacher></AllTeacher>
                     
              </div>
       );
};

export default Home;