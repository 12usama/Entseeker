import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate(); // ✅ Redirect করার জন্য

    const handlesignin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const phone = form.get('phone');
        const gender = form.get('gender');
        const password = form.get('password');
        console.log(name, email, phone, gender, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // ✅ Successfully account create হলে login page-এ পাঠাও
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            });
    };

    const links = <>
        <NavLink to="/login" className="text-blue-500 font-medium">Go to login</NavLink>
    </>;

    return (
        <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="hero min-h-screen bg-blue-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-red-500 font-bold">Sign In now!</h1>
                        <p className="py-6 text-xl">
                            If you don't have any account, then you can easily sign up here.
                            <br /> and then you can easily log in anytime.
                        </p>
                        <button className="btn border border-blue-500 bg-blue-500 text-white">
                            <FaGoogle /> Login With Google
                        </button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesignin} className="card-body">
                            <div className="form-control">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Phone No.</span></label>
                                <input type="number" name="phone" placeholder="phone no" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Gender</span></label>
                                <div>
                                    <input type="radio" value="Male" name="gender" /> Male  <br />
                                    <input type="radio" value="Female" name="gender" /> Female <br />
                                    <input type="radio" value="Other" name="gender" /> Other
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Password</span></label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Already have an account? {links}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
