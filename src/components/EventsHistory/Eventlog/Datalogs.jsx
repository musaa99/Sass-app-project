import React, { useState } from "react";
import { Icon } from "@iconify/react";
  import dotsThreeVertical from "@iconify/icons-entypo/dots-three-vertical";
// import { Link } from "react-router-dom";

import { Datalogs } from "../../../assets/data/Datalog";
import Checklist from "./Checklist";
import MonthEllipse from "./MonthEllipse";
import { useNavigate } from "react-router-dom";

const Datalog = ({ onClickExpand }) => {
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // const [viewDpt, setViewDpt] = useState(false);
  const navigate = useNavigate()

  const handleClick = (x) => {
    // setViewDpt(true);
    console.log("view", x);
     navigate("/events/dailylog")
  };

  //Looping over data
  const items = Datalogs.map((x, index) => {
    return (
      <div key={index} className="flex">
        <div className="flex items-center">
          <div>
            <Checklist key={index} setActiveItemsCount={setActiveItemsCount} />
          </div>
          <div  onClick={() => handleClick(x)} className=" flex items-center justify-between bg-[#F7F8F9] rounded-[10px] mr-[115px] border w-[700px] p-2 my-[10px] ">
            <div>
              <div className="font-medium text-[22px] leading-[33px]">
                {x.Month}
              </div>
              <div className="font-normal text-[18px] leading-[27px] text-black/60">
                {x.log}
              </div>
            </div>
            <Icon icon="eva:arrow-ios-back-fill" rotate={2} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" flex justify-between px-4   bg-white ">
    <div className="mt-6">
      <h1 className="whitespace-nowrap  text-[24px] leading-[36px] font-medium">
        weeks
      </h1>
    </div>
    <main className="mt-6">
      <div className=" flex mx-4  lg:w-[700px] ">
        <div className="whitespace-nowrap ml-8 text-[#37A7AE] text-[24px] leading-[36px] font-medium">
          {/* <h1 className=" whitespace-nowrap    ml-8 text-[#37A7AE] text-[24px] leading-[36px] font-medium"> */}
          <h1 className="">{activeItemsCount} Selected</h1>
        </div>

        <div className=" flex lg:ml-[28rem]">
          <Checklist setActiveItemsCount={setActiveItemsCount} />
          <Icon  onClick={() => setIsActive((prev) => !prev)} className=" ml-[5rem]   " icon={dotsThreeVertical} />
          <div  className={
            isActive
              ? " absolute lg:right-[10rem] pt-8 grid grid-cols-1 text-right gap-2 h-[297px] w-[269px]   "
              : "hidden"
          }> <MonthEllipse/>
          </div>
        </div>
      </div>

      <div>{items}</div>
    </main>
  </div>
  );
};

export default Datalog;
