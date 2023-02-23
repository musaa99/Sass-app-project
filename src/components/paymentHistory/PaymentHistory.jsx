import React, { useState } from "react";
import { PayHistory } from "../../assets/data/PayHistory";

import Checklist from "../EventsHistory/Eventlog/Checklist";
import AttendanceMenuModal from "../modal/AttendanceMenuModal";

const PaymentHistory = () => {
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [toggleSelect, setToggleSelect] = useState(false);

  //Looping over data
  const items = PayHistory.map((x, index) => {
    return (
        <div className="flex  items-center">
          <div key={index}>
            {toggleSelect && (
              <Checklist
                key={index}
                setActiveItemsCount={setActiveItemsCount}
              />
            )}
          </div>
          <div
            key={index}
            className=" grid grid-cols-5 gap-[11rem] bg-[#F7F8F9] rounded-[10px] px-6 my-2 p-4 "
          >
            <div className="whitespace-nowrap ">{x.date}</div>
            <div className="whitespace-nowrap">{x.payment}</div>
            <div className="whitespace-nowrap">{x.mode}</div>
            <div className="whitespace-nowrap">{x.amount}</div>
            <div className="">{x.status}</div>
          </div>
        </div>
    );
  });

  return (
    <div className="w-[inherit]  px-4  ">
      <h1 className="font-bold text-[30px] pt-4 mb-20">Payment History</h1>

      <div className=" flex justify-between rounded-[10px] px-8 shadow p-4 mt-8   bg-white ">
        <main className="mt-">
          <div className=" text-right  items-center ">
            <div>
              <AttendanceMenuModal
                setToggleSelect={setToggleSelect}
                selectOption={"Select"}
                className="text-right"
              />
            </div>
          </div>
          <div className=" flex   lg:w-[auto] ">
            <div className="">
              {toggleSelect && (
                <h4 className="whitespace-nowrap ml-8 text-[#37A7AE] text-[24px] leading-[36px] font-normal">
                  {activeItemsCount} Selected
                </h4>
              )}
              <div className=" grid grid-cols-5 gap-[10rem] justify-between text-[24px] font-bold px-6 my-2 p-4">
                <div className="whitespace-nowrap">Date </div>
                <div className="whitespace-nowrap  ">Payment</div>
                <div className="whitespace-nowrap lg:ml-[]">Mode</div>
                <div className="whitespace-nowrap lg:ml-[] ">Amount</div>
                <div className="whitespace-nowrap">Status</div>
              </div>
            </div>
          </div>

          <div>{items}</div>
        </main>
      </div>
    </div>
  );
};

export default PaymentHistory;
