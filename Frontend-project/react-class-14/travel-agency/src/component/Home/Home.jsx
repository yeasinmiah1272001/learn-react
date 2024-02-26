import Ask from "../Ask/Ask";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Locations from "../Locations/Locations";
import Package from "../Package/Package";
import PropertyLists from "../PropertyLists/PropertyLists";
import Review from "../Review/Review";
import Team from "../Team/Team";


const Home = () => {
       return (
              <div>
                     <Banner></Banner>
                     <Feature></Feature>
                     <PropertyLists></PropertyLists>
                     <Review></Review>
                     <Locations></Locations>
                     <Team></Team>
                     <Package></Package>
                     <Ask></Ask>
                     <Footer></Footer>
                     
              </div>
       );
};

export default Home;