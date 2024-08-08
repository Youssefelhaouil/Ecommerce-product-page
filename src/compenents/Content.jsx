import ProductText from "./ProductText";
import Product from "./Product";



export default function Content(){
    return(
        <>
        <div className=" pt-[100px] px-[50px] md:px-0 grid grid-cols-2 place-items-center gap-10 md:grid-cols-1 md:gap-6">
            <Product></Product>
            <ProductText></ProductText>
        </div>
        
        </>
    )

}