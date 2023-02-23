import ActivitySummaryCards from "../../components/ActivitySummaryCards";
import UtilityHeader from "../../components/headers/UtilityHeader";
import CropIcon from "../../components/icons/CropIcon";
import AppActivityTable from "../../components/tables/AppActivityTable";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { useState } from "react";
import AddTask from "../../components/modal/AddTask";

export default function Activity() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"activity"} />
      <div className="w-full mb-24  ">
        <>
          <ActivitySummaryCards />
        </>
        <div className="mt-6 flex space-x-6 ">
          <div className="bg-white rounded-xl flex-1 h-auto p-6 ">
            <p className="text-black font-bold capitalize text-2xl mb-2 ">
              App activity
            </p>
            <AppActivityTable firstCol={"app"} />
          </div>
          <div className="bg-white rounded-xl w-[400px] h-full p-6  ">
            <div className="card-title mb-3 ">
              <div className="bg-[#37A7AE] text-white w-10 h-10 rounded-md flex justify-center items-center">
                <CropIcon />
              </div>
              <p className="text-black font-bold text-2xl">Screenshot</p>
            </div>
            <p className="text-xl text-gray-600 font-medium">Today</p>
            <div className="mt-7">
              <div className="flex justify-between items-center">
                <div className="text-base ">
                  <p className="font-bold text-black mb-5">Every 10 minutes</p>
                  <p className="text-black text-2xl">0.00</p>
                </div>
                <div className="divider divider-horizontal bg-[#37A7AE] w-1 rounded-full"></div>
                <div className="text-base text-black ml-5">
                  <p className="font-bold text-black mb-5">All Screenshots</p>
                  <p className="text-black  text-2xl">0.00</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-bold text-black mb-3">Previous day</p>
              <p className="text-black  text-2xl">0.00</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-6">
          <div className="bg-white rounded-xl flex-1 h-auto p-6 ">
            <p className="text-black font-bold capitalize text-2xl mb-2 ">
              URL activity
            </p>
            <AppActivityTable firstCol={"Website"} />
          </div>
          <div className="flex flex-col space-y-6">
            <button className="btn bg-white hover:bg-white border-none flex-col gap-2 w-[400px] h-[200px] ">
              <IoPersonAddOutline className="w-24 h-24 text-black" />
              <p className="text-black text-2xl">add employee</p>
            </button>
            <button
              onClick={openModal}
              className="btn bg-white hover:bg-white border-none flex-col gap-2 w-[400px] h-[200px] "
            >
              <RiTeamFill className="w-24 h-24 text-black" />
              <p className="text-black text-2xl">add task</p>
            </button>
          </div>
        </div>
      </div>
      <AddTask isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
