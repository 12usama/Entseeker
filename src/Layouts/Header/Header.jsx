import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
        } >Home</NavLink></li>
        <li><NavLink to="/aboutus" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
        } >About Us</NavLink></li>
        <li><NavLink to="/service" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
        } >Services</NavLink></li>

    </>
    return (
        <div className="px-5 mx-auto bg-blue-100 rounded-lg">
            <div className="navbar ">
                <div className="navbar-start">
                    <img className="w-[100px]" src="https://i.ibb.co/V95h0ZJ/Entseeker.png" alt="" />
                </div>
                <div className="flex-none navbar-center">
                    <ul className="hidden lg:flex justify-around items-center gap-8 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content p-2 z-[1] shadow bg-base-100 rounded-box">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn bg-blue-500 text-white font-semibold p-4">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn bg-blue-500 text-white font-semibold p-4">Login</button>
                            </Link>

                    }


                </div>
            </div>
        </div>
    );
};

export default Header;