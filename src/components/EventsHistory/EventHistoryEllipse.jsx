import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Menu } from "@headlessui/react";

import dotsThreeVertical from "@iconify/icons-entypo/dots-three-vertical";
import { useNavigate } from "react-router-dom";
import DeleteAttendanceModal from "../modal/DeleteAttendanceModal";

const EventHistoryEllipse = ({ title, x}) => {
  const navigate = useNavigate()
  const [viewMonth, setViewMonth] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);



  const handleClickMonth = (x) => {
    setViewMonth(x);
    console.log("xxxx", x);
     navigate(`/events/log`)
  };
  const SavetoDevice = (x) => {
    console.log("edited", x);
  };
  const SendtoMail = (x) => {
    console.log("edited", x);
  };

  const handleDelete = (x) => {
    console.log("deleted", x);
  };

  return (
    <main   className=" flex justify-between rounded-[10px] bg-white  shadow  text-[24px] h-[100px] m-auto px-6 font-small m-1 py-4 my-2  w-[auto]  lg:w-[606px]">
      <div onClick={(x) => handleClickMonth(x)}  >
        <h4 className=" h-[30px] w-[max-content]"> {title} </h4>
      </div>
      <div  className="">
        <Icon
          onClick={() => setIsActive((prev) => !prev)}
          className="ml-5   "
          icon={dotsThreeVertical}
        />

        <div
          className={
            isActive
              ? " absolute lg:right-[27rem] grid grid-cols-1 text-right gap-2  w-[auto]   "
              : "hidden"
          }
        >
          <div className="  grid grid-cols-1 text-right gap-2 bg-white p-4 shadow w-[auto] ">
            <button
              className=" border-b-2 text-start"
              onClick={() => SendtoMail(x)}
            >
              Mail
            </button>
            <button className="text-start border-b-2" onClick={() => SavetoDevice(x)}>
              Save to device
            </button>
            <div className="px-1 py-1">
             
            </div>
          </div>
        </div>
      </div>
      <DeleteAttendanceModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default EventHistoryEllipse;
