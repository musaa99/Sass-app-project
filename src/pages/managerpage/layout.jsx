import React from "react";
import Userlayout from "../../components/UserLayout/userlayout";
import Navbar2 from "../../components/Users/SuperAdmin/navbar/navbar";
import MSearchbar from "../../components/Users/SuperAdmin/navbar/searchbar";

const Layout = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5] lg:max-w-auto">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <Userlayout/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
