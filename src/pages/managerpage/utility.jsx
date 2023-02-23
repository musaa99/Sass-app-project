import ProductivityPieChart from "../../components/charts/ProductivityPieChart";
import UtilityHeader from "../../components/headers/UtilityHeader";
import ArrowRight from "../../components/icons/ArrowRight";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

export default function Utility() {
  const { pathname } = useLocation();
  return (
    <main className="w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"utility manager"} />
      <div className="flex space-x-[26px] pb-20">
        <div className="flex-1 ">
          <div className="mb-[26px] overflow-x-auto rounded-[20px] bg-white h-fit ">
            <p className=" text-[30px] leading-[45px] text-black/[0.85] font-semibold py-[15px] px-5 capitalize ">
              attendance
            </p>
            <table className="table table-zebra w-full border-separate border-spacing-y-4  ">
              <thead>
                <tr>
                  <th className="bg-white text-xl text-black/[0.85] font-medium capitalize px-5 ">
                    sign in
                  </th>
                  <th className="bg-white text-xl text-black/[0.85] font-medium capitalize px-5 ">
                    employee name
                  </th>
                  <th className="bg-white text-xl text-black/[0.85] font-medium capitalize px-5 ">
                    sign out
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 3].map((item, index) => (
                  <tr key={index} className="mb-2">
                    <td className="bg-white py-3.5 text-black/[0.85] px-5 ">
                      08:40 am
                    </td>
                    <td className="bg-white py-3.5 text-black/[0.85] px-5">
                      Rita Dawins
                    </td>
                    <td className="bg-white py-3.5 text-black/[0.85] px-5">
                      04:04 pm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              to={`${pathname}/time-attendance`}
              className="w-full my-3 flex items-center justify-end "
            >
              <button className="btn btn-link text-[#37A7AE] no-underline font-medium text-base capitalize ">
                see more <ArrowRight />
              </button>
            </Link>
          </div>
          <div className="flex-1 overflow-x-auto rounded-[20px] bg-white h-fit px-5 ">
            <p className=" text-[30px] leading-[45px] text-black/[0.85] font-semibold py-[15px]  capitalize mb-10 ">
              leave & overtime
            </p>
            <div className="w-full">
              {[1, 2].map((item, index) => (
                <div key={index} className="w-full">
                  <div className="w-full flex items-center justify-between py-5 bg-[#F7F8F9] px-[30px]  rounded-[10px]">
                    <div className="flex flex-col justify-center h-full capitalize   ">
                      <p className="text-2xl font-medium text-black/[0.85] ">
                        grace johnson
                      </p>
                      <p className="font-medium text-xl text-black/70 ">
                        sick leave
                      </p>
                    </div>
                    <div className="text-black/70">
                      <ArrowRight />
                    </div>
                  </div>
                  <Link
                    to={`${pathname}/time-attendance`}
                    className="w-full flex items-center justify-end "
                  >
                    <button className="btn btn-link text-[#37A7AE] no-underline font-medium text-base capitalize ">
                      see more
                      <ArrowRight />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[496px] py-[30px] px-10 rounded-[20px] bg-white ">
          <p className="text-[30px] leading-[45px] text-black/[0.85] mb-5 font-semibold capitalize">
            productivity chart
          </p>
          <select className="select bg-transparent select-info w-[200px] max-w-xs mb-8">
            <option defaultValue={""}>8th Jun - 12th Jun</option>
            <option>8th Aug - 12th Aug</option>
            <option>8th Sep - 12th Sep</option>
            <option>8th Dec - 12th Dec</option>
          </select>
          <div className="w-full mb-[50px]">
            <ProductivityPieChart />
          </div>
          <div>
            <div className="flex space-x-[14px] mb-6 ">
              <div className="bg-[#FB9E9E] mt-2 rounded-full w-[18px] h-[18px]"></div>
              <div className="flex-1 ">
                <p className="capitalize font-medium text-2xl text-black/[0.85] mb-3">
                  Operations Department
                </p>
                <p className="font-normal text-[18px] leading-[27px] text-black/[0.85]">
                  Operations department delivered a productivity rate of 28.2% .
                </p>
              </div>
            </div>

            <div className="flex space-x-[14px] mb-6 ">
              <div className="bg-[#77FF9D] mt-2 rounded-full w-[18px] h-[18px]"></div>
              <div className="flex-1 ">
                <p className="capitalize font-medium text-2xl text-black/[0.85] mb-3">
                  Marketing Department
                </p>
                <p className="font-normal text-[18px] leading-[27px] text-black/[0.85]">
                  Marketting department delivered a productivity rate of 21.8%
                </p>
              </div>
            </div>

            <div className="flex space-x-[14px] mb-6 ">
              <div className="bg-[#F0D46E] mt-2 rounded-full w-[18px] h-[18px]"></div>
              <div className="flex-1 ">
                <p className="capitalize font-medium text-2xl text-black/[0.85] mb-3">
                  Human Resources Department
                </p>
                <p className="font-normal text-[18px] leading-[27px] text-black/[0.85]">
                  Human Resources department delivered a productivity rate of
                  17.7% .
                </p>
              </div>
            </div>

            <div className="flex space-x-[14px] mb-6 ">
              <div className="bg-[#699CFF] mt-2 rounded-full w-[18px] h-[18px]"></div>
              <div className="flex-1 ">
                <p className="capitalize font-medium text-2xl text-black/[0.85] mb-3">
                  Technology Department
                </p>
                <p className="font-normal text-[18px] leading-[27px] text-black/[0.85]">
                  Technology department delivered a productivity rate of 32.3% .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
