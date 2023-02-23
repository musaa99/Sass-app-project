import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

export default function UtilityHeader({ title, subtitle = "", backLink }) {
  return (
    <div className="mt-5 mb-5 w-full ">
      <div className="w-full flex justify-between items-center ">
        <h1 className="capitalize font-bold text-black text-2xl leading-7  ">
          {title}
        </h1>
        <select className="select bg-transparent select-info w-[120px] ">
          <option defaultValue={"Abuja"}>Abuja</option>
          <option>New York</option>
          <option>Florida</option>
          <option>Lagos</option>
        </select>
      </div>
      {subtitle && (
        <div className="flex space-x-2 items-center ">
          <div className="text-sm font-medium text-black/70 capitalize space-x-1">
            <p className="flex items-center space-x-2">
              {subtitle} <FaAngleLeft className=" w-6 h-6 " />
            </p>
          </div>
          <Link
            to={backLink}
            className="self-end btn btn-active btn-link hover:bg-transparent border-none text-[#07939BCC] text-sm capitalize"
          >
            back
          </Link>
        </div>
      )}
    </div>
  );
}
