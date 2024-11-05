import { NavLink, Outlet } from "react-router-dom";
import Heading from "../Components/Heading";

const Dashboard = () => {

    const tittle="DashBoard"
    const subTittle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
    return (
        <div className="text-xl">
            <Heading tittle={tittle} subTittle={subTittle}></Heading>
            <Outlet></Outlet>
        </div>

   
)};

export default Dashboard;