import React, { useState } from "react";
import Checklist from "./Checklist";
import { DailyDatalog } from "../../../assets/data/DailyDatalog";
import AttendanceMenuModal from "../../modal/AttendanceMenuModal";

const DailyEventlog = () => {
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [toggleSelect, setToggleSelect] = useState(false);


  //Looping over data
  const items = DailyDatalog.map((x, index) => {
    return (
      <div className="">
        <div className="flex  items-center">
          <div key={index}>
          {toggleSelect && (
                   
            <Checklist    key={index} setActiveItemsCount={setActiveItemsCount} />
                  )}
          </div>
          <div className=" grid grid-cols-4 gap-4  bg-[#F7F8F9] rounded-[10px] border lg:w-[862px] py-4 my-2 ">
            <div className="whitespace-nowrap">{x.Time} </div>
            <div className="whitespace-nowrap ">{x.Credential}</div>
            <div className="whitespace-nowrap">{x.Event}</div>
            <div className="whitespace-nowrap">{x.Access}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-[inherit] pl-8 ">
      <div>
        <h1 className="text-[30px] leading-[45px] font-bold ">Data Logs</h1>
        <p>26th, Septmber 2022</p>
      </div>
      <div className=" flex justify-between rounded-[10px] shadow p-4 mt-8 w-[962px]  bg-white ">
        <main className="mt-6">
          <div className="flex gap-[40rem] items-center w-auto ">
            <h2 className="text-[30px] leading-[45px] font-bold ">
              Front Door
            </h2>
            <div>
              <AttendanceMenuModal
                setToggleSelect={setToggleSelect}
                selectOption={"Select"}
              />
            </div>
          </div>
          <div className=" flex mx-4  lg:w-[962px] ">
            <div className="">
            {toggleSelect && (
                    
              <h4 className="whitespace-nowrap ml-8 text-[#37A7AE] text-[24px] leading-[36px] font-normal">
                {activeItemsCount} Selected
              </h4>
                  )}
              <div className="grid grid-cols-4 text-[26px] leading-[39px] font-medium ml-4 w-[862px] py-4 my-2">
                <h4>Time</h4>
                <h4>Event</h4>
                <h4>Credential</h4>
                <h4>accessed by</h4>
              </div>
            </div>
          </div>

          <div>{items}</div>
        </main>
      </div>
    </div>
  );
};

export default DailyEventlog;
