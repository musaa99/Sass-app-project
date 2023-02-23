import React from "react";
import { Places } from "../../../../assets/data/Places";

const SuperAdminAttendance = () => {
  return (
    <div className="py-6 px-4 max-w-[436px] w-full rounded-[20px] bg-white shadow ">
      <h1 className="text-2xl font-bold text-black ">Time and Attendance</h1>
      <p className="font-semibold text-[20px] text-black">Branches</p>

      <div>
        <ul className=" mt-[18px] ">
          {Places.map((item, index) => {
            return (
              <button
                key={index}
                className="hover:bg-[#EFF5F5B2] btn gap-2 bg-[#EFF5F5B2] w-full max-w-[406px] my-[12px] px-[17px] flex items-center justify-between"
              >
                {item.title}
                <div>{item.icon}</div>
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SuperAdminAttendance;
