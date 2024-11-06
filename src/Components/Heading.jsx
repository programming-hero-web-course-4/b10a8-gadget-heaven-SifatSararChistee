import { NavLink, useLocation } from "react-router-dom";

const Heading = ({tittle, subTittle}) => {
    const {pathname} =useLocation()
    return (
        <div className="bg-[#9538E2] text-white h-[350px] rounded-2xl px-3">

        <div className="flex flex-col items-center justify-center space-y-7 pt-20">
        <h1 className="text-3xl lg:text-4xl md:text-5xl font-bold text-center">{tittle}</h1>
         <p className={(pathname === "/offers"?"text-xs lg:text-base md:text-base  font-normal text-center w-2/3":"text-base font-normal text-center w-2/3" )}
         >{subTittle}</p>

         {
            pathname ==='/dashboard' && 
            <div className="flex gap-5">       
                <NavLink to={"/dashboard"} className={({isActive})=>`${isActive? "text-black bg-white btn rounded-full px-7" : "bg-red-500 text-black btn rounded-full" }`}   >Cart</NavLink>
                <NavLink to={"/dashboard/wishlist"} className={({isActive})=>`${isActive? "btn rounded-full bg-white text-black" : " bg-[#9538E2] text-white btn rounded-full px-7" }`}>Wishlist</NavLink>
            </div>
         }
         {
            pathname ==='/dashboard/wishlist' && 
            <div className="flex gap-5">       
                <NavLink to={"/dashboard"} className={({isActive})=>`${isActive? "btn rounded-full bg-[#9538E2] text-white px-7" : "px-7 bg-[#9538E2] text-white btn rounded-full" }`}   >Cart</NavLink>
                <NavLink to={"/dashboard/wishlist"} className={({isActive})=>`${isActive? "btn rounded-full text-black px-7" : "bg-[#9538E2] text-white px-7 btn rounded-full" }`}>Wishlist</NavLink>
            </div>
         }
        </div>
        </div>

    );
};

export default Heading;