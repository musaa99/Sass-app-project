import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeptOptionModal from "../components/modal/DeptOptionModal";
import { AiOutlinePlus } from "react-icons/ai";
import { getAllDeptFetcher } from "../services/requests";
import useSWR from "swr";
import { FaSpinner } from "react-icons/fa";
import LocationSelectBox from "../components/multiSelect/LocationSelectBox";
import { locations } from "../components/productivityTab/selectOptionsData";

const Team = () => {
  const {
    data: allDepartments,
    error,
    isLoading,
  } = useSWR("api/all-dept", getAllDeptFetcher);

  const displayData = [
    {
      id: 1,
      value: `${
        allDepartments && allDepartments.length.toString().length
          ? `0${allDepartments.length}`
          : "00"
      }`,
      title: "team",
    },
    {
      id: 2,
      value: "00",
      title: "lead",
    },
    {
      id: 3,
      value: "00",
      title: "employees",
    },
    {
      id: 4,
      value: "00",
      title: "credentials",
    },
  ];
  return (
    <div className="w-[calc(100vw-290px)] max-w-[1222px] pr-4 pl-6">
      <div className="flex justify-between space-x-[100px] my-5  ">
        <div className="max-w-[839px] flex-1 ">
          <div className="flex-1 h-28 p-[45px] items-center text-center  bg-white rounded flex justify-between">
            {displayData &&
              displayData.map((item) => (
                <div key={item.id}>
                  <p className="font-bold text-black/70 text-5xl leading-7 mb-3">
                    {item.value}
                  </p>
                  <p className="text-sm capitalize text-black/60">
                    {item.title}
                  </p>
                </div>
              ))}
          </div>
          <div className="w-full">
            {error && (
              <div className="w-full h-96 flex items-center justify-center">
                <p className="text-2xl text-black">
                  oops! a network error has occured, kindly check and try again.
                </p>
              </div>
            )}
            {isLoading && (
              <div className="w-full h-96 flex justify-center items-center space-x-3 text-black ">
                <FaSpinner className="w-6 h-6 animate-spin" />
                <p className="text-2xl">Loading...</p>
              </div>
            )}
            {allDepartments &&
              allDepartments.map((dept) => (
                <div
                  key={dept.id}
                  className="rounded-[10px] bg-white h-20 my-5 p-3 relative flex items-center space-x-[106px] "
                >
                  <div>
                    <p className="text-black capitalize text-xl font-medium">
                      {dept.name}
                    </p>
                    <div className="flex text-black/60 space-x-4">
                      <p>3 leads</p>
                      <p>27 employees</p>
                    </div>
                  </div>

                  <div className="absolute top-1 right-1">
                    <DeptOptionModal
                      edit={"edit"}
                      archive={"archive"}
                      deletePerm={"delete"}
                      id={dept.id}
                    />
                  </div>
                </div>
              ))}

            {/* hide when department is created */}
            {allDepartments && allDepartments.length === 0 && (
              <div className="w-60 px-5 py-3 mt-5 items-center text-center bg-white rounded border-2 flex justify-between">
                <Link
                  to={"/team/create-department"}
                  className="font-normal text-black text-xl leading-9 capitalize flex space-x-2 items-center rounded-lg"
                >
                  <AiOutlinePlus />
                  Create Department
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="w-60">
            <LocationSelectBox title={""} data={locations} error={""} />
          </div>

          <div className="my-8  rounded-lg w-60 bg-white p-6">
            <p className="capitalize text-black text-lg font-medium">
              department actions
            </p>
            <Link
              to={"/team/create-department"}
              className="capitalize btn bg-[#F7F8F9] hover:bg-[#F7F8F9] w-full border-none text-black"
            >
              create department
            </Link>
            <Link
              to={"/team/add-employee"}
              className="capitalize btn my-4 bg-[#F7F8F9] hover:bg-[#F7F8F9] w-full border-none text-black"
            >
              add employee
            </Link>
            <Link
              to={"/team/employees"}
              className="capitalize btn bg-[#F7F8F9] hover:bg-[#F7F8F9] w-full border-none text-[#07939BCC]"
            >
              view employees
            </Link>
          </div>

          <div className="rounded-lg w-60 bg-white p-6">
            <p className="capitalize text-black text-xl font-medium">
              all leads
            </p>
            <div className="my-4 capitalize w-full flex space-x-3 items-center ">
              <div className="w-[42px] h-[42px] rounded-full bg-red-900"></div>
              <div className="text-sm font-medium ">
                <p className="text-[#37A7AE]  ">operations</p>
                <p className="text-black">Martha Grey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
