import UtilityHeader from "../components/headers/UtilityHeader";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ImOffice } from "react-icons/im";
import { getBrannchesFetcher } from "../services/requests";
import useSWR from "swr";
import { FaSpinner } from "react-icons/fa";

export default function OrganizationSetup() {
  const { data: allBranches, error: branchError } = useSWR(
    "api/all-branches",
    getBrannchesFetcher
  );
  return (
    <div className="w-[calc(100vw-330px)] max-w-7xl pb-52  ">
      <div className="w-full">
        <UtilityHeader
          title={"organization setup"}
          subtitle={""}
          backLink={""}
        />
      </div>
      <div className="w-full h-full">
        {branchError && (
          <div className="w-full h-96 flex items-center justify-center">
            <p className="text-2xl text-black">
              oops! a network error has occured, kindly check and try again.
            </p>
          </div>
        )}
        {!branchError && !allBranches && (
          <div className="w-full h-96 flex justify-center items-center space-x-3">
            <FaSpinner className="w-6 h-6" />
            <p className="text-black text-2xl">Loading...</p>
          </div>
        )}
        <div className="grid grid-cols-4 gap-6">
          {allBranches &&
            allBranches.map((branch) => (
              <div key={branch.id} className="w-full">
                <div className="card w-full bg-base-100 h-[200px] shadow-xl image-full  ">
                  <figure>
                    <ImOffice className="w-40 h-40 text-[#37A7AE]" />
                  </figure>
                  <div className="card-body">
                    <div className="card-title"></div>
                    <p></p>
                    <div className="relative">
                      <div className=" card-actions flex-col h-24 rounded-br-2xl opacity-50 rounded-bl-2xl rounded-tr-lg rounded-tl-lg bg-white w-full "></div>
                      <div className="absolute top-4 text-black text-lg font-semibold capitalize w-full text-center">
                        <p>{branch.name}</p>
                        <p>({branch.address})</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-full flex mt-10 justify-center">
          <Link
            to={"/organization-setup/create-branch"}
            type="button"
            className="text-white bg-[#37A7AE] flex space-x-1 font-bold items-center rounded-xl px-8 py-4"
          >
            <AiOutlinePlus className="w-6 h-6" />
            <span className="text-2xl capitalize">create branch</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
