import { useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import UtilityHeader from "../../headers/UtilityHeader";
import ArrowRight from "../../icons/ArrowRight";
import AttendanceMenuModal from "../../modal/AttendanceMenuModal";
import { Tab } from "@headlessui/react";
import { classNames } from "../../OccupancyTab";

export default function OccupancySingleAttendance() {
  const [toggleSelect, setToggleSelect] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"September, 2022"} />
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
              Video Event
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
              Data logs
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-[85px]">
            <Tab.Panel className={classNames("", "")}>
              <div className=" overflow-x-auto w-full bg-white rounded-[20px] py-[26px] mb-[30px] ">
                <div className="flex justify-between items-center mb-8 px-[30px] ">
                  <p className="font-semibold text-2xl text-black/[0.85] capitalize mr-3">
                    weeks
                  </p>
                  {toggleSelect && (
                    <div className="form-control flex-1">
                      <label className="label cursor-pointer justify-evenly">
                        <p className="label-text font-medium text-2xl text-black/60">
                          <span className="mr-2 ">0</span>Selected
                        </p>
                        <input
                          type="checkbox"
                          className="checkbox border-[2px] border-black"
                        />
                      </label>
                    </div>
                  )}
                  <div>
                    <AttendanceMenuModal
                      setToggleSelect={setToggleSelect}
                      selectOption={"Select"}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex w-full px-[70px] ">
                    <div className="w-auto h-auto flex flex-col py-6 mr-[120px] justify-center items-center">
                      <div className="divider flex-1 divider-horizontal ml-10 text-black/[0.85] font-medium text-[20px]">
                        JUNE
                      </div>
                      <div className="text-center text-black/[0.85] font-medium text-[20px]">
                        <p>1st, June 2022 </p>
                        <p>(First Week)</p>
                      </div>
                    </div>
                    <div className="flex-grow place-items-center ">
                      {[1, 2, 3, 3, 4, 5].map((item, index) => (
                        <div key={index} className="form-control ">
                          <label className="labelCheck cursor-pointer">
                            {toggleSelect && (
                              <input
                                type="checkbox"
                                className="checkbox border-[2px] mr-5 border-black"
                              />
                            )}
                            <span
                              onClick={() => navigate(`${pathname}/day`)}
                              className="label-text w-full"
                            >
                              <div className="cursor-pointer flex bg-[#F7F8F9] rounded-[10px] py-[14px] px-6 items-center ">
                                <div className="flex-1 ">
                                  <p className="font-medium text-[22px] capitalize text-black/[0.85] mb-2.5 space-x-1">
                                    <span>30th,</span>
                                    <span>june</span>
                                    <span>2022</span>
                                  </p>
                                  <p className="font-normal text-[18px] text-black/60">
                                  This contains the video events of respective devices for the day.
                                  </p>
                                </div>
                                <div className=" ">
                                  <ArrowRight />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("", "")}>
              {/* <GlobalLockdown /> */}
              <div className=" overflow-x-auto w-full bg-white rounded-[20px] py-[26px] mb-[30px] ">
                <div className="flex justify-between items-center mb-8 px-[30px] ">
                  <p className="font-semibold text-2xl text-black/[0.85] capitalize mr-3">
                    weeks
                  </p>
                  {toggleSelect && (
                    <div className="form-control flex-1">
                      <label className="label cursor-pointer justify-evenly">
                        <p className="label-text font-medium text-2xl text-black/60">
                          <span className="mr-2 ">0</span>Selected
                        </p>
                        <input
                          type="checkbox"
                          className="checkbox border-[2px] border-black"
                        />
                      </label>
                    </div>
                  )}
                  <div>
                    <AttendanceMenuModal
                      setToggleSelect={setToggleSelect}
                      selectOption={"Select"}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex w-full px-[70px] ">
                    <div className="w-auto h-auto flex flex-col py-6 mr-[120px] justify-center items-center">
                      <div className="divider flex-1 divider-horizontal ml-10 text-black/[0.85] font-medium text-[20px]">
                        JUNE
                      </div>
                      <div className="text-center text-black/[0.85] font-medium text-[20px]">
                        <p>1st, June 2022 </p>
                        <p>(First Week)</p>
                      </div>
                    </div>
                    <div className="flex-grow place-items-center ">
                      {[1, 2, 3, 3, 4, 4, 5].map((item, index) => (
                        <div key={index} className="form-control ">
                          <label className="labelCheck cursor-pointer">
                            {toggleSelect && (
                              <input
                                type="checkbox"
                                className="checkbox border-[2px] mr-5 border-black"
                              />
                            )}
                            <span
                               onClick={() => navigate(`${pathname}/day`)}
                              //onClick={() => navigate('/events/dailylog')}
                              className="label-text w-full"
                            >
                              <div className="cursor-pointer flex bg-[#F7F8F9] rounded-[10px] py-[14px] px-6 items-center ">
                                <div className="flex-1 ">
                                  <p className="font-medium text-[22px] capitalize text-black/[0.85] mb-2.5 space-x-1">
                                    <span>30th,</span>
                                    <span>june</span>
                                    <span>2022</span>
                                  </p>
                                  <p className="font-normal text-[18px] text-black/60">
                                  This contains the data events of respective devices for the day.
                                  </p>
                                </div>
                                <div className=" ">
                                  <ArrowRight />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
