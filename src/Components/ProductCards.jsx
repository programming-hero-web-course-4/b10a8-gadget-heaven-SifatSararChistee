import { useLoaderData, useParams } from "react-router-dom";
import ProductSingleCard from "./ProductSingleCard";
import { useEffect, useState } from "react";


const ProductCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [products , setProducts]=useState([])
    useEffect(()=>{
        if(category){
            const filteredByCategory =[...data].filter(product=> product.category === category)
            setProducts(filteredByCategory)
        }else{
            setProducts(data)
        }
    },[category, data])
    console.log(category)
    console.log(data);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-10"> 
        {
            products.map(card => <ProductSingleCard key={card.product_id} card={card}></ProductSingleCard>)
        }
        </div>
    );
};

export default ProductCards;