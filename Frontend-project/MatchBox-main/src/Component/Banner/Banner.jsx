import { useEffect } from "react";
import img from "../../assets/matchbox.webp"
import AOS from "aos";
const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div>
            <div className="flex flex-col lg:flex-row bg-[#0e1032] py-52">
                <div className=" text-white py-8 px-6 mt-10 sm:py-10 sm:px-8 md:py-12 md:px-16 lg:px-20 xl:py-16 xl:px-24 lg:ml-[130px]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">We Care About Quality</h1>
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold lg:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">MATCHBOX</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-6 sm:mt-8 md:mt-10 lg:mt-10 font-semibold">Your Ultimate Music Bot</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-4 xl:mt-8">
                        <a href="https://discord.com/login"><button className="bg-[#ba325b] text-white text-lg sm:text-xl px-6 sm:px-8 h-12 sm:h-14 lg:w-52  rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ">Invite to Serber</button></a>
                        <button className="bg-[#ba325b] text-white text-lg sm:text-xl px-4 sm:px-6 h-12 sm:h-14 lg:w-40 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 sm:mt-0">Features</button>
                    </div>
                </div>
                <div className="mt-6">
                    <img   className="h-[300px] lg:h-[500px] lg:w-[590px]" src={img} alt="" />
                </div>
            </div>

        </div>

    );
};

export default Banner;












