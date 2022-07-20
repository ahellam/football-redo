import React from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";


const Navigation = ({ user, setUser}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('logged out')
    localStorage.removeItem("token")
    setUser(null)
    navigate('/login')
  }

  return (
    <div className="bg-[#323236] text-white px-6 py-4 grid grid-cols-12">
      <h1 className="font-extrabold text-2xl col-span-2">
        <span className="text-green-500">Fantasy</span>Draft
      </h1>
      <button
        className="col-start-12 text-sm font-light border-[1px] border-white rounded-[4px] 
        hover:border-[2px] active:font-semibold"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navigation;
