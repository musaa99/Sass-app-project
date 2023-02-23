import { Tab } from "@headlessui/react";
import AttendanceMenuModal from "./modal/AttendanceMenuModal";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import GlobalLockdown from "./GlobalLockdown";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OccupancyTab() {
  const { pathname } = useLocation();
  const [month, setMonth] = useState("");
  const monthRef = useRef();

  const pickMonth = () => setMonth(monthRef.current.innerText);
  return (
    <div className="w-full px-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-[62px] rounded-[5px] py-[26px] px-[57px] bg-white w-full">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full shadow rounded-[5px] py-[30px] bg-[#F7F8F9] text-[26px] capitalize font-semibold leading-[36px] ",
                "",
                selected
                  ? " text-black/[0.85] border-2 rounded-[5px] border-[#37A7AE] "
                  : "text-black/30  "
              )
            }
          >
            intrusion detection
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full shadow rounded-[5px] py-[30px] bg-[#F7F8F9] text-[26px] capitalize font-semibold leading-[36px] ",
                "",
                selected
                  ? " text-black/[0.85] border-2 rounded-[5px] border-[#37A7AE] "
                  : "text-black/30  "
              )
            }
          >
            global lockdown
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-[85px]">
          <Tab.Panel className={classNames("", "")}>
            {[1, 2, 3, 4, 4].map((item, index) => (
              <div
                key={index}
                className="flex bg-white rounded-[10px] h-[119px] py-5 px-6 mb-5 max-w-[823px] "
              >
                <div onClick={pickMonth} className="flex-1">
                  <p className="font-medium text-[26px] capitalize text-black/[0.85] mb-2.5">
                    <span ref={monthRef}>september</span>,<span>2022</span>
                  </p>
                  <p className="font-normal text-xl text-black/60">
                    This contains the time and attendance records for the month.
                  </p>
                </div>
                <div className=" ">
                  <AttendanceMenuModal />
                </div>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className={classNames("", "")}>
            <GlobalLockdown />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {month && <Navigate to={`${pathname}/${month}`} replace={true} />}
    </div>
  );
}
