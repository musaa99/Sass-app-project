import { Tab } from "@headlessui/react";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import MapIcon from "../icons/MapIcon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MapTab() {
  return (
    <div className="w-full px-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-[20px] py-3 px-5 bg-white rounded-[10px] text-w-full max-w-[267px] mb-10">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full text-xl capitalize font- text-center py-[7px] px-5 border-none outline-none bg-black/10  ",
                "",
                selected ? " text-[#37A7AE] " : " text-black/[0.85] "
              )
            }
          >
            Map
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full text-xl capitalize font- text-center py-[7px] px-5 border-none outline-none bg-black/10  ",
                "",
                selected ? " text-[#37A7AE] " : " text-black/[0.85] "
              )
            }
          >
            Satellite
          </Tab>
        </Tab.List>
        {/* <Tab.Panels className="">
          <Tab.Panel className={classNames("", "")}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-black/[0.85] text-[22px] font-medium">
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
            <div className="w-full bg-[#BFE3E8] h-[636px] pt-[93px] pl-[9px] ">
              <div className="w-[58px] h-[100px] bg-white p-2.5 rounded-[10px] ">
                <div className="mb-2 bg-[#37A7AE] w-[38px] h-[35px] flex justify-center items-center rounded-[10px] ">
                  <PlusIcon />
                </div>
                <div className="bg-[#37A7AE] w-[38px] h-[35px] flex justify-center items-center rounded-[10px] ">
                  <MinusIcon />
                </div>
              </div>
              <div className="w-[50px] h-[46px] mt-[43px] bg-white flex justify-center items-center rounded-[10px]">
                <MapIcon />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels> */}
      </Tab.Group>
    </div>
  );
}
