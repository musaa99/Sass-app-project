import { useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UtilityHeader from "../../components/headers/UtilityHeader";
import AttendanceMenuModal from "../../components/modal/AttendanceMenuModal";

export default function Attendances() {
  const { pathname } = useLocation();
  const [month, setMonth] = useState("");
  const monthRef = useRef();

  const pickMonth = () => setMonth(monthRef.current.innerText);

  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"attendance"} />
      <div className=" h-full overflow-x-auto w-full ">
        {[1, 2, 3, 3, 4].map((item, index) => (
          <div
            key={index}
            className="flex bg-white rounded-[10px] py-5 px-6 mb-5 "
          >
            <div onClick={pickMonth} className="flex-1 cursor-pointer ">
              <span className="font-medium text-[26px] capitalize text-black/[0.85] mb-2.5 space-x-1">
                <span ref={monthRef}>september</span>,<span>2022</span>
              </span>
              <p className="font-normal text-xl text-black/60">
                This contains the time and attendance records for the month.
              </p>
            </div>
            <div className=" ">
              <AttendanceMenuModal />
            </div>
          </div>
        ))}
        {month && <Navigate to={`${pathname}/${month}`} replace={true} />}
      </div>
    </main>
  );
}
