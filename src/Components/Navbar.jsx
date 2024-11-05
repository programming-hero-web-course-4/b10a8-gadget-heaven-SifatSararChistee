import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllProducts, getAllProductsToWish } from "../Utilities";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [productsWish, setProductsWish] = useState([]);
const [counter, setCounter]= useState(0)

useEffect(()=>{
  const all = getAllProducts()
  setProducts(all)
  setCounter(all.length)
},[products])

const [counterWish, setCounterWish]= useState(0)

useEffect(()=>{
  const all = getAllProductsToWish()
  setProductsWish(all)
  setCounterWish(all.length)
},[productsWish])
const links =<>
        <li className="mr-5 mb-2 text-lg"><NavLink to={"/"}>Home</NavLink></li>
        <li className="mr-5 mb-2 text-lg"><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li className="mr-5 mb-2 text-lg"><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
</>

    return (
<div className="navbar mt-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
      </ul>
    </div>
    <p className="btn btn-ghost text-lg md:text-2xl lg:text-2xl"><NavLink to={"/"}>Gadget Heaven</NavLink></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-5">
    <a className="btn bg-white text-2xl"><MdOutlineShoppingCart /><span className="text-lg font-bold -top-5 relative">{counter}</span></a>
    <a className="btn text-2xl"><FaRegHeart /> <span className="text-lg font-bold -top-5 relative">{counterWish}</span></a>
  </div>
</div>
    );
};

export default Navbar;