import ProductText from "./ProductText";
import Product from "./Product";



export default function Content(){
    return(
        <>
        <div className=" pt-[100px] px-[50px] grid grid-cols-2 place-items-center md:grid-cols-1 md:gap-6">
            <Product></Product>
            <ProductText></ProductText>
        </div>
        
        </>
    )

}