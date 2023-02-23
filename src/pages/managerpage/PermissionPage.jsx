import React from "react";
import { useSelector } from "react-redux";
import Index from "../../components/permission/Index";
import Navbar from "../../components/Users/Standarduser/navbar/navbar";
import Navbar2 from "../../components/Users/SuperAdmin/navbar/navbar";
import MSearchbar from "../../components/Users/SuperAdmin/navbar/searchbar";

const PermissionPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" bg-[#F7F8F9] lg:flex">
      <div className="hidden lg:flex">
        {user?.user_type?.toLowerCase() === "!employee" ? (
          <Navbar />
        ) : (
          <Navbar2 />
        )}
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <Index />
        </div>
      </div>
    </div>
  );
};

export default PermissionPage;
