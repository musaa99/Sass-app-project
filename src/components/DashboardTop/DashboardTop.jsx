import React from "react";
import DateIcon from "../icons/DateIcon";
import LocationIcon from "../icons/LocationIcon";

const DashboardTop = ({ user, data, error }) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="flex justify-between py-8">
      <div className="text-black">
        <h1 className="text-2xl mb-1.5 font-bold leading-6 capitalize">
          {error && "Organization name"}
          {!error && !data && "Organization name"}
          {data && data.name}
        </h1>
        <p className="font-normal text-sm leading-6 capitalize ">
          Hello,
          <span className="font-bold text-base mx-1">{user.first_name}</span>
          <span className="font-bold text-base">{user.last_name}</span>
        </p>
      </div>
      <div className="text-[#37A7AE] text-lg font-semibold ">
        <div className="flex items-center ">
          <LocationIcon />
          <h4 className="ml-[3px]">Lagos</h4>
        </div>
        <div className="flex items-center ">
          <DateIcon />
          <h5 className="ml-[3px]">{date}</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
