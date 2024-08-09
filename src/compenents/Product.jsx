import React, { useState } from 'react';
import image_1_thumbnail from '/images/image-product-1-thumbnail.jpg';
import image_2_thumbnail from '/images/image-product-2-thumbnail.jpg';
import image_3_thumbnail from '/images/image-product-3-thumbnail.jpg';
import image_4_thumbnail from '/images/image-product-4-thumbnail.jpg';
import image_1 from '/images/image-product-1.jpg';
import image_2 from '/images/image-product-2.jpg';
import image_3 from '/images/image-product-3.jpg';
import image_4 from '/images/image-product-4.jpg';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import LightBox from "./LightBox.jsx"

export default function Product() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [lightBox, setLightBox] = useState(false)

    const images = [
        { thumbnail: image_1_thumbnail, full: image_1 },
        { thumbnail: image_2_thumbnail, full: image_2 },
        { thumbnail: image_3_thumbnail, full: image_3 },
        { thumbnail: image_4_thumbnail, full: image_4 }
    ];

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className='grid grid-rows-[80%_20%] gap-y-4 px-4 md:grid-rows-1 mt-[-30px] md:mt-[-70px] pb-5'>
                <div className='relative h-full w-full'>
                    <img onClick={() => setLightBox(true)} className='rounded-xl cursor-pointer' src={images[selectedImageIndex].full} alt="Selected Product" />
                    <button onClick={prevImage}  ><GrPrevious className=' hidden md:block md:absolute md:top-1/2 md:left-4 md:-translate-y-1 md:bg-white md:h-10 md:w-10 md:text-gray-800 md:hover:text-orange  md:rounded-full md:cursor-pointer' /></button>
                    <button onClick={nextImage}  ><GrNext className=' hidden md:block md:absolute md:top-1/2 md:right-4 md:-translate-y-1 md:bg-white md:h-10 md:w-10 md:text-gray-800 md:hover:text-orange  md:rounded-full md:cursor-pointer' /></button>
                </div>
                <div className='grid grid-cols-4 gap-x-4 md:hidden'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                            className={`cursor-pointer rounded-xl hover:opacity-75 ${selectedImageIndex === index ? 'border-4 border-orange opacity-65' : ''}`}
                            onClick={() => setSelectedImageIndex(index)}
                        />
                    ))}
                    {
                        lightBox &&
                        <LightBox setLightBox={setLightBox}  selectedImageIndex={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} nextImage={nextImage} prevImage={prevImage} images={images}  ></LightBox>
                    }
                </div>
            </div>






        </>
    );
}
