import React, { useState } from 'react';
import image_1_thumbnail from '/images/image-product-1-thumbnail.jpg';
import image_2_thumbnail from '/images/image-product-2-thumbnail.jpg';
import image_3_thumbnail from '/images/image-product-3-thumbnail.jpg';
import image_4_thumbnail from '/images/image-product-4-thumbnail.jpg';
import image_1 from '/images/image-product-1.jpg';
import image_2 from '/images/image-product-2.jpg';
import image_3 from '/images/image-product-3.jpg';
import image_4 from '/images/image-product-4.jpg';
import iconPrev from '/images/icon-previous.svg';
import iconNext from '/images/icon-next.svg';

export default function Product() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        { thumbnail: image_1_thumbnail, full: image_1 },
        { thumbnail: image_2_thumbnail, full: image_2 },
        { thumbnail: image_3_thumbnail, full: image_3 },
        { thumbnail: image_4_thumbnail, full: image_4 }
    ];

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1  : prevIndex - 1));
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className='grid grid-rows-[80%_20%] gap-y-4 px-4 md:grid-rows-1 pt-[-20px] '>
                <div className='relative h-full w-full'>
                    <img className='rounded-xl' src={images[selectedImageIndex].full} alt="Selected Product" />
                    <img onClick={prevImage} className='hidden  md:block md:absolute md:top-1/2 md:left-4 md:-translate-y-1 md:bg-white md:h-6 md:w-6 md:rounded-full md:cursor-pointer' src={iconPrev} alt="Previous" />
                    <img onClick={nextImage} className='hidden md:block md:absolute md:top-1/2 md:right-4 md:-translate-y-1 md:bg-white md:h-6 md:w-6 md:rounded-full md:cursor-pointer' src={iconNext} alt="Next" />
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
                </div>
            </div>
        </>
    );
}
