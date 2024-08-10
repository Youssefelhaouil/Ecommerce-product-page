import plusIcon from '/images/icon-plus.svg';
import minusIcon from '/images/icon-minus.svg';
import iconCart from '/images/icon-cart.svg';

export default function ProductText({ number, handleAddToCart, decrement, incerement }) {
    return (
        <>
            <div className=' flex flex-col gap-2 justify-center items-start pb-[50px]'>
                <h4 className='font-sans font-bold text-[14px] text-grayish-blue '>SNEAKER COMPANY</h4>
                <h1 className='font-sans font-bold text-[40px] text-very-dark-blue md:text-[35px] '>Fall Limited Edition <br />Sneakers</h1>
                <p className='font-sans font-normal text-[14px] text-dark-grayish-blue'>these low-profile sneakers are your perfect <br className=' hidden md:flex' /> casual wear <br className='md:hidden' /> companion. Featuring a durable <br className=' hidden md:flex' /> rubber outer sole,they'll <br className='md:hidden' /> withstand everything <br className=' hidden md:flex' /> the weather can offer.</p>
                <div className="flex flex-col md:flex-row md:justify-between md:w-full md:items-center">
                    <div className="grid grid-cols-2 gap-2 place-items-center">
                        <h2 className='font-sans font-bold text-[25px] text-very-dark-blue '>$125.00</h2>
                        <h4 className='h-[25px] w-[50px] font-sans text-center font-bold text-[14px] pt-[1px] bg-very-dark-blue text-white rounded-sm '>50%</h4>
                    </div>

                    <h5 className='font-sans font-semibold text-[16px] line-through text-dark-grayish-blue' >250.00</h5>

                </div>
                <div className=' pt-4 md:pt-0 grid grid-cols-2 gap-2 md:gap-2 md:grid-cols-1 md:w-full'>
                    <div className="h-[40px] w-[180px] md:w-full text-center grid grid-cols-3 gap-6 place-content-center bg-light-grayish-blue px-4 rounded-lg">
                        <button onClick={decrement} className='flex justify-start items-center' ><img src={minusIcon} alt="plus" /></button>
                        <span className='font-sans font-bold text-[16px] text-very-dark-blue'>{number}</span>
                        <button onClick={incerement} className='flex justify-end items-center'> <img src={plusIcon} alt="" /></button>
                    </div>
                    <button onClick={handleAddToCart} className='w-[250px] h-[40px]  md:w-full text-center flex gap-4 justify-center items-center px-10 bg-orange hover:opacity-80 rounded-lg font-sans font-bold text-very-dark-blue'>
                        <img src={iconCart} alt="" />
                        Add to cart
                    </button>

                </div>
            </div>

        </>
    )
}