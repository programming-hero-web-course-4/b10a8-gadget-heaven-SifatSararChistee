import { useEffect, useState } from "react";
import ProductSingleCard from "./ProductSingleCard";
import { getAllProductsToWish } from "../Utilities";


const Wishlist = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const addedProducts = getAllProductsToWish()
        setProducts(addedProducts)
    },[])
    return (
        <div>
                        <div className="flex justify-between">
                <p className="text-2xl font-bold mt-5">WishList</p>
            </div>
            <div className="flex flex-col gap-6 w-11/12 mx-auto">
                
                            {
                                products.map(card => <ProductSingleCard key={card.product_id} card={card}></ProductSingleCard>)
                            }
                
            </div>
        </div>
    );
};

export default Wishlist;