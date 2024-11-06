import { useEffect, useState } from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { addToCart, addToWish, getAllProductsToWish } from "../Utilities";
const ProductDetails = () => {
    const { product_id }= useParams();
    const data = useLoaderData()
    const [product, setProduct] = useState({})
    const [Wishlist, setWishlist] = useState(false)


    useEffect(()=>{
        const singleProduct = data.find(product=> product.product_id == product_id)
        setProduct(singleProduct)
        const addedProductToWish = getAllProductsToWish();
        const isExist = addedProductToWish.find(
        (item) => item.product_id == product.product_id
        );
        if (isExist) {
            setWishlist(true)
        }
    },[data, product_id])

    const handleAddToCart=(product)=>{
        addToCart(product)
    }
    const handleWishBtn=(product)=>{
        addToWish(product)
        setWishlist(true)
    }
    return (
        <div>
            <div className="bg-[#9538E2] text-center pt-16 pb-56 rounded-xl"> 
            <h1 className="text-4xl text-white font-extrabold pb-4">Product Details</h1>
            <p className="lg:text-xl text-base md:text-xl text-white font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            </div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto lg:p-7 p-2 relative -top-40 lg:h-[600px]">
                <div className="lg:w-1/2 md:h-1/2 rounded-lg lg:h-[400px]">
                    <img
                    className="w-full h-full"
                    src={product.product_image}
                    alt="Album" />
                </div>
                <div className="card-body flex flex-col justify-center items-center lg:items-start md:items-center">
                <h2 className="lg:text-3xl text-xl font-bold"> {product.product_title} </h2>
                    <p className="lg:text-xl font-semibold">Price: {product.price} $</p>
                    
                    {product.availability ? (<div className="btn rounded-full w-32 text-black bg-[#a1ed86f1]">In Stock</div>) : (<div className="btn rounded-full text-white bg-red-500 w-32">Out of Stock</div>)}
                   
                    <p className="lg:text-xl  lg:block md:block font-light">{product.description}</p>
                    <div>
                        <h5 className="lg:text-xl font-semibold">Specifications:</h5>
                        <div>
                        {
                        product.Specification?.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))
                        }
                        </div>
                    </div>
                    <div>
                        <h5 className="lg:text-xl font-semibold">Rating:</h5>
                        <div className="flex gap-3">
                        <Rating
                        className="text-orange-400"
                          initialRating= {product.rating}
                          readonly 
                          emptySymbol="fa fa-star-o fa-2x" 
                        fullSymbol="fa fa-star fa-2x" 
                        />
                         <span className="text-2xl font-bold text-blue-700">{product.rating}</span>
                        </div>

                    </div>
                    <div className="card-actions">
                    <button className="btn bg-[#9538E2] rounded-full text-white text-sm lg:text-lg md:text-lg px-7" onClick={()=>handleAddToCart(product)}>Add to Cart <IoCartSharp /></button>
                    <button disabled={Wishlist} onClick={()=>handleWishBtn(product)} className="btn bg-[#9538E2] rounded-full text-white text-sm lg:text-lg md:text-lg px-7">Add to wishlist <FaHeart /></button>
                    </div>
                </div>
                </div>

                        </div>


    );
};

export default ProductDetails;