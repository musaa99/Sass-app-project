import React from "react";
import { PermissionData } from "../../assets/data/PermissionData";

const Permission = ({ onClickgrant}) => {
  return (
    <div className=" w-[inherit] p-6">
      <h1 className="font-bold text-[30px] mb-20">Permission</h1>
      <h3>Permissions granted from Super administrator</h3>
      <p className="w-[auto]">
        You can grant and revoke access to special permissions. By granting
        access any changes made will be permanent.
      </p>
      <div className="bg-white rounded-[10px]  ">
        <div className="grid grid-cols-5 gap-[10rem] text-[24px] font-bold px-6 my-2 p-4">
          <div className="whitespace-nowrap">Branch </div>
          <div className="whitespace-nowrap  ">Email Address</div>
          <div className="whitespace-nowrap lg:ml-[5rem]">Role</div>
          <div className="whitespace-nowrap lg:ml-[] ">Duration</div>
          <div className="whitespace-nowrap">Status</div>
        </div>
        <div className=" rounded-[10px] p-2   ">
          {PermissionData.map((x, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-[10rem] bg-[#F7F8F9] rounded-[10px] px-6 my-2 p-4 "
            >
              <div className="whitespace-nowrap ">{x.branch}</div>
              <div className="whitespace-nowrap">{x.email}</div>
              <div className="whitespace-nowrap lg:ml-[5rem] ">{x.role}</div>
              <div className="whitespace-nowrap">{x.duration}</div>
              <div className="">{x.status}</div>
            </div>
          ))}
        </div>
        <div className="pt-[10px] flex w-auto m-auto  justify-end  ">
          <button onClick={ onClickgrant}
            className=" rounded p-5  text-[#37A7AE] w-[219px] h-[67px] font-normal text-[26px]"
          >
            <span>+</span>Grant access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Permission;
