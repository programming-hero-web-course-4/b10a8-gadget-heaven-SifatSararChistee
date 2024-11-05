import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from './Heading';

const Offers = () => {
        const tittle="Offers"
    const subTittle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    return (
        <div className='text-7xl'>
             <Helmet>
        <title>Gadget Heaven Offers</title>
        <meta name="description" content="View statistics of our store's performance" />
      </Helmet>
      <Heading tittle={tittle} subTittle={subTittle}></Heading>
        </div>
    );
};

export default Offers;