import { useLoaderData, useParams } from "react-router-dom";


const ProductCards = () => {
    const data = useLoaderData()
    const obj = useParams()
    console.log(data);
    return (
        <div className="text-7xl">
            Products
        </div>
    );
};

export default ProductCards;