import React from "react";
import Createbranch from "../../components/CreateBranch/Branch";
import Navbar2 from "../../components/Users/SuperAdmin/navbar/navbar";
import MSearchbar from "../../components/Users/SuperAdmin/navbar/searchbar";

const OrgainzationPage = () => {
  return (
    <div className="lg:flex ">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          {/* <MSearchbar /> */}
          {/* <Createbranch /> */}
        </div>
      </div>
    </div>
  );
};

export default OrgainzationPage;
