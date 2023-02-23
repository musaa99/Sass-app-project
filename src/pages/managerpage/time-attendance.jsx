import { Link, useLocation, useParams } from "react-router-dom";
import UtilityHeader from "../../components/headers/UtilityHeader";
import ArrowRight from "../../components/icons/ArrowRight";
import AttendanceMenuModal from "../../components/modal/AttendanceMenuModal";

export default function TimeAttendance() {
  const { pathname } = useLocation();
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"time & attendance"} />

      {/* attendance section */}
      <div className="mb-[50px] overflow-x-auto rounded-[20px] bg-white h-fit w-full px-10 py-[15px] ">
        <p className=" text-[30px] leading-[45px] text-black/[0.85] font-semibold px-5 capitalize mb-[30px] ">
          attendance
        </p>
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex bg-[#F7F8F9] rounded-[10px] py-5 px-6 mb-5 "
          >
            <div className="flex-1">
              <p className="font-medium text-[26px] capitalize text-black/[0.85] mb-2.5">
                september, <span>2022</span>
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
        <Link
          to={`${pathname}/attendances`}
          className="w-full my-3 flex items-center justify-end "
        >
          <button className="btn btn-link text-[#37A7AE] no-underline font-medium text-base capitalize ">
            see more <ArrowRight />
          </button>
        </Link>
      </div>

      {/* leave section */}
      <div className="mb-[50px] overflow-x-auto rounded-[20px] bg-white h-fit w-full px-10 py-[15px] ">
        <p className=" text-[30px] leading-[45px] text-black/[0.85] font-semibold px-5 capitalize mb-[30px] ">
          leave
        </p>
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex bg-[#F7F8F9] rounded-[10px] py-5 px-6 mb-5 "
          >
            <div className="flex-1">
              <p className="font-medium text-[26px] capitalize text-black/[0.85] ">
                Grace Johnson
              </p>
              <p className="font-normal text-xl text-black/60 mt-0.5 mb-3">
                Sick Leave
              </p>
              <p className="font-normal text-[22px] text-black/[0.85]">
                Leave from: <span>2nd Aug</span> - <span>10th Aug</span>
              </p>
            </div>
            <div className="w-fit h-auto flex items-center text-black/70">
              <ArrowRight />
            </div>
          </div>
        ))}
        <Link
          to={`${pathname}/leave`}
          className="w-full my-3 flex items-center justify-end "
        >
          <button className="btn btn-link text-[#37A7AE] no-underline font-medium text-base capitalize ">
            see more <ArrowRight />
          </button>
        </Link>
      </div>

      {/* overtime section */}
      <div className="mb-[50px] overflow-x-auto rounded-[20px] bg-white h-fit w-full px-10 py-[15px] ">
        <p className=" text-[30px] leading-[45px] text-black/[0.85] font-semibold px-5 capitalize mb-[30px] ">
          overtime
        </p>
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="flex bg-[#F7F8F9] rounded-[10px] py-5 px-6 mb-5 "
          >
            <div className="flex-1">
              <p className="font-medium text-[26px] capitalize text-black/[0.85] ">
                Kal Norman
              </p>
              <p className="font-normal text-xl text-black/60 mt-0.5 mb-3">
                Operations department
              </p>
              <p className="font-normal text-[22px] text-black/[0.85]">
                2 hrs overtime on<span>2nd Aug</span>
              </p>
            </div>
            <div className="w-fit h-auto flex items-center text-black/70">
              <ArrowRight />
            </div>
          </div>
        ))}
        <Link
          to={`${pathname}/overtime`}
          className="w-full my-3 flex items-center justify-end "
        >
          <button className="btn btn-link text-[#37A7AE] no-underline font-medium text-base capitalize ">
            see more <ArrowRight />
          </button>
        </Link>
      </div>
    </main>
  );
}
