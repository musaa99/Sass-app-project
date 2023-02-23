import React from "react";
import Navbar2 from "../../components/Users/SuperAdmin/navbar/navbar.jsx";
import MSearchbar from "../../components/Users/SuperAdmin/navbar/searchbar.jsx";
import EditUserProfile from "../../components/usersModule/EditUserProfile.jsx";

const ManagerProfileEdit = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
    <div className="hidden lg:flex">
      <Navbar2 />
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <MSearchbar />
       <EditUserProfile/>
      </div>
    </div>
  </div>
  );
};

export default ManagerProfileEdit;
