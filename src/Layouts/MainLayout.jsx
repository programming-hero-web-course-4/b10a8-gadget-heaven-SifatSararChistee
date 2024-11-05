import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
    <>
    <div className="max-w-screen-xl mx-auto w-11/12">
        <div className="sticky top-0 z-50 bg-white"><Navbar></Navbar></div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>     
     </>
    );
};

export default MainLayout;