import { Link } from "react-router-dom";
import logo from "../../assets/matchbox.webp"
const Header = () => {

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <a href="/"><li><>invite</></li></a>
        <li><Link to="/premium">premium</Link></li>
        <li><Link to="/commands">commands</Link></li>
        <li><Link to="/support">support</Link></li>
    </>

    return (

        <div className="bg-gradient-to-br from-[#0a2149] h-28 fixed z-10 w-full  to-[#ab2753]">
            <div className="navbar rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 bg-white text-black py-5 ">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img className="h-24 w-28" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden text-white lg:flex">
                    <ul className=" flex uppercase px-1 gap-16 text-[16px] text-xl">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://discord.com/login"><button className=" bg-[#ba325b] text-white text-xl h-12 w-36 rounded-lg">Get Started</button></a>
                </div>
            </div>
        </div>

    );
};

export default Header;