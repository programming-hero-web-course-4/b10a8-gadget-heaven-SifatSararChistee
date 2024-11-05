import { useEffect, useState } from "react";
import ProductSingleCard from "./ProductSingleCard";
import { getAllProducts } from "../Utilities";

const Cart = () => {
    const [products, setProducts]=useState([])
    const [price , setPrice]= useState(0)
    useEffect(()=>{
        const addedProducts = getAllProducts()
        setProducts(addedProducts)
    },[])

    const totalCost = products.reduce((sum, product) => sum + product.price, 0);
    return (
        <div>
            <div className="flex justify-between mt-5">
                <p className="text-2xl font-extrabold">Cart</p>
                <div className="flex gap-4 items-center"> 
                <p className="text-2xl font-bold">Total Cost: <span className="font-normal">{totalCost}</span> $</p>
                <button className="btn rounded-full bg-[#9538E2] text-white">Sort by Price</button>
                <button className="btn rounded-full bg-[#9538E2] text-white">Purchase</button>
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