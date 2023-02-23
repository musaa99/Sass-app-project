import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import useSWR from "swr";
import {
  createEmployee,
  getAllDeptFetcher,
  getAllPositionsFetcher,
  getBrannchesFetcher,
} from "../services/requests";
import CredentialSelect from "../components/multiSelect/CredentialSelect";
import DeptSelectBox from "../components/multiSelect/DeptSelectBox";
import PostSelectBox from "../components/multiSelect/PostSelectBox";
import { statusArray } from "../components/productivityTab/selectOptionsData";
import BranchSelectBox from "../components/multiSelect/BranchSelect";
import StatusSelectBox from "../components/multiSelect/StatusSelectBox";

const Addemployee = () => {
  const { data: allDepartments, error: departmentsError } = useSWR(
    "api/all-dept",
    getAllDeptFetcher,
    {
      refreshInterval: 3000,
      refreshWhenHidden: true,
    }
  );
  const { data: allPositions, error: positionsError } = useSWR(
    "api/all-positions",
    getAllPositionsFetcher,
    {
      refreshInterval: 3000,
      refreshWhenHidden: true,
    }
  );
  const { data: allBranches, error: branchError } = useSWR(
    "api/all-branches",
    getBrannchesFetcher
  );
  const [isPicked, setIsPicked] = useState(new Array(4).fill(false));
  const [employeeDetails, setEmployeeDetails] = useState({
    staffName: "",
    staffID: "",
    deptID: "",
    postID: "",
    branchID: "",
    email: "",
    status: "",
  });
  const canCreate =
    Boolean(employeeDetails.staffName) &&
    Boolean(employeeDetails.staffID) &&
    Boolean(employeeDetails.email);

  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    const details = {
      staff_id: employeeDetails.staffID,
      name: employeeDetails.staffName,
      email: employeeDetails.email,
      branch_id: employeeDetails.branchID,
      department_id: employeeDetails.deptID,
      position_id: employeeDetails.postID,
      status: employeeDetails.status,
      credentials: {
        FINGERPRINT: isPicked[0],
        RFID_CARD: isPicked[1],
        MOBILE_APP: isPicked[2],
        PIN: isPicked[3],
      },
    };
    const createRes = await createEmployee(details);
    if (createRes.status) {
      console.log(createRes.message);
      setEmployeeDetails({
        ...employeeDetails,
        staffName: "",
        staffID: "",
        deptID: "",
        postID: "",
        branchID: "",
        phone: "",
        email: "",
        status: "",
      });
    }
  };

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setEmployeeDetails({
      ...employeeDetails,
      [event.target.name]: value,
    });
  };

  return (
    <div className="w-[calc(100vw-290px)] pl-6 pr-4 max-w-[1222px] bg-[#F5F5F5] pb-24">
      <div className="my-5 w-full max-w-[700px] pb-96 ">
        <h1 className="capitalize font-bold text-black text-2xl leading-7  ">
          add employee
        </h1>
        <div className="flex space-x-2 items-center ">
          <div className="text-sm font-medium text-black/70 capitalize space-x-1">
            <p className="flex items-center space-x-2">
              team <FaAngleLeft className=" w-6 h-6 " />
            </p>
          </div>
          <Link
            to={"/team"}
            className="self-end btn btn-active btn-link hover:bg-transparent border-none text-[#07939BCC] text-sm capitalize"
          >
            back
          </Link>
        </div>

        <form
          className=" bg-white mt-3 rounded-xl p-6 max-w-xl "
          onSubmit={handleCreateEmployee}
        >
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text text-black capitalize font-medium">
                Staff name
              </span>
            </label>
            <input
              name="staffName"
              value={employeeDetails.staffName}
              type="text"
              onChange={onChangeHandler}
              placeholder="Enter staff name"
              className="input input-bordered w-full bg-white border-gray-400 text-black text-xs "
            />
          </div>

          <div className="mb-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black capitalize font-medium">
                  Staff ID
                </span>
              </label>
              <input
                name="staffID"
                value={employeeDetails.staffID}
                type="text"
                onChange={onChangeHandler}
                placeholder="Enter staff ID"
                className="input input-bordered w-full bg-white border-gray-400 text-black text-xs"
              />
            </div>
          </div>

          <div className="w-full flex space-x-4 mb-2">
            <DeptSelectBox
              title={"department"}
              data={allDepartments}
              error={departmentsError}
              setMethod={setEmployeeDetails}
              value={employeeDetails}
            />
            <PostSelectBox
              title={"position"}
              data={allPositions}
              error={positionsError}
              setMethod={setEmployeeDetails}
              value={employeeDetails}
            />
          </div>

          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text text-black capitalize font-medium">
                email
              </span>
            </label>
            <input
              name="email"
              value={employeeDetails.email}
              type="email"
              onChange={onChangeHandler}
              placeholder="Enter staff email"
              className="input input-bordered w-full bg-white border-gray-400 text-black text-xs"
            />
          </div>

          <div className="w-full mb-2 flex space-x-4">
            <StatusSelectBox
              title={"status"}
              data={statusArray}
              setMethod={setEmployeeDetails}
              value={employeeDetails}
            />
            <BranchSelectBox
              title={"branch"}
              data={allBranches}
              error={branchError}
              setMethod={setEmployeeDetails}
              value={employeeDetails}
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-black capitalize font-medium">
                credential
              </span>
            </label>
            <CredentialSelect setMethod={setIsPicked} value={isPicked} />
          </div>

          <div className=" flex justify-end">
            <button
              type="submit"
              disabled={!canCreate}
              className=" text-sm rounded-md text-white font-semibold border-none bg-[#37A7AE] h-10 px-6 capitalize"
            >
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addemployee;
