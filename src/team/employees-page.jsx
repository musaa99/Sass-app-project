import UtilityHeader from "../components/headers/UtilityHeader";
import DeptOptionModal from "../components/modal/DeptOptionModal";
import useSWR from "swr";
import { getEmployeesFetcher } from "../services/requests";
import { FaSpinner } from "react-icons/fa";

export default function EmployeesPage() {
  const {
    data: allEmployees,
    isLoading,
    error: employeesError,
  } = useSWR("api/all-employees", getEmployeesFetcher);
  return (
    <div className="w-[calc(100vw-330px)] pl-6 pr-4 max-w-7xl mb-52  ">
      <div className="w-full">
        <UtilityHeader
          title={"operations"}
          subtitle={"team"}
          backLink={"/team"}
        />
      </div>
      <div className="overflow-x-auto bg-white w-full">
        {employeesError && (
          <div className="w-full h-96 flex items-center justify-center">
            <p className="text-2xl text-black">
              oops! a network error has occured, kindly check and try again.
            </p>
          </div>
        )}
        {isLoading ? (
          <div className="w-full h-96 flex justify-center items-center space-x-3 text-black  ">
            <FaSpinner className="w-6 h-6 animate-spin" />
            <p className="text-2xl">Loading...</p>
          </div>
        ) : (
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Name/Staff ID</th>
                <th>Position</th>
                <th>Email</th>
                <th>Status</th>
                <th>Credentials</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {allEmployees &&
                allEmployees.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-8 h-8">
                            <img
                              src="/courtney.svg"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold capitalize">
                            {item.name}
                          </div>
                          <div className="text-xs font-normal text-black ">
                            {item.staff_id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="capitalize">{item.position || "null"}</td>
                    <td>{item.email}</td>
                    <td>
                      <div className="flex space-x-1 items-center capitalize">
                        {item.status === "present" ? (
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        )}
                        <p>{item.status}</p>
                      </div>
                    </td>
                    <td>
                      <div className="text-xs flex space-x-1  overflow-x-auto gap-2 text-white">
                        {item.credentials.FINGERPRINT && (
                          <p className=" bg-[#07939BCC] w-fit rounded-xl py-0.5 px-2">
                            Fingerprint
                          </p>
                        )}

                        {item.credentials.RFID_CARD && (
                          <p className="bg-[#07939BCC] w-fit rounded-xl py-0.5 px-2">
                            RFID Card
                          </p>
                        )}
                        {item.credentials.MOBILE_APP && (
                          <p className="bg-[#07939BCC] w-fit rounded-xl py-0.5 px-2">
                            Mobile App
                          </p>
                        )}
                        {item.credentials.PIN && (
                          <p className="bg-[#07939BCC] w-fit rounded-xl py-0.5 px-2">
                            PIN
                          </p>
                        )}
                      </div>
                    </td>
                    <td>
                      <DeptOptionModal
                        edit={"edit employee"}
                        archive={"archive employee"}
                        deletePerm={"delete employee"}
                        id={item.id}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
