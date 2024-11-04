const Products = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mb-7">Explore Cutting-Edge Gadgets</h1>
            <div>
                {/* product buttons */}
                <div className="flex flex-col w-[250px] gap-4 p-6  bg-[#FFFFFF] shadow-xl">
                    <button className="btn rounded-full">ALL Product</button>
                    <button className="btn rounded-full">Laptop</button>
                    <button className="btn rounded-full">Phones</button>
                    <button className="btn rounded-full">Accessories</button>
                    <button className="btn rounded-full">Smart Watches</button>
                    <button className="btn rounded-full">MacBook</button>
                    <button className="btn rounded-full">Iphone</button>
                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default Products;