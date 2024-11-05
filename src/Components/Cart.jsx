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
                        <div className="flex justify-between">
                <p>Cart</p>
                <div className="flex gap-4"> 
                    <p>Total Cost:0</p>
                <button>Sort by Price</button>
                <button>Purchase</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-10">
                
                            {
                                products.map(card => <ProductSingleCard key={card.product_id} card={card}></ProductSingleCard>)
                            }
                
            </div>
        </div>
    );
};

export default Cart;