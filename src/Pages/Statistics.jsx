import Heading from "../Components/Heading";
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    const tittle="Statistics"
    const subTittle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    return (
        <div className="text-xl">
            <Helmet>
        <title>Gadget Heaven Statistics</title>
        <meta name="description" content="View statistics of our store's performance" />
      </Helmet>
           <Heading tittle={tittle} subTittle={subTittle}></Heading>
        </div>
    );
};

export default Statistics;