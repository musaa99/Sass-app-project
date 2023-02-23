import UtilityHeader from "../../headers/UtilityHeader";
import { Tab } from "@headlessui/react";
import { classNames } from "../../OccupancyTab";
import GlobalLockdown from "../../GlobalLockdown";

export default function OccupancyAttendanceTable() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"occupancy management"} />

      <div className="w-full px-2 sm:px-0 ">
        <Tab.Group>
          <Tab.List className="flex space-x-[62px] rounded-[5px] py-[26px] px-[57px] bg-white w-full">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full shadow rounded-[5px] py-[30px] bg-[#F7F8F9] text-[26px] capitalize font-semibold leading-[36px] ",
                  "",
                  selected
                    ? " text-black/[0.85] border-2 rounded-[5px] border-[#37A7AE] "
                    : "text-black/30  "
                )
              }
            >
              intrusion detection
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full shadow rounded-[5px] py-[30px] bg-[#F7F8F9] text-[26px] capitalize font-semibold leading-[36px] ",
                  "",
                  selected
                    ? " text-black/[0.85] border-2 rounded-[5px] border-[#37A7AE] "
                    : "text-black/30  "
                )
              }
            >
              global lockdown
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-[85px]">
            <Tab.Panel className={classNames("", "")}>
              <div className="bg-white w-full max-w-[1158px] rounded-[20px] mb-24 py-[30px] px-5 ">
                <p className="mb-[30px] text-[26px] font-semibold text-black/[0.85] capitalize">
                  20th, June 2022.
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
                        <th>Time</th>
                        <th>Device</th>
                        <th>Credential</th>
                        <th>Activity</th>
                        <th>Employee name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4].map((item, index) => (
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
                          <td>Operations Office</td>
                          <td>Entry</td>
                          <td>RFID Card</td>
                          <td>Rita Dawins</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("", "")}>
              <GlobalLockdown />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
