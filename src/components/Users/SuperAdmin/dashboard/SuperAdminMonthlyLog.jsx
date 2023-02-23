import React from "react";
import MonthlyPieChart from "../../../charts/MonthlyPieChart";
// import { PieChart } from "react-minimal-pie-chart";

const SuperAdminMonthlyLog = () => {
  return (
    <div className=" bg-white max-w-[669px] w-full rounded-[20px] shadow p-6">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-2xl font-bold text-black mb-[1px]">
            Monthly Log
          </h1>
          <p className="font-normal text-base text-gray-600">
            Monthly record of employees
          </p>
        </div>
        <select className="select bg-transparent select-info w-[200px] max-w-xs">
          <option defaultValue={"Abuja"}>Abuja</option>
          <option>New York</option>
          <option>Florida</option>
          <option>Lagos</option>
        </select>
      </div>
      <div className="flex space-x-[43px] mt-6 items-center ">
        <div className="w-[187px] h-[187px]">
          <MonthlyPieChart />
        </div>
        ;
        <div className="grid grid-cols-2  ">
          <div className="mr-3 mb-[6px] flex ">
            <div className="pt-[6px] mr-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-black">
                Fingerprint
              </h3>
              <p className="text-gray-800 text-sm">
                25% of employees used Fingerprint
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="pt-[6px] mr-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-black">RFID Card</h3>
              <p className="text-gray-800 text-sm">
                20% of employees used RFID card
              </p>
            </div>
          </div>
          <div className="mr-3 flex ">
            <div className="pt-[6px] mr-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-black">PIN</h3>
              <p className="text-gray-800 text-sm">15% of employees used Pin</p>
            </div>
          </div>
          <div className="flex">
            <div className="pt-[6px] mr-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-black">Mobile App</h3>
              <p className="text-gray-800 text-sm">
                40% of employees used Mobile App
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminMonthlyLog;
