import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({category}) => {
    return (
        <div className="flex flex-col w-[250px] gap-4 p-6  bg-[#FFFFFF] shadow-xl">
            <NavLink to={"/"} className={({isActive})=>`${isActive? "btn-primary text-white btn rounded-full" : "text-black btn rounded-full" }`}> <span className="rounded-full w-[200px]">All Products</span></NavLink>
            {category.map(category => 
         <NavLink key={category.id} to={`/category/${category.category}`} className={({isActive})=>`${isActive? "btn-primary text-white btn rounded-full" : "text-black btn rounded-full" }`}> <span className="rounded-full w-[200px]">{category.category}</span> </NavLink> 

            )}
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.array
  };

export default Category;