import { useEffect, useState } from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { product_id }= useParams();
    const data = useLoaderData()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const singleProduct = data.find(product=> product.product_id == product_id)
        setProduct(singleProduct)
    },[data, product_id])
const array=(product.Specification)
    return (
        <div>
            <div className="bg-[#9538E2] text-center pt-16 pb-56 rounded-xl"> 
            <h1 className="text-4xl text-white font-extrabold pb-4">Product Details{product_id}</h1>
            <p className="text-xl text-white font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            </div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto p-7 relative -top-40 h-[500px]">
                <div className="w-1/2 rounded-lg h-[400px]">
                    <img
                    className="w-full h-full"
                    src={product.product_image}
                    alt="Album" />
                </div>
                <div className="card-body">
                <h2 className="text-3xl font-bold"> {product.product_title} </h2>
                    <p className="text-xl font-semibold">Price: {product.price} $</p>
                    
                    {product.availability ? (<div className="btn rounded-full w-32 text-black bg-[#a1ed86f1]">In Stock</div>) : (<div className="btn rounded-full text-white bg-red-500 w-32">Out of Stock</div>)}
                   
                    <p className="text-xl font-light">{product.description}</p>
                    <div>
                        <h5 className="text-xl font-semibold">Specifications:</h5>
                        <ol>
                        {/* {
                        array.map((spec,index) => (
                <li key={index}  >{spec}</li>
             ))
                } */}
                        </ol>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold">Rating:</h5>
                        <div className="flex gap-3">
                        <Rating
                          initialRating= {product.rating}
                          readonly 
                        />
                         <span className="text-2xl font-bold text-blue-700">{product.rating}</span>
                        </div>

                    </div>
                    <div className="card-actions">
                    <button className="btn btn-primary">Add to Card</button>
                    <button className="btn">Add to wishlist</button>
                    </div>
                </div>
                </div>

                        </div>


    );
};

export default ProductDetails;