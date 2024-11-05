import { NavLink, useLocation } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const ProductSingleCard = ({card}) => {
    const {pathname} = useLocation()
    const {product_title,price,product_image,product_id, description}= card;
    return (
      <>
      {
        pathname ==='/' && <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl h-[180px] w-full object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-lg font-medium">Price: {price} $</p>
          <div className="card-actions">
            <button className="text-[#9538E2] border-2 border-[#9538E2] px-5 py-3 rounded-full"><NavLink to={`/productDetails/${product_id}`}>View Details</NavLink></button>
          </div>
        </div>
      </div>
      }
      {
        pathname ==='/dashboard' && 
        <div className="p-5 flex bg-base-100 shadow-xl justify-center items-center w-full gap-4 h-[150px] rounded-3xl">
          <div className="w-[200px] h-[130px]">
            <img className="h-full" src={product_image} alt="" />
          </div>
          <div className=" w-full space-y-2">
            <h1 className="font-bold">{product_title}</h1>
            <p className="text-sm">{description}</p>
            <p className="font-bold">Price: {price} $</p>
          </div>
          <div className="text-5xl text-red-600 cursor-pointer">
          <TiDelete />
          </div>
        </div>
      
      }
      {
        pathname ==='/dashboard/wishlist' && 
        <div className="py-24 px-6 flex bg-base-100 shadow-xl justify-center items-center w-full gap-4 h-[150px] rounded-3xl">

          <div className="w-[200px] h-[130px]">
            <img className="h-full" src={product_image} alt="" />
          </div>
          <div className=" w-full space-y-2">
            <h1 className="font-bold">{product_title}</h1>
            <p className="text-sm">{description}</p>
            <p className="font-bold">Price: {price} $</p>
            <button className="btn bg-[#9538E2] rounded-full text-white text-lg px-7">Add to Cart</button>
          </div>
          <div className="text-5xl text-red-600 cursor-pointer">
          <TiDelete />
          </div>
        </div>
      
      }
      </>
    );
};

export default ProductSingleCard;