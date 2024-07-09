import img from "../../assets/man.webp"
import support from "../../assets/support.png"
import { Link } from "react-router-dom";


const WhyMatchBox = () => {
    return (

        <div className=" bg-[#0e1032] w-full">

            <div   className="text-center text-white ">
                <h1 className="text-4xl font-bold">Elevate your auditory journey
                    <br />
                    to unparalleled heights !</h1>
                <h1 className="mt-8 text-xl">Immerse yourself in the world of music on Discord with your friends! Enhance the
                    <br />
                    listening experience with audio filters, personalized playlists, autoplay, 24/7 support,
                    <br />
                    and a plethora of other features! </h1>
                <a href="https://discord.com/login"><button className="bg-[#ba325b]  text-white lg:text-xl mt-6  focus:outline-none focus:ring-2 focus:ring-blue-500 lg:h-12 h-10 lg:w-80 md:w-52 p-2 rounded-lg transition-all duration-300 ">Add MatchBox to Your Server!</button></a>
            </div>

            <div   className="text-center text-white mt-36">
                <h1 className="text-3xl font-bold"> Why MatchBox? </h1>
                <h1 className="mt-4 text-xl"> MatchBox is one of the best discord music bot that supports Youtube, spotify, deezer, soundcloud
                    <br />
                    and many more!</h1>
                <h1 className="text-xl">You can also create your own custom playlist with MatchBox!</h1>
            </div>

            <div className="flex flex-col lg:flex-row rounded-lg mt-44">
                <div   className=" text-white py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 xl:py-12 xl:px-20">
                    <h1 className="text-5xl font-bold">Curious About Even More Features ?</h1>
                    <p className="text-xl mt-8">Unlock a world of premium features and elevate your Discord
                        <br /> experience by subscribing to one of our premium plans. Immerse
                        <br /> yourself in an enhanced and enriched journey with exclusive
                        <br /> functionalities!</p>


                    <div className="grid lg:grid-cols-2 w-[390px] gap-4 mt-8">
                        {/* cart 1 */}
                        <Link to="/premium">
                            <div className="text-blue-700 hover:text-white border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800  w-44 h-28 shadow dark:bg-gray-800 ">
                                <img className="h-10 text-center mx-auto text-white" src={support} alt="" />
                                <div className="">
                                    <a href="#">
                                        <h5 className="text-[14px] text-center tracking-tight text-white mt-2">24/7 support & Help</h5>
                                    </a>
                                </div>
                            </div>
                        </Link>
                        {/* cart 2 */}
                        <Link to="/premium">
                            <div className="text-blue-700 hover:text-white border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800  w-44 h-28 shadow dark:bg-gray-800 ">
                                <img className="h-10 text-center mx-auto text-white" src={support} alt="" />
                                <div className="">
                                    <a href="#">
                                        <h5 className="text-[14px] text-center tracking-tight text-white mt-2">24/7 support & Help</h5>
                                    </a>
                                </div>
                            </div>
                        </Link>
                        {/* cart 3 */}
                        <Link to="/premium">
                            <div className="text-blue-700 hover:text-white border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800  w-44 h-28 shadow dark:bg-gray-800 ">
                                <img className="h-10 text-center mx-auto text-white" src={support} alt="" />
                                <div className="">
                                    <a href="#">
                                        <h5 className="text-[14px] text-center tracking-tight text-white mt-2">24/7 support & Help</h5>
                                    </a>
                                </div>
                            </div>
                        </Link>
                        {/* cart 4 */}
                        <Link to="/premium">
                            <div className="text-blue-700 hover:text-white border border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800  w-44 h-28 shadow dark:bg-gray-800 ">
                                <img className="h-10 text-center mx-auto text-white" src={support} alt="" />
                                <div className="">
                                    <a href="#">
                                        <h5 className="text-[14px] text-center tracking-tight text-white mt-2">24/7 support & Help</h5>
                                    </a>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div></div>

                    <Link to="/premium"><button className="bg-[#ba325b] text-white text-xl mt-8  focus:outline-none focus:ring-2 focus:ring-blue-500 lg:h-12 h-10 lg:w-60 md:w-52 p-2 rounded-lg transition-all duration-300 ">Check Out Premium</button></Link>
                </div>
                <div className="pr-4 lg:pr-8">
                    <img className="h-[530px] w-[550px]" src={img} alt="" />
                </div>
            </div>
        </div>

    );
};

export default WhyMatchBox;
