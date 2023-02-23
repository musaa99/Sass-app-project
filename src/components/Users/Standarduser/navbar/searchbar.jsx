import React from "react";
import { useNavigate } from "react-router-dom";
import bell from "../../../../assets/bell.svg";
import profilepic from "../../../../assets/profilepic.svg";
import "./Navbar.css";
// import Hamburger from "./Hamburger";
import Sidebar from "./Sidebar";

const Searchbar = () => {
 

  const navigate = useNavigate();
  const handleSubmit = () => {
    // navigate("/NotificationPage");
    navigate("/Users");
  };
  return (
    <>
    <div className=" flex lg:block items-center  justify-between bg-[#07939B] ">
     <div className="flex justify-between  items-center lg:hidden">
       {/* <img  src={logo} alt="logo" /> */}

     {/* <Hamburger/> */}
      <Sidebar/>
     </div>

    <div className="block lg:flex justify-between items-center mx-4 p-2 w-[ -webkit-fill-available] md:w-[] lg:w-[] ">
    


      <form className=" pt-4 md:pt-1 w-[auto ] lg:w-[auto]">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-[706px] py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
      <div className="hidden md:hidden  px-4 mr-3 justify-between  lg:flex  items-center ">
        <img className="lg:mr-4 " onClick={handleSubmit} src={bell} alt="notificationbell" />
        <img  onClick={handleSubmit}  src={profilepic} alt="profilepicture" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Searchbar;
