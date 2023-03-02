import { Tab } from "@headlessui/react";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import MapIcon from "../icons/MapIcon";
import MapTab from "./MapTab";
import {
  arrivalTimeData,
  departureTimeData,
  employeesData,
} from "./selectOptionsData";
import DeptSelectBox from "../multiSelect/DeptSelectBox";
import EmployeesSelectBox from "../multiSelect/EmployeesSelectBox";
import TimerSelectBox from "../multiSelect/TimerSelectBox";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function JobTab({ data, error, setMethod, value }) {
  return (
    <div className="w-full px-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex flex-col space-y-[16px] mb-10 ">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-fit text-lg capitalize font-medium leading-6 text-left border-none outline-none ",
                " ",
                selected ? " text-[#37A7AE] " : " text-black/[0.85] "
              )
            }
          >
            Add job location
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-fit text-lg capitalize font-medium leading-6 text-left border-none outline-none ",
                "",
                selected ? " text-[#37A7AE] " : " text-black/[0.85] "
              )
            }
          >
            Configure settings
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className={classNames("", "")}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-black/[0.85] text-[23px] font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full bg-transparent border-gray-400 "
              />
            </div>
            <div className="form-control w-full mb-4 ">
              <label className="label">
                <span className="label-text text-black/[0.85] text-[22px] font-medium">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter address"
                className="input input-bordered w-full bg-transparent border-gray-400 "
              />
            </div>
            <div className="mb-[51px] ">
              <label
                htmlFor="radius"
                className="text-black/[0.85] text-[22px] font-medium"
              >
                Radius
              </label>
              <input
                type="range"
                id="radius"
                name="radius"
                min="0"
                max=""
                className="mt-2 range-accent range"
              />
            </div>
            <div className="w-full bg-[#BFE3E8] h-[636px] max-w-[751px] pt-[93px] px-[9px] flex flex-col justify-between ">
              <div>
                <div className="w-[58px] h-[100px] bg-white p-2.5 rounded-[10px] ">
                  <div className="cursor-pointer mb-2 bg-[#37A7AE] w-[38px] h-[35px] flex justify-center items-center rounded-[10px] ">
                    <PlusIcon />
                  </div>
                  <div className="cursor-pointer bg-[#37A7AE] w-[38px] h-[35px] flex justify-center items-center rounded-[10px] ">
                    <MinusIcon />
                  </div>
                </div>
                <div className="cursor-pointer w-[50px] h-[46px] mt-[43px] bg-white flex justify-center items-center rounded-[10px]">
                  <MapIcon />
                </div>
              </div>
              <div className="self-center mb-[9px] h-[68px] ">
                <MapTab />
              </div>
            </div>
            <div className="w-full  space-x-5 mt-[50px] flex justify-center ">
              <Link
                to={"/utility/productivity-management/jobs"}
                className="btn btn-ghost max-w-[160px] border-[#37A7AE] hover:border-[#37A7AE] text-black/[0.85] text-sm font-semibold capitalize w-full"
              >
                back
              </Link>
              <button className="btn bg-[#37A7AE] max-w-[160px] hover:bg-[#37A7AE] border-none outline-none text-sm font-semibold text-white capitalize w-full ">
                Next
              </button>
            </div>
          </Tab.Panel>
          <Tab.Panel className="space-y-[30px]">
            <DeptSelectBox
              title={"teams"}
              data={data}
              error={error}
              setMethod={setMethod}
              value={value}
            />
            <EmployeesSelectBox
              title={"employees"}
              data={employeesData}
              error={""}
            />
            <TimerSelectBox
              title={"timer (on arrival)"}
              data={arrivalTimeData}
              error={""}
              // setMethod={setMethod}
              // value={value}
            />
            <TimerSelectBox
              title={"timer (on departure)"}
              data={departureTimeData}
              error={""}
              // setMethod={setMethod}
              // value={value}
            />
            <div className="w-full  space-x-5 mt-[50px] flex justify-center">
              <Link
                to={"/utility/productivity-management/jobs"}
                className="btn btn-ghost max-w-[160px]  border-[#37A7AE] hover:border-[#37A7AE] text-black/[0.85] text-sm font-semibold capitalize w-full"
              >
                back
              </Link>
              {/* <button className="btn btn-ghost max-w-[160px] border-[#37A7AE] hover:border-[#37A7AE] text-black/[0.85] text-sm font-semibold capitalize w-full">
                cancel
              </button> */}
              <button className="btn bg-[#37A7AE] max-w-[160px] hover:bg-[#37A7AE] border-none outline-none text-sm font-semibold text-white capitalize w-full ">
                save
              </button>
            </div>
            {/* <div className="w-full">
              
            </div> */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
