import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
    <>
    <div className="max-w-screen-xl mx-auto w-11/12">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>     
     </>
    );
};

export default MainLayout;