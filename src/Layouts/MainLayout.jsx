import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {

const {pathname} = useLocation()
const getBackgroundColor = () => {
    if (pathname === "/") return "bg-[#9538E2] ";
    return "bg-white";
  };

    return (
    <>
    <div className="max-w-screen-xl mx-auto w-11/12">
        <div className={`rounded-t-2xl ${getBackgroundColor()}`}><Navbar></Navbar></div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>     
     </>
    );
};

export default MainLayout;