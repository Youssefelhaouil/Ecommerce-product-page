import React, { useState } from 'react';
import image_1_thumbnail from '/images/image-product-1-thumbnail.jpg';
import image_2_thumbnail from '/images/image-product-2-thumbnail.jpg';
import image_3_thumbnail from '/images/image-product-3-thumbnail.jpg';
import image_4_thumbnail from '/images/image-product-4-thumbnail.jpg';
import image_1 from '/images/image-product-1.jpg';
import image_2 from '/images/image-product-2.jpg';
import image_3 from '/images/image-product-3.jpg';
import image_4 from '/images/image-product-4.jpg';


export default function Product() {
    const [selectedImage, setSelectedImage] = useState(image_1);

    const images = [
        { thumbnail: image_1_thumbnail, full: image_1 },
        { thumbnail: image_2_thumbnail, full: image_2 },
        { thumbnail: image_3_thumbnail, full: image_3 },
        { thumbnail: image_4_thumbnail, full: image_4 }
    ];

    return (
        <>
            <div className='grid grid-rows-[80%_20%] gap-y-4 px-4 md:grid-rows-1 pt-[-20px]'>
                <div className='h-full w-full '>
                    <img className='rounded-xl' src={selectedImage} alt="Selected Product" />
                </div>
                <div className='grid grid-cols-4 gap-x-4 md:hidden '>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                            className={`cursor-pointer rounded-xl hover:opacity-75  ${selectedImage === image.full ? 'border-4 border-orange opacity-65 ' : ''}`}
                            onClick={() => setSelectedImage(image.full)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
