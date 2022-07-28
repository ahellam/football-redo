import React from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";


const Navigation = ({ user, setUser, setPositions}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('logged out')
    localStorage.removeItem("token")
    setUser(null)
    setPositions(null)
    navigate('/login')
  }

  return (
    <div className="bg-[#323236]  text-white px-6 py-4 grid grid-cols-12">
      <h1 className="my-auto font-extrabold text-2xl col-span-2">
        <span className="text-green-500">Fantasy</span>Draft
      </h1>
      {user && <h2 className="col-start-10 col-span-2 pt-[1px] text-green-500 m-auto">{`Welcome ${user.username}`}</h2>}
      {user && <button
        className="mx-[8px] my-[2px] col-start-12 text-sm font-light border-[1px] border-white rounded-[4px] 
        hover:border-[2px] active:font-semibold"
        onClick={handleLogout}
      >
        Log Out
      </button>}
    </div>
  );
};

export default Navigation;
