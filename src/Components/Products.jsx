import Category from "./category";
import PropTypes from 'prop-types';

const Products = ({category}) => {
    return (
        <>
                        {/* product buttons */}
                        <div className="bg-[#FFFFFF] shadow-xl lg:sticky md:sticky top-16 z-20">
                       <Category category={category}></Category> 
                </div>
        </>

)};

Products.propTypes = {
    category: PropTypes.array
  };

export default Products;