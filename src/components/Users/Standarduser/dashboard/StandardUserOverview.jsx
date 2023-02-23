import React from "react";

const StandardUserOverview = () => {
  return (
    <div className=" bg-white shadow rounded-[20px] max-w-[400px] w-full px-6 py-2">
      <div className="mb-4">
        <h1 className="text-xl text-black mb-2 font-bold leading-[45px]">
          Overview
        </h1>
        <div className="flex items-center text-base">
          <p className="text-black font-medium mr-2">Branch:</p>
          <p className="font-normal text-black leading-[30px] ">Abuja</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index}>
            <h1 className="text-sm text-black font-semibold text-left ">4</h1>
            <p className="text-sm text-black font-normal leading-[30px]">
              Departments
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandardUserOverview;
