import { useEffect, useState } from "react";
import ProductSingleCard from "./ProductSingleCard";
import { getAllProducts } from "../Utilities";

const Cart = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const addedProducts = getAllProducts()
        setProducts(addedProducts)
    },[])
    return (
        <div>
            <div className="flex justify-between mt-5">
                <p className="text-2xl font-extrabold">Cart</p>
                <div className="flex gap-4 items-center"> 
                <p className="text-2xl font-bold">Total Cost:0</p>
                <button className="btn">Sort by Price</button>
                <button className="btn">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col gap-6 w-11/12 mx-auto">
                
                            {
                                products.map(card => <ProductSingleCard key={card.product_id} card={card}></ProductSingleCard>)
                            }
                
            </div>
        </div>
    );
};

export default Cart;