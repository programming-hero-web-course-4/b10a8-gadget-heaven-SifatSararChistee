import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({category}) => {
    return (
        <div className="flex flex-col w-[250px] gap-4 p-6  bg-[#FFFFFF] shadow-xl">
            {category.map(category => 
                   <div key={category.id} className="btn rounded-full">
                    <NavLink  to={`/category/${category.category}`}>{category.category} </NavLink>
                   </div> 

            )}
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.array
  };

export default Category;