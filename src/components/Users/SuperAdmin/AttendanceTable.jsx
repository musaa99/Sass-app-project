import { useState } from "react";
import UtilityHeader from "../../headers/UtilityHeader";
import ArrowRight from "../../icons/ArrowRight";
import EmployeeDetailsModal from "../../modal/EmployeeDetailsModal";

export default function AttendanceTable() {
  const [openEmployeeDetails, setOpenEmployeeDetails] = useState(false);
  const openModal = () => setOpenEmployeeDetails(true);
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader
        title={"attendance"}
        subtitle={"20th, june 2022"}
        backLink={"/utility/time-attendance/attendances/September"}
      />
      <div className="bg-white w-full max-w-[1158px] rounded-[20px] mb-24 py-[30px] px-5 ">
        <p className="mb-[30px] text-[26px] font-semibold text-black/[0.85] capitalize">
          Front Door
        </p>
        <div className="overflow-x-auto w-full ">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Sign in</th>
                <th>Employee name</th>
                <th>Credential</th>
                <th>Time at work</th>
                <th>Sign out</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <tr key={index} className=" ">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox " />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div>08:40am</div>
                      </div>
                    </div>
                  </td>
                  <td>Rita Dawins</td>
                  <td>RFID Card</td>
                  <td>8 hours</td>
                  <td>04:04pm</td>
                  <td></td>
                  <th>
                    <button
                      onClick={openModal}
                      className="capitalize btn btn-ghost btn-xs text-black/40 hover:bg-[#37A7AE] hover:text-white"
                    >
                      see more
                      <ArrowRight />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <EmployeeDetailsModal
        open={openEmployeeDetails}
        setOpen={setOpenEmployeeDetails}
      />
    </main>
  );
}
