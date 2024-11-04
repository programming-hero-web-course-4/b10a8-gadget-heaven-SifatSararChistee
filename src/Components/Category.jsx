import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({category}) => {
    return (
        <div className="flex flex-col w-[250px] gap-4 p-6  bg-[#FFFFFF] shadow-xl">
            <NavLink to={"/"} className="btn rounded-full w-[200px]">All Products</NavLink>
            {category.map(category => 
         <NavLink key={category.id} to={`/category/${category.category}`}> <button className="btn rounded-full w-[200px]">{category.category}</button> </NavLink> 

            )}
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.array
  };

export default Category;