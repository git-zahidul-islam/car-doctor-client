
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => console.log("logout sucessfully"))
            .catch((error) => console.error(error))
    }

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>About</Link></li>
        {user?.email ?
            <>
                <li><Link to={'/bookings'}>Bookings</Link></li>
                <li><button onClick={handleLogout}>logout</button></li>
            </>
            :
            <li><Link to={'/login'}>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-24 my-5 border-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link className="lg:w-24 md:w-24 w-16"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;