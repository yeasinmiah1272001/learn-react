
import Banner from "../Banner/Banner";
import BrandName from "../BrandName/BrandName";
import Testimonial from "../Testimonial/Testimonial";
import HeroContent from "../HeroContent/HeroContent";
import { useLoaderData } from "react-router-dom";



const Home = () => {
  const brand = useLoaderData()

 
   
       return (
         <div>
           <Banner></Banner>
           <BrandName brand={brand}></BrandName>
           <HeroContent></HeroContent>
           <Testimonial></Testimonial>
         </div>
       );
};

export default Home;