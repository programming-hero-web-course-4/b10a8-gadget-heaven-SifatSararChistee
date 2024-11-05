import { Outlet } from "react-router-dom";
import Heading from "../Components/Heading";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const tittle="DashBoard"
    const subTittle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    return (
        <div className="text-xl">
             <Helmet>
        <title>Gadget Heaven DashBoard</title>
        <meta name="description" content="View statistics of our store's performance" />
      </Helmet>
            <Heading tittle={tittle} subTittle={subTittle}></Heading>
            <Outlet></Outlet>
        </div>

   
)};

export default Dashboard;