import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UtilityHeader from "../../headers/UtilityHeader";
import ArrowRight from "../../icons/ArrowRight";
import AttendanceMenuModal from "../../modal/AttendanceMenuModal";

export default function SingleAttendance() {
  const [toggleSelect, setToggleSelect] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader
        title={"attendance"}
        subtitle={"june, 2022"}
        backLink={"/utility/time-attendance/attendances"}
      />

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
                            This contains the time and attendance records for
                            the month.
                          </p>
                        </div>
                        <div className=" ">
                          <ArrowRight />
                        </div>
                      </div>
                    </span>
                  </label>
                </div>
                // <div
                //   key={index}
                //   className="cursor-pointer flex bg-[#F7F8F9] rounded-[10px] py-5 px-6 mb-5 items-center "
                // >
                //   <div className="flex-1 ">
                //     <p className="font-medium text-[26px] capitalize text-black/[0.85] mb-2.5 space-x-1">
                //       <span>30th,</span>
                //       <span>june</span>
                //       <span>2022</span>
                //     </p>
                //     <p className="font-normal text-xl text-black/60">
                //       This contains the time and attendance records for the
                //       month.
                //     </p>
                //   </div>
                //   <div className=" ">
                //     <ArrowRight />
                //   </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
