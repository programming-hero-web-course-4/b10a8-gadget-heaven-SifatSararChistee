import Banner from "../Components/Banner";
import Products from "../Components/Products";

const Home = () => {
    return (
        <>
        <div className="lg:h-[1000px] h-[750px] md:h-[900px]">
        <Banner></Banner>
        </div>
        <Products></Products>
        </>
    );
};

export default Home;