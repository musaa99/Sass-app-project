import React from "react";
import bar from "../../../../assets/barchart.svg";
import StandardUserBarChart from "../../../charts/StandardUserBarChart";

const StandardUserWeeklyStatus = () => {
  return (
    <div className="w-[451px] h-fit bg-white rounded-[20px] px-6 py-2 ">
      <div className=" ">
        <h1 className="text-black font-bold text-xl mb-[1px]">Weekly status</h1>
        <div className="text-black flex text-base ">
          <p className="capitalize mr-2">from</p>
          <p className="capitalize">1 aug</p>
          <p className="mx-2">-</p>
          <p className="capitalize">12 aug</p>
        </div>
        <StandardUserBarChart />
      </div>
    </div>
  );
};

export default StandardUserWeeklyStatus;
