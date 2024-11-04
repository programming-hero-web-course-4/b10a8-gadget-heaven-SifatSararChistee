import Category from "./category";

const Products = ({category}) => {
    return (
        <>
                        {/* product buttons */}
                        <div className="bg-[#FFFFFF] shadow-xl">
                       <Category category={category}></Category> 
                </div>
        </>

)};

export default Products;