import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
    return (
        <div className="relative">
            <div className=" absolute top-0 left-0 right-0">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;