import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/footer/Footer";
import Nav from "../../pages/shared/nav/Nav";



const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;