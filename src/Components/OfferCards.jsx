import { useLoaderData } from "react-router-dom";
import OfferSingleCard from "./OfferSingleCard";

const OfferCards = () => {
    const offers = useLoaderData()
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 mt-5 w-11/12 mx-auto">
                    {
                        offers.map(offer => <OfferSingleCard key={offer.offerId} offer={offer}></OfferSingleCard>)
                    }
                
        </div>
    );
};

export default OfferCards;