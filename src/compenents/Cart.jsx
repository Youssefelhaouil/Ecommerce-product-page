import image_1_thumbnail from '/images/image-product-1-thumbnail.jpg';
import trashIcon from '/images/icon-delete.svg';


export default function Cart(click,setClick, number) {
    const price = 125.00;

    return (
        <>
            <div className="absolute top-[85px] right-8 md:right-8  h-[200px] md:h-[200px] w-[350px] md:w-[90%]  bg-white rounded-lg shadow-2xl z-10 ">
                <div className="px-4 py-2">
                    <h4 className="font-sans font-bold ">Cart</h4>
                </div>
                <hr />
                { click ? <div className="grid grid-rows-2 place-items-center  gap-y-3 p-4  ">
                    <div className="w-full grid grid-cols-[20%_70%_10%] gap-x-2 ">
                        <img className='h-[60px] rounded-lg' src={image_1_thumbnail} alt="image-prod" />
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-gray-400 font-sans font-semibold text-[15px] '>Fall Limited Edition Sneakers</h2>
                            <h3  className='text-gray-400 font-sans font-normal text-[14px] '>$125.00 x 3 <span  className='text-gray-800 font-sans font-bold '>{(number*price).toFixed(2)}</span></h3>
                        </div>
                        <button><img onClick={()=>setClick(false)} className=' cursor-pointer h-[22px] mt-4' src={trashIcon} alt="" /></button>



                    </div>
                    <button className='cursor-pointer w-full h-[50px] bg-orange hover:opacity-70  text-center font-bold font-sans text-white rounded-lg'>Checkout</button>

                </div>: <p className="text-center pt-14 md:pt-10">Your Cart is Empty</p> }
            </div>
        </>
    )
}