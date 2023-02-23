import React from "react";
import Grantaccess from "../../components/OrganizationSetup/OrganizationLayout/Grantaccess";
import Navbar2 from "../../components/Users/SuperAdmin/navbar/navbar";
import MSearchbar from "../../components/Users/SuperAdmin/navbar/searchbar";

 const CredentialsPage = () => {
  return (
    <div className="lg:flex ">
      <div className="hidden  lg:flex">
        <Navbar2 />
      </div>
      <div className=" bg-[#F5F5F5] w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
           <Grantaccess/> 
        </div>
      </div>
    </div>
  );
};

export default CredentialsPage