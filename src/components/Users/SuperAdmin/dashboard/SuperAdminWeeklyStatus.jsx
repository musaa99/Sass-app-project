import React from "react";
import SuperAdminBarChart from "../../../charts/SuperAdminBarChart";

const SuperAdminWeeklyStatus = () => {
  // old max-w-[669px]
  return (
    <div className=" bg-white flex-1 rounded-[20px] shadow p-6">
      <div className=" ">
        <h1 className="text-black font-bold text-2xl mb-[1px]">
          Weekly status
        </h1>
        <div className="text-black flex ">
          <p className="capitalize mr-2">from</p>
          <p className="capitalize">1 aug</p>
          <p className="mx-2">-</p>
          <p className="capitalize">12 aug</p>
        </div>
        <SuperAdminBarChart />
      </div>
    </div>
  );
};

export default SuperAdminWeeklyStatus;
