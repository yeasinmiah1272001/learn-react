import AOS from "aos";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAllData from "../../useAllData/useAllData";
import { FaFilter, FaMusic, FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiGroupFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { GiRoyalLove } from "react-icons/gi";
import { useEffect, useState } from "react";
import { FaDiamond } from "react-icons/fa6";


const Commands = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [data] = useAllData();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/commands.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchValue = form.search.value.toLowerCase();
        const filteredCards = data.filter((item) =>
            item.name.toLowerCase().includes(searchValue)
        );

        setCards(filteredCards);
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-52 bg-[#0e1032]">
            <div   className="text-white">
                <h1 className="text-3xl font-semibold">MatchBox Commands</h1>
                <p>Embark on a melodic adventure with MatchBox, your ultimate guide to an immersive and harmonious musical journey.</p>
            </div>

            <div  className="text-white gap-4 mt-20">
                <div className="border-none">
                    <Tabs className={"border-none"} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <div   className="flex flex-wrap items-center pb-5 bg-[#0e1032]">
                                <TbWorld />
                                <Tab>All</Tab>
                                <FaMusic />
                                <Tab>Music</Tab>
                                <FaFilter />
                                <Tab>Filter</Tab>
                                <TfiMenuAlt />
                                <Tab>Utility</Tab>
                                <RiGroupFill />
                                <Tab>Admin</Tab>
                                <IoMdSettings />
                                <Tab>Premium</Tab>
                                <GiRoyalLove />
                                <Tab>Playlist</Tab>
                                <div className="w-full sm:w-auto">
                                    <form onSubmit={handleSearch}>
                                        <label className="input ml-4 mb-1 border-gray-500 bg-[#292c2e]  border border-transparent hover:border-[#499bae] h-10 rounded-full flex items-center gap-2">
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Search..."
                                                className=""
                                            />
                                            <button
                                                type="submit"
                                                className="  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                <FaSearch></FaSearch>
                                            </button>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </TabList>

                        {/* Render TabPanels */}
                        {[
                            "All",
                            "Music",
                            "Filter",
                            "Utility",
                            "Admin",
                            "Premium",
                            "Playlist",
                        ].map((category, index) => (
                            <TabPanel key={index}>
                                {cards
                                    .filter(
                                        (item) =>
                                            category === "All" ||
                                            item.category === category.toLowerCase()
                                    )
                                    .map((item, index) => (
                                        <div
                                            key={index}
                                            className="mt-5 p-8 border border-transparent  hover:border-[#499bae]"
                                        >
                                            <div   className="flex items-center">
                                                <FaDiamond className="w-20 h-8 text-gray-600" />
                                                <div className="space-y-2">
                                                    <h1 className="text-2xl">{item.name}</h1>
                                                    <p className="text-[17px]">{item.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Commands;
