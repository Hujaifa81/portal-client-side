import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div>
            <div className="navbar  px-4 relative z-10 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  shadow-sm">
                <div className="navbar-start">
                    <NavLink to='/'><span className="text-xl px-0 font-bold">StreamFlix</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex font-bold">
                    <ul className="menu menu-horizontal px-1 gap-4 items-center">
                        <NavLink to='/' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>Home</NavLink>
                        <NavLink to='all-movies' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>All Movies</NavLink>
                        <NavLink to='/add-movie' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>Add Movie</NavLink>
                        <NavLink to={`/my-favorites/${user?.email}`} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>My Favorites</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="relative group inline-block">

                            {/* Avatar (Trigger) */}
                            <div className="btn btn-ghost btn-circle avatar">

                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
                                </div>
                            </div>

                            {/* Hover Menu (Display Name + Logout) */}
                            <div className="absolute right-0 mt-2 w-40 bg-base-100 p-2 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <p className="text-center font-semibold">{user.displayName}</p>
                                <button className="btn btn-error btn-sm w-full mt-2" onClick={() => {
                                    logOut()
                                        .then(() => {
                                            navigate('/')
                                        })
                                }}>Logout</button>
                            </div>
                        </div> : <div className='flex justify-around gap-4 items-center'>
                            <button className="btn  bg-transparent border text-black font-bold rounded-md"><Link to='/sign-up'>Sign Up</Link></button>
                            <button className="btn bg-red-500 text-white  font-bold rounded-md"><Link to='/sign-in'>Sign In</Link></button>
                        </div>
                    }







                </div>
            </div>
        </div>
    );
};

export default Nav;