import React, { useState } from "react";
import Logo from "/images/logo.svg";
import Menu from "/images/icon-menu.svg";
import avatar from "/images/image-avatar.png";
import cart from "/images/icon-cart.svg";


export default function Header() {
    const [menu, setMenu] = useState(false);
    function toggleMenu() {
        setMenu(!menu);
    }

    return (
        <>
            <div className=" flex justify-between items-center border-b-[1px] md:border-b-0 pb-10 md:pb-2">
                <div className="flex justify-center items-center gap-4 ">
                    <button onClick={toggleMenu} className="hidden md:flex">
                        <img src={Menu} alt="" />
                    </button>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div>
                        <ul className="md:hidden pl-6 flex justify-center items-center gap-4 ">
                            <li className=" hover:border-b-4 hover:border-b-orange ">Collection</li>
                            <li className=" hover:border-b-4 hover:border-b-orange ">Men</li>
                            <li className=" hover:border-b-4 hover:border-b-orange ">Women</li>
                            <li className=" hover:border-b-4 hover:border-b-orange ">About</li>
                            <li className=" hover:border-b-4 hover:border-b-orange ">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-6">
                    <div>
                        <button>
                            <img src={cart} alt="Cart" />
                        </button>
                    </div>
                    <img className=" cursor-pointer h-[40px] hover:border-2 hover:border-orange hover:rounded-full" src={avatar} alt="" />
                </div>
            </div>
        </>

    );
}

