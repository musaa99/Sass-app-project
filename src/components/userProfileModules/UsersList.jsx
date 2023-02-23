import Pagination from "../Pagination";
import { adminPaginate, standardPaginate } from "../../paginate";
import { useState } from "react";
import { adminUsers, standardUsers } from "../../assets/data/userProfileBoard";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentStandard, setCurrentStandard] = useState(1);
  const [pageSize] = useState(4);
  const administrativeUsers = adminPaginate(adminUsers, currentPage, pageSize);
  const standardUser = standardPaginate(
    standardUsers,
    currentStandard,
    pageSize
  );

  const handlePageChange = (pageNumber, totalPages) => {
    if (pageNumber !== "prev" && pageNumber !== "next")
      setCurrentPage(pageNumber);
    else if (pageNumber === "prev" && currentPage > 1)
      setCurrentPage(currentPage - 1);
    else if (pageNumber === "next" && currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  };
  const handlePageForStandard = (standNum, totalPages) => {
    if (standNum !== "prev" && standNum !== "next")
      setCurrentStandard(standNum);
    else if (standNum === "prev" && currentStandard > 1)
      setCurrentStandard(currentStandard - 1);
    else if (standNum === "next" && currentStandard < totalPages)
      setCurrentStandard(currentStandard + 1);
  };

  return (
    <main className=" my-[59px] w-full">
      <div>
        <div className="flex w-full items-center justify-between mb-8">
          <p className="capitalize text-[30px] font-bold text-black/[0.85] ">
            branch: <span>new york</span>
          </p>
          <select className="select bg-transparent select-info w-[200px] max-w-xs">
            <option defaultValue={"Abuja"}>Abuja</option>
            <option>New York</option>
            <option>Florida</option>
            <option>Lagos</option>
          </select>
        </div>
        <div className="mb-3">
          <p className="capitalize text-[30px] font-medium text-black/[0.85] mb-4">
            administrator
          </p>
          {administrativeUsers.map((item, index) => (
            <Link
              to={`${item.id} `}
              key={item.id}
              className="btn w-full h-24 max-w-xl bg-white hover:bg-[#07939BCC] flex justify-start items-center rounded-[20px] px-6 mb-3 "
            >
              <div className="bg-red-800 rounded-full flex items-center justify-center w-16 h-16 mr-8">
                {item.avatar}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-black/[0.85] text-2xl capitalize mb-2">
                  {item.name}
                </p>
                <p className="capitalize font-normal text-[20px] text-black/60">
                  {item.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          itemsCount={adminUsers.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <div className="divider my-8"></div>
        <div>
          <p className="capitalize text-[30px] font-medium text-black/[0.85] mb-4 ">
            standard user
          </p>
          {standardUser.map((item, index) => (
            <div
              key={index}
              className="btn w-full h-24 max-w-xl bg-white hover:bg-[#07939BCC] flex justify-start rounded-[20px] px-6 mb-3 "
            >
              <div className="bg-green-800 rounded-full flex items-center justify-center w-16 h-16 mr-8">
                {item.avatar}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-black/[0.85] text-2xl capitalize mb-2">
                  {item.name}
                </p>
                <p className="capitalize font-normal text-[20px] text-black/60">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        itemsCount={standardUsers.length}
        pageSize={pageSize}
        currentPage={currentStandard}
        onPageChange={handlePageForStandard}
      />
    </main>
  );
}
