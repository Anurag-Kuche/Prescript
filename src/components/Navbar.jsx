import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 bg-white text-gray-800 px-6 shadow-md">
            <img onClick={() => navigate("/")} className="w-44 cursor-pointer transition-transform duration-300 hover:scale-105" src={assets.logo} alt="Logo" />
            <ul className="hidden md:flex items-center gap-6 font-medium">
                {[
                    { path: "/", label: "HOME" },
                    { path: "/doctors", label: "ALL DOCTORS" },
                    { path: "/about", label: "ABOUT" },
                    { path: "/contact", label: "CONTACT" }
                ].map((link, index) => (
                    <NavLink 
                        key={index} 
                        to={link.path} 
                        className={({ isActive }) => 
                            `relative group ${isActive ? "text-gray-800 font-semibold" : "text-gray-600"}`
                        }
                    >
                        <li className="py-1 transition-colors duration-300 hover:text-gray-500">{link.label}</li>
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-3/5 ${isActive ? 'w-3/5' : ''}"></span>
                    </NavLink>
                ))}
            </ul>
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="relative flex items-center gap-2 cursor-pointer group">
                        <img className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-md" src={assets.profile_pic} alt="Profile" />
                        <img className="w-3 transition-transform duration-300 group-hover:rotate-180" src={assets.dropdown_icon} alt="Dropdown" />
                        <div className="absolute top-12 right-0 bg-white text-gray-800 text-base font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-48 p-4 border border-gray-200">
                            <p onClick={() => navigate("my-profile")} className="hover:text-gray-500 cursor-pointer py-1">My Profile</p>
                            <p onClick={() => navigate("my-appointments")} className="hover:text-gray-500 cursor-pointer py-1">My Appointments</p>
                            <p onClick={() => setToken(false)} className="hover:text-gray-500 cursor-pointer py-1">Logout</p>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate("/login")} className="bg-gray-500 hover:bg-gray-400 text-white px-6 py-2 rounded-full font-light hidden md:block transition-transform duration-300 hover:scale-105">Create Account</button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
