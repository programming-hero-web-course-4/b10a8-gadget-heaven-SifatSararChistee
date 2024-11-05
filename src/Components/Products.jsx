import Category from "./category";

const Products = ({category}) => {
    return (
        <>
                        {/* product buttons */}
                        <div className="bg-[#FFFFFF] shadow-xl lg:sticky md:sticky top-16 z-20">
                       <Category category={category}></Category> 
                </div>
        </>

)};

export default Products;