import ChartIcon from "./icons/ChartIcon";
import TaskIcon from "./icons/TaskIcon";
import TeamIcon from "./icons/TeamIcon";
import TimeIcon from "./icons/TimeIcon";

export default function ActivitySummaryCards() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between">
      <div className="card h[180px] w-full max-w-[250px] bg-white shadow-xl">
        <div className="p-4">
          <div className="card-title mb-6">
            <div className="bg-[#37A7AE] text-white w-10 h-10 rounded-md flex justify-center items-center">
              <TimeIcon />
            </div>
            <p className="text-black/90 font-semibold text-xl">Time</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-base ">
              <p className="font-bold text-black mb-3">0.00</p>
              <p className="text-black/[0.85]">Total workload</p>
            </div>
            <div className="divider divider-horizontal bg-[#37A7AE] w-1 rounded-full"></div>
            <div className="text-base text-black/40 ml-5">
              <p className="font-bold text-black mb-3">0.00</p>
              <p className="text-black/[0.85]">Previous day</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card h[180px] w-full max-w-[250px] bg-white shadow-xl">
        <div className="p-4">
          <div className="card-title mb-6">
            <div className="bg-[#37A7AE] text-white w-10 h-10 rounded-md flex justify-center items-center">
              <ChartIcon />
            </div>
            <p className="text-black/90 font-semibold text-xl">Activity</p>
          </div>
          <div className="flex justify-start items-center">
            <div className=" w-10 bg-gray-400 h-1 rounded-full mr-3"></div>
            <p className="text-gray-400 text-base">Average</p>
          </div>
          <div className="flex justify-start items-center my-1">
            <div className=" w-10 bg-gray-400 h-1 rounded-full mr-3"></div>
            <p className="text-gray-400 text-base">Previous day</p>
          </div>
          <div className="flex justify-start items-center">
            <div className=" w-10 bg-gray-400 h-1 rounded-full mr-3"></div>
            <p className="text-gray-400 text-base">Organization average</p>
          </div>
        </div>
      </div>

      <div className="card h[180px] w-full max-w-[250px] bg-white shadow-xl">
        <div className="p-4">
          <div className="card-title mb-6">
            <div className="bg-[#37A7AE] text-white w-10 h-10 rounded-md flex justify-center items-center">
              <TaskIcon />
            </div>
            <p className="text-black/90 font-semibold text-xl">Task</p>
          </div>
          <div className="flex justify-start items-center mb-3">
            <p className="text-black font-bold mr-3">520</p>
            <p className="text-gray-400 text-base">Completed</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="text-black font-bold mr-3">0.00</p>
            <p className="text-gray-400 text-base">Previous day</p>
          </div>
        </div>
      </div>

      <div className="card h[180px] w-full max-w-[250px] bg-white shadow-xl">
        <div className="p-4">
          <div className="card-title mb-6">
            <div className="bg-[#37A7AE] text-white w-10 h-10 rounded-md flex justify-center items-center">
              <TeamIcon />
            </div>
            <p className="text-black/90 font-semibold text-xl">Users</p>
          </div>
          <div className="flex justify-start items-center mb-3">
            <p className="text-black font-bold mr-3">0.00</p>
            <p className="text-gray-400 text-base">Completed</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="text-black font-bold mr-3">0.00</p>
            <p className="text-gray-400 text-base">Previous day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
