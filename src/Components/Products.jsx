import Category from "./category";

const Products = ({category}) => {
    return (
        <div>
   
            <div>
                {/* product buttons */}
                <div className="w-[250px] gap-4 bg-[#FFFFFF] shadow-xl">
                       <Category category={category}></Category> 
                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default Products;