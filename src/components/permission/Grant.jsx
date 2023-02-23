import React, { useState } from "react";
// import { DepartmentData } from "../../../assets/data/DepartmentData";
// import {  useNavigate } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';

const Grant = ({ onClickgrant }) => {
  const [branch, SetBranch] = useState("");
  const [department, SetDepartment] = useState("");
  const [position, SetPosition] = useState("");
  const [email, SetEmail] = useState("");

  //   let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirecting to home page after save
    //    navigate('/Operations')
  };

  return (
    <div className="p-6 ">
      <main className="bg-white  mr-[400px]">
        <h1 class="font-bold text-sm mb-2 ml-1">Grant Access</h1>

        <form className="p-4" action="" onSubmit={handleSubmit}>
          <label class="font-bold text-sm mb-2 ml-1">Branch</label>
          <input
            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            value={branch}
            onChange={(e) => SetBranch(e.target.value)}
            placeholder="Staff name"
            type="text"
          />
          <label class="font-bold text-sm mb-2 ml-1">Email</label>
          <input
            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="Enter email Address"
            type="email"
          />
          <label class="font-bold text-sm mb-2 ml-1">Role</label>
          <input
            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            value={department}
            onChange={(e) => SetDepartment(e.target.value)}
            placeholder="Role"
            type="text"
          />
          <label class="font-bold text-sm mb-2 ml-1">Duration</label>
          <input
            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            value={position}
            onChange={(e) => SetPosition(e.target.value)}
            placeholder="Duration"
            type="text"
          />
          <div className="pt-[10px] items-center flex w-auto m-auto  justify-end  ">
            <button
              onClick={onClickgrant}
              onSubmit={(e) => handleSubmit(e)}
              className=" rounded   bg-[#cccccc] w-[129px] h-[59px] text-[20px]"
              // className={}
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Grant;
