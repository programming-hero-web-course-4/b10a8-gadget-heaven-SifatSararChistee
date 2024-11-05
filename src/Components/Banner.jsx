import { Navigate, NavLink, useNavigate } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"

const Banner = () => {
    const navigate =useNavigate()
    return (
        <>
        <div>
        <div className="bg-[#9538E2] text-white h-[600px] rounded-b-2xl px-3">
           
           <div className="flex flex-col items-center justify-center space-y-7 pt-20">
           <h1 className="text-3xl lg:text-4xl md:text-5xl font-bold text-center">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-base font-normal text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className="btn bg-white rounded-full text-[#9538E2] px-6" onClick={()=>navigate("/dashboard")}>Shop Now</button>
           </div>
        </div>
        
        </div>

        <div className="w-2/3 mx-auto border-2 border-[#FFFFFF4D] p-4 rounded-xl bg-[#FFFFFF4D] relative lg:-top-56 -top-28">
        <img  className="rounded-xl" src={bannerImg} alt="bannerImg" />
        </div>

        
        </>

    );
};

export default Banner;