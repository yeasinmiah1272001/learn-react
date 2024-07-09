


import { useEffect, useState } from "react";
import usePremium from "../../useAllData/usePremium/usePremium";
import { TbSettingsPin } from "react-icons/tb";
import AOS from "aos";

const Premium = () => {
    const [activeTab, setActiveTab] = useState("premium");
    const [premiumData] = usePremium();
    const premium = premiumData.filter((item) => item.category === "premium");
    const custom = premiumData.filter((item) => item.category === "custom");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="bg-[#0e1032] py-40">
            <h1   className="text-center lg:text-5xl text-white md:text-2xl">
                Check out our exciting premium plans!
            </h1>
            <div className="mt-10 text-center">
                <button
                    className={`h-14 w-40 border-4 ${activeTab === "premium" ? "border-[#499bae]" : "border-transparent"
                        } text-white text-xl hover:bg-[#499bae]`}
                    onClick={() => handleTabClick("premium")}
                >
                    Premium
                </button>
                <button
                    className={`h-14 w-40 border-4  ${activeTab === "custom" ? "border-[#499bae]" : "border-transparent"
                        } text-white text-xl hover:bg-[#499bae]`}
                    onClick={() => handleTabClick("custom")}
                >
                    Custom Bot
                </button>
            </div>
            {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-2 */}
            {activeTab === "premium" && (
                <div  data-aos="split-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="grid lg:grid-cols-2 md:grid-cols-2 lg:w-[1000px] gap-6 mt-11 lg:mx-auto ">
                    {premium.map((item, index) => (
                        <div key={index}>
                            <div className="p-4 bg-black lg:h-[1060px] text-white  rounded shadow sm:p-8 dark:border-gray-700">

                                <div className="flex gap-4 font-bold text-4xl mx-auto lg:ml-28 text-center mt-4 bg-black">
                                    <TbSettingsPin className="text-[#499bae] bg-black" />
                                    <h5 className="text-2xl font-medium text-white bg-black">{item.name}</h5>
                                </div>
                                <h1 className="text-xl lg:ml-44 mt-1 bg-black">{item.title}</h1>

                                {/* icon */}
                                <ul role="list" className="space-y-4 my-7 bg-black text-white">


                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Get access of MatchBox 2</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Get access of MatchBox 3</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Bypass Vote Require Commands</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Bypass Cooldown System</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">24/7 stay in voice channel!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Autoplay command!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Unlimited queue length!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Unlimited Youtube Links!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Unlimited spotify links!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Share your custom playlist</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Audio filters!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Custom role in our discord server!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Live chat directly to the developers!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Get support as soon as possible</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Live chat</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Private community</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Custom role in our discord server!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Private community</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">NO VOTE REQUIRED</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Discord access</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>


                                    <div className="divider divider-accent bg-black"></div>
                                    <h1 className="bg-black text-center text-4xl">{item.price} <sub className="text-xl bg-black">99 / Month</sub></h1>
                                </ul>




                                <a className="bg-black" href="https://www.patreon.com/login">   <button type="button" className="text-black bg-[#499bae] h-12 text-[18px] focus:ring-4 focus:outline-none hover:text-white  font-medium rounded-lg px-5 py-2.5 inline-flex justify-center w-36 lg:ml-32 text-center">
                                    Get Started
                                </button></a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Custom-Cart */}
            {activeTab === "custom" && (
                <div  data-aos="split-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="grid lg:grid-cols-2 md:grid-cols-2 lg:w-[1000px] gap-6 mt-11 lg:mx-auto">
                    {custom.map((item, index) => (
                        <div key={index}>


                            <div className="p-4 bg-black lg:h-[1060px] text-white  rounded shadow sm:p-8 dark:border-gray-700">

                                <div className="flex gap-4 font-bold text-4xl mx-auto lg:ml-20 text-center mt-4 bg-black">
                                    <TbSettingsPin className="text-[#499bae] bg-black" />
                                    <h5 className="text-2xl font-medium text-white bg-black">{item.name}</h5>
                                </div>
                                <h1 className="text-xl lg:ml-44 mt-1 bg-black">{item.title}</h1>

                                {/* icon */}
                                <ul role="list" className="space-y-4 my-7 bg-black text-white">


                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Get access of MatchBox 2</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Get access of MatchBox 3</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Bypass Vote Require Commands</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Bypass Cooldown System</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">24/7 stay in voice channel!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Autoplay command!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Unlimited queue length!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Unlimited Youtube Links!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Unlimited spotify links!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Share your custom playlist</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Audio filters!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Custom role in our discord server!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Live chat directly to the developers!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Get support as soon as possible</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Live chat</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Private community</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Custom role in our discord server!</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Private community</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">NO VOTE REQUIRED</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>
                                    <li className="flex items-center justify-between bg-black">
                                        <span className="text-base font-normal leading-tight text-gray-400 dark:text-gray-400 ms-3 bg-black">Discord access</span>
                                        <svg className="flex-shrink-0 w-4 h-4 text-[#499bae] dark:text-blue-500 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                    </li>



                                    <div className="divider divider-accent bg-black"></div>
                                    <h1 className="bg-black text-center text-4xl">{item.price} <sub className="text-xl bg-black">99 / Month</sub></h1>
                                </ul>




                                <a className="bg-black" href="https://www.patreon.com/login">   <button type="button" className="text-black bg-[#499bae] h-12 text-[18px] focus:ring-4 focus:outline-none hover:text-white  font-medium rounded-lg px-5 py-2.5 inline-flex justify-center w-36 lg:ml-32 text-center">
                                    Get Started
                                </button></a>
                            </div>


                        </div>
                    ))}
                </div>
            )}

            <div>
                <h1 className="text-white mt-16 lg:text-4xl text-center">
                    <i className="underline">What is Custom Bots?</i>
                    <br />
                    <span className="underline">ANS:</span> Custom Bots are the customizable premium versions of MatchBox
                    <br />
                    You can change every things in this bot!
                    <br />
                    Such as: <span className="underline">Avatar,</span> <span className="underline">Name,</span> <span className="underline">status,</span> <span className="underline">etc...</span>
                </h1>
            </div>
        </div>
    );
};

export default Premium;

