import { useState } from "react";

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full mx-auto h-22 px-10 md:px-4 flex justify-between items-center md:flex md:justify-between bg-white sticky top-0 z-50">

                <div className="flex items-center justify-start md:hidden p-5 shrink-0">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <img src="/image/hamburger.png" alt="" className="h-8 w-8 object-contain" />
                    </button>
                </div>
                <div className="flex items-center justify-center md:justify-start justify-self-center md:justify-self-auto shrink-0 ">
                    <img src="/image/logo-text.png" alt="" className="h-8 w-auto" />
                </div>

                    <ul className="hidden md:flex flex-row flex-1 justify-center gap-5 text-md list-none items-center">
                        <li className="text-pink-500">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>


                <div className="flex gap-5 items-center justify-self-end whitespace-nowrap">
                    <button className="text-gray-500 whitespace-nowrap shrink-0">Sign In</button>
                    <button className="bg-[#DB2777] text-white rounded-full px-7 py-3 hover:bg-pink-500 cursor-pointer">
                        Sign Up</button>
                </div>
                {isOpen && (
                    <div className="md:hidden absolute flex-col text-xl top-24 left-0 w-48 bg-white text-left">
                        <ul className="flex gap-5 flex-col px-6 py-5 list-none">
                            <li >Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                )}
        </div>
    );
};

export default Navbar;