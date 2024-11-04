import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Products from "../Components/Products";

const Home = () => {
    const category = useLoaderData()
    return (
        <>
        <div className="lg:h-[1000px] h-[750px] md:h-[900px]">
        <Banner></Banner>
        </div>
        <h1 className="text-4xl font-bold text-center mb-7">Explore Cutting-Edge Gadgets</h1>
        <div className="flex gap-7 w-full">
        <Products category={category}></Products>
        <Outlet></Outlet>
        </div>
        </>
    );
};

export default Home;