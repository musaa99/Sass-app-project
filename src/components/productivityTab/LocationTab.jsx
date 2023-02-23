import { Link, useLocation } from "react-router-dom";
import ProductivityBarChart from "../charts/ProductivityBarChart";
import ArrowRight from "../icons/ArrowRight";
import ProductivityMenuModal from "../modal/ProductivityMenuModal";

export default function LocationTab() {
  const { pathname } = useLocation();
  return (
    <div className="w-full">
      <div className="w-full border-none flex flex-col space-y-4 mb-[50px] ">
        <Link
          to={`${pathname}/users-location-map`}
          className="btn px-10 bg-white w-full max-w-[550px] h-[99px] text-[26px] leading-[39px] font-medium text-black capitalize hover:bg-white border-none justify-between  "
        >
          map <ArrowRight />
        </Link>
        <Link
          to={`${pathname}/jobs`}
          className="btn px-10 bg-white w-full max-w-[550px] h-[99px] text-[26px] leading-[39px] font-medium text-black capitalize justify-between hover:bg-white border-none  "
        >
          jobsite <ArrowRight />
        </Link>
        <Link
          to={`${pathname}/activity`}
          className="btn px-10 bg-white w-full max-w-[550px] h-[99px] text-[26px] leading-[39px] font-medium text-black capitalize justify-between hover:bg-white border-none  "
        >
          activity <ArrowRight />
        </Link>
      </div>

      <div className="w-full max-w-[987px] bg-white py-[30px] px-10">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[30px] text-black/[0.85] capitalize">
            perfomance review
          </p>
          <div className="flex justify-between items-center">
            <select className="select bg-transparent select-info w-[200px] max-w-xs">
              <option defaultValue={"6th - 13th June"}>6th - 13th June</option>
              <option>6th - 13th June</option>
              <option>6th - 13th June</option>
              <option>6th - 13th June</option>
            </select>
            <ProductivityMenuModal />
          </div>
        </div>

        <div className=" flex justify-center ">
          <ProductivityBarChart />
        </div>
      </div>
    </div>
  );
}
