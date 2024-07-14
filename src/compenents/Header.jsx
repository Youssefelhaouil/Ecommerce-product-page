import React, { useState } from "react";
import Logo from "/images/logo.svg";
import MenuIcon from "/images/icon-menu.svg";
import closeIcon from "/images/icon-close.svg";
import avatar from "/images/image-avatar.png";
import cartIcon from "/images/icon-cart.svg";
import Cart from "./Cart.jsx";
import NavLinks from "./Nav.jsx";


export default function Header({menu,toggleMenu , cart,toggleCart}) {
    

    return (
        <>
            <div className={`relative px-8   flex justify-between  border-b-[1px] md:border-b-0 pb-10 md:pb-2  `}>
                <div className={`relative flex justify-start items-center gap-4 
                    ${menu ? "md:before:content-['']  md:before:fixed md:before:top-0 md:left-0 md:right-0 md:bottom-0   md:before:h-[100%] md:before:z-1 md:before:w-[100%] md:before:bg-[rgba(0,0,0,0.72)]"
                    : ""}`} >
                    <div className={`hidden md:absolute md:left-0 md:top-0 md:pt-1 md:flex md:flex-col md:gap-10 md:h-screen md:w-[120%] z-10 
                        ${menu ? "bg-white  ":""}`}>
                        <button onClick={toggleMenu}>
                            {!menu ? <img src={MenuIcon} alt="" className="pt-3" /> : <img src={closeIcon} alt="" className="pt-3" />}
                        </button>
                        <div>
                            {
                                menu && <NavLinks></NavLinks>
                            }
                        </div>

                    </div>
                    <div className="relative md:left-8">
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

                    <div className="relative flex flex-col gap-y-4">
                        <button onClick={toggleCart}>
                            <img src={cartIcon} alt="Cart" />
                        </button>

                    </div>


                    <img className=" cursor-pointer h-[40px] hover:border-2 hover:border-orange hover:rounded-full" src={avatar} alt="" />
                </div>
                {cart && <Cart></Cart>}

            </div>
        </>

    );
}

