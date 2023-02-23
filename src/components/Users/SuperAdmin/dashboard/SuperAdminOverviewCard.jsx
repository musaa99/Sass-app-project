import React from "react";
import CityOverview from "./CityOverview";

const SuperAdminOverviewCard = () => {
  return (
    <div className="w-full max-w-[436px] bg-white p-6 shadow border-white rounded-[20px] ">
      <h1 className="text-[30px] text-black mb-4 font-bold leading-[45px]">
        Overview
      </h1>
      <div className="grid grid-cols-2">
        <CityOverview
          header="New York"
          department=" 4 Departments"
          employee="80 Employee"
          admin="2 Administrators"
          standard="4 Standard Users"
          credential="4 Credentials"
        />
        <CityOverview
          header="Abuja"
          department=" 4 Departments"
          employee="80 Employee"
          admin="2 Administrators"
          standard="4 Standard Users"
          credential="4 Credentials"
        />
        <CityOverview
          header="Florida"
          department=" 4 Departments"
          employee="80 Employee"
          admin="2 Administrators"
          standard="4 Standard Users"
          credential="4 Credentials"
        />
        <CityOverview
          header="Lagos"
          department=" 4 Departments"
          employee="80 Employee"
          admin="2 Administrators"
          standard="4 Standard Users"
          credential="4 Credentials"
        />
      </div>
    </div>
  );
};

export default SuperAdminOverviewCard;
