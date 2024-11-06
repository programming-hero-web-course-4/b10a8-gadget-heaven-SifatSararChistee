import React from 'react';
import { Helmet } from 'react-helmet-async';
import Heading from './Heading';
import { Outlet } from 'react-router-dom';

const Offers = () => {
        const tittle="Get Exciting Offers"
    const subTittle="Welcome to our Offers page, where you’ll find unbeatable deals on the latest gadgets and accessories! From premium laptops and smartphones to essential tech accessories, explore our limited-time discounts, cash-back offers, and exciting bundle deals designed to bring you the best tech at unbeatable prices."
    return (
        <div>
            <Helmet>
        <title>Gadget Heaven Offers</title>
        <meta name="description" content="View statistics of our store's performance" />
      </Helmet>
      <Heading tittle={tittle} subTittle={subTittle}></Heading>
      <Outlet></Outlet>
        </div>
    );
};

export default Offers;