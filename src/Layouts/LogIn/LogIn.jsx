import { NavLink } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';


const LogIn = () => {
    const links = <>
        <a className="text-blue-500 font-medium"><NavLink to="/signin" >Create an account</NavLink></a>
    </>
    return (
        <div className="max-w-7xl mx-auto mt-10 mb-10 px-3 lg:px-0">
            <div className="hero min-h-screen rounded-xl bg-cover  bg-[url('https://i.ibb.co/T8S79wk/login.jpg')]">
                <div className="hero-content flex-col ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 space-y-2">
                                <button className="btn btn-primary">Login</button>
                                <button className="btn border border-blue-500 bg-blue-500 text-white">
                                    <FaGoogle></FaGoogle>
                                    Login With Google
                                </button>
                                <p>Don't have id then {links} </p>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;