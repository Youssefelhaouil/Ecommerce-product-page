import React from 'react';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";

export default function ProductBox({ selectedImageIndex,  nextImage, prevImage, images,setLightBox }) {
    return (
        <><div className='relative md:hidden z-10'>
            <div className="fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-60 text-white  ">
                <button onClick={()=> setLightBox(false)}> <IoIosClose className='h-20 w-12 cursor-pointer absolute right-[20%] top-4 hover:text-orange '  /> </button>
                <div className='grid place-items-center h-full  '>
                    <img className='rounded-xl h-[550px] w-[550px] ' src={images[selectedImageIndex].full} alt="Selected Product" />
                    <button onClick={prevImage}  ><GrPrevious className='  absolute top-1/2 left-4 -translate-y-1 bg-white bg-opacity-85 h-10 w-10 text-gray-800 hover:text-orange  rounded-full cursor-pointer' /></button>
                    <button onClick={nextImage}  ><GrNext className='  absolute top-1/2 right-4 -translate-y-1 bg-white bg-opacity-85 h-10 w-10 text-gray-800 hover:text-orange  rounded-full cursor-pointer' /></button>
                </div>
            </div>
        </div>
        </>
    )
}