import { Link, useLocation } from "react-router-dom";
import UtilityHeader from "../../components/headers/UtilityHeader";

export default function Jobs() {
  const { pathname } = useLocation();
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"jobs"} />
      <div className="w-full max-w-[1158px] mb-24 flex flex-col items-center justify-center h-full  ">
        <div className="px-8 py-4 w-full h-auto ">
          <p className="text-center text-[30px] font-normal leading-[45px] text-black/60 mb-5 ">
            No jobs created yet!
          </p>
          <div className="w-full flex justify-center items-center space-x-10">
            <Link
              to={`${pathname}/add-job`}
              className="btn px-10 h-10 text-xl leading-[39px] font-medium text-white hover:bg-[#37A7AE] bg-[#37A7AE] border-none  "
            >
              Add a job
            </Link>
            <button className="btn px-10 h-10 text-xl leading-[39px] font-medium text-[#37A7AE] hover:bg-white bg-white border-[#37A7AE] hover:border-[#37A7AE]  ">
              Import jobs
            </button>
          </div>
        </div>
      </div>
      {/* for when job exists */}
      {/* <div className="w-full max-w-[1158px] mb-24  h-full  "></div> */}
    </main>
  );
}
