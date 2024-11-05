import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const category = useLoaderData()
    return (
        <>
        <div className="lg:max-h-[1000px] md:max-h-[1000px] max-h-[800px]">
        <Helmet>
        <title>Gadget Heaven Home</title>
        <meta name="description" content="View statistics of our store's performance" />
      </Helmet>
        <Banner></Banner>
        </div>
        <h1 className="text-4xl font-bold text-center mb-7">Explore Cutting-Edge Gadgets</h1>
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center md:items-start lg:items-start gap-7">
        <Products category={category}></Products>
        <Outlet></Outlet>
        </div>
        </>
    );
};

export default Home;