import JobTab from "../../components/productivityTab/JobTab";
import useSWR from "swr";
import { getAllDeptFetcher } from "../../services/requests";
import { useState } from "react";

export default function AddJob() {
  const { data: allDepartments, error: departmentsError } = useSWR(
    "api/all-dept",
    getAllDeptFetcher,
    {
      refreshInterval: 3000,
      refreshWhenHidden: true,
    }
  );
  const [jobDetails, setJobDetails] = useState({
    deptID: "",
    employeeID: "",
    arrivalTimeID: "",
    departureTimeID: "",
  });
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl pt-[45px] pb-[30px] h-full overflow-y-auto ">
      <div className="w-full max-w-2xl py-[30px] pl-10 pr-20 bg-white h-auto   ">
        <h1 className="capitalize text-black/[0.85] text-2xl font-medium mb-6">
          Add Job Site
        </h1>
        <div>
          <JobTab
            data={allDepartments}
            error={departmentsError}
            value={jobDetails}
            setMethod={setJobDetails}
          />
        </div>
      </div>
    </main>
  );
}
