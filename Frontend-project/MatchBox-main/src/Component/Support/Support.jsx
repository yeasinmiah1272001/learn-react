import AOS from "aos";
import { useEffect } from "react";
import { BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Support = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="bg-[#0e1032]">
            <section id="about">
                <div className="py-80">
                    <div className="">
                        <div className=" lg:flex gap-10 text-center ml-[50px] lg:ml-[550px]">

                            <article   className="border-2 border-white h-64 w-60 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                <div className=" mt-20 text-white ">
                                    <MdEmail className="text-white lg:ml-24 ml-24 h-10 w-12" />
                                    <h5 className="mt-4 uppercase text-xl">Send a Message</h5>
                                    <h1 className="mt-1">support@matchboxyz</h1>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
                                </div>

                            </article>

                            <a href="https://discord.com/invite/bTTMvXmmH8">
                                <article   className="border-2 border-white h-64 w-60 rounded-xl     relative max-w-xs overflow-hidden bg-cover bg-no-repeat">

                                    <div className=" mt-20 text-white">
                                        <div>
                                            <BsDiscord className="text-white md:ml-20 lg:ml-24 ml-24 h-10 w-12" />
                                        </div>
                                        <h1 className="uppercase mt-4 text-xl">Support</h1>
                                        <h1 className="mt-1">Discort Server</h1>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
                                    </div>
                                </article>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Support;