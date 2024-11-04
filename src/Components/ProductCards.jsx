import { useLoaderData, useParams } from "react-router-dom";
import ProductSingleCard from "./ProductSingleCard";


const ProductCards = () => {
    const data = useLoaderData()
    const obj = useParams()
    console.log(data);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10"> 
        {
            data.map(card => <ProductSingleCard key={card.product_id} card={card}></ProductSingleCard>)
        }
        </div>
    );
};

export default ProductCards;