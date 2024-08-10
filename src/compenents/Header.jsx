import React, { useState } from "react";
import Logo from "/images/logo.svg";
import MenuIcon from "/images/icon-menu.svg";
import closeIcon from "/images/icon-close.svg";
import avatar from "/images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart.jsx";
import NavLinks from "./Nav.jsx";


export default function Header({ menu, toggleMenu,cartItems,setCartItems, cart, toggleCart }) {


    return (
        <>
            <div className={`relative px-0 ml-3 flex justify-between md:left-0  border-b-[1px] md:border-b-0 pb-10 md:pb-2  md:mx-4  `}>
                <div className={`relative flex justify-start items-center gap-4   
                    ${menu ? "md:before:content-['']  md:before:fixed md:before:top-0 md:left-0 md:right-0 md:bottom-0   md:before:h-[100%] md:before:z-10 md:before:w-[100%] md:before:bg-[rgba(0,0,0,0.72)]"
                        : ""}`} >
                    <div className={`hidden md:absolute md:left-0 md:top-0 md:pt-1  md:flex md:flex-col md:gap-10 z-10
                        ${menu ? "bg-white md:h-screen md:w-[180%] " : ""}`}>
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

                    <div className="relative  flex flex-col gap-y-4">
                        {cartItems > 0 && <p className="absolute right-[-10px] top-[-10px] md:top-[-8px] font-bold text-[10px] text-white bg-orange h-4 w-4  rounded-full text-center">{cartItems}</p>}
                        <button onClick={toggleCart}>
                            <AiOutlineShoppingCart className="text-center text-[25px] text-gray-500 hover:text-gray-950"  />
                        </button>

                    </div>


                    <img className=" cursor-pointer h-[40px] hover:border-2 hover:border-orange hover:rounded-full" src={avatar} alt="" />
                </div>
                {cart && <Cart cartItems={cartItems}
                    setCartItems={setCartItems}  ></Cart>}

            </div>
        </>

    );
}

