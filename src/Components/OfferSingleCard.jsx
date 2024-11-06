import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const OfferSingleCard = ({offer}) => {
    const navigate =useNavigate()
    const {title,img,offerDate,description}=offer
    return (
        <div className="card bg-base-100 h-[500px] w-full shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>Offer till: {offerDate}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button onClick={()=>navigate("/")} className="btn bg-[#9538E2] rounded-full text-white text-lg px-7">View Details</button>
          </div>
        </div>
      </div>
    );
};

OfferSingleCard .propTypes = {
  offer: PropTypes.object
};

export default OfferSingleCard;