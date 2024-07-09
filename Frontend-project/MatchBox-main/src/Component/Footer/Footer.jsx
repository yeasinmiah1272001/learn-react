import logo from "../../assets/matchbox.webp"
const Footer = () => {
    return (
        <div className="bg-[#0e1032]">
            <footer className="footer p-10 rounded-lg text-neutral-content">
                <nav className="text-xl lg:ml-28">
                    <header className="footer-title font-semibold text-xl text-[#499bae]">About Us</header>
                    <img className="h-[100px] w-[100px]" src={logo} alt="" />
                    <p className="text-[18px]">We Care About Music Quality. <br />Your Ultimate Music Bot</p>

                </nav>

                <nav className="lg:ml-[400px]">
                    <header className="footer-title text-xl text-[#499bae] font-semibold">Rules</header>
                    <a className="link link-hover text-[17px]">Service Terms</a>
                    <a className="link link-hover text-[17px]">Privacy Policy</a>
                    <a className="link link-hover text-[17px]">Refund Policy</a>
                </nav>
                <nav className="">
                    <header className="footer-title text-xl text-[#499bae] text-[15px] font-semibold">Support</header>
                    <a href="https://discord.com/invite/bTTMvXmmH8" className="link link-hover text-[17px]">Supports</a>
                    <a className="link link-hover text-[17px]">Contact Us</a>
                </nav>
            </footer>
            <div className="divider divider-accent"></div>
            <span className="block text-xl text-white sm:text-center text-[14px] pb-6 p-2">© Copyright 2024 Matchbox All Rights Reserved.</span>
        </div>
    );
};

export default Footer;