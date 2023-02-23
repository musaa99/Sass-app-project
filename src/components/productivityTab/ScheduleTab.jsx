import { useState } from "react";
import ScheduleAlarmModal from "../modal/ScheduleAlarmModal";

export default function ScheduleTab() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  return (
    <div className="w-full">
      <div className="w-full border-none flex flex-col space-y-4 bg-white px-10 pt-[30px] rounded-[20px] ">
        <p className="text-[26px] font-semibold text-black/[0.85] capitalize ">
          scheduled alarms
        </p>
        <div>
          <div className="flex justify-between items-center  w-full max-w-[545px] bg-[#F7F8F9] rounded-[10px] px-10 py-[38px] ">
            <p className="text-black/[0.85] capitalize font-semibold text-2xl">
              Break time
            </p>
            <select className="select select-bordered w-[200px] max-w-xs border-gray-700 bg-transparent">
              <option>Select time</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          <div className="mt-5 w-full  bg-[#F7F8F9] rounded-[10px] px-10 py-[38px] ">
            <p className="text-black/[0.85] capitalize font-semibold text-2xl">
              Closing time
            </p>
            <div className="mt-3.5 space-y-[26px]">
              {[1, 2].map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between"
                >
                  <p className="text-xl text-black/[0.85] font-medium w-[135px] ">
                    Weekdays
                  </p>
                  <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
                    <option>Select day</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
                    <option>Select time</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="my-5 w-full  bg-[#F7F8F9] rounded-[10px] py-[38px] px-10 ">
            <p className="text-black/[0.85] capitalize font-semibold text-2xl ">
              holidays
            </p>
            <div className="mt-3.5 space-y-[26px]">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between"
                >
                  <p className="text-xl text-black/[0.85] font-medium w-[195px]  ">
                    New Year{"’"}s Day
                  </p>
                  <input
                    type="date"
                    className="input input-bordered w-full max-w-xs border-gray-700 bg-gray-200"
                  />
                  <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
                    <option>Select time</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-full  bg-[#F7F8F9] rounded-[10px] px-10 py-[38px] ">
            <p className="text-black/[0.85] capitalize font-semibold text-2xl">
              outdoor events
            </p>
            <div className="mt-3.5 space-y-[26px]">
              {[1, 2].map((item, index) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between"
                >
                  <p className="text-xl text-black/[0.85] font-medium w-[135px]  ">
                    Operations Department
                  </p>
                  <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
                    <option>Select day</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
                    <option>Select time</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 w-full flex justify-end">
            <div
              onClick={openModal}
              className="btn bg-transparent hover:bg-transparent border-none text-2xl font-semibold text-[#37A7AE] text-right "
            >
              Schedule an Alarm
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] overflow-x-auto rounded-[20px] bg-white h-fit w-full py-10 px-[46px] z-50">
        <p className="text-[26px] font-semibold text-black/[0.85] capitalize mb-[30px] ">
          notifications
        </p>
        <div className="  md:grid grid-cols-2 gap-[46px]   ">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="card w-full min-w-[320px] max-w-[507px] bg-[#F7F8F9] rounded-[10px] shadow-xl "
            >
              <div className="card-body">
                <h2 className="card-title text-2xl font-medium text-black/[0.85] capitalize">
                  sarah adams
                </h2>
                <p className="capitalize font-medium text-[23px] text-black/70">
                  Operations department
                </p>
                <p className="capitalize font-medium text-xl text-black/60">
                  fimaly emergency
                </p>
                <p className="font-normal text-black/60 text-[18px] mb-2 ">
                  <span>02:13 pm. 6th, June 2022.</span>
                </p>
                <div>
                  <select className="select select-bordered w-full max-w-xs text-base bg-white capitalize text-black/[0.85] font-medium">
                    <option>Select option</option>
                    <option>valid</option>
                    <option>investigate</option>
                    <option>invalid</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScheduleAlarmModal open={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
