import React from "react";
import '../../containers/App.css'
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/signin');
    };

    return (
        <nav className="flex justify-end p-4 cursor-pointer hover:text-gray-300 transition-colors">
            <p onClick={handleSignOut}>Sign Out</p>
        </nav>
    )
}

export default Navigation;