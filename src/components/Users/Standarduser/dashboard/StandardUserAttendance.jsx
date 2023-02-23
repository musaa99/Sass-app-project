import React from "react";
import { leaderboard } from "../../../../assets/data/leaderboard";

const StandardUserAttendance = () => {
  return (
    <div className="w-full max-w-[683px] bg-white px-6 py-2 rounded-[20px]">
      <div className="mb-6">
        <h1 className="font-bold text-xl text-black mb-2">
          Time and Attendance
        </h1>
        <div className="font-normal text-base text-black leading-[30px] flex items-center ">
          <p className="mr-2"> Branch:</p>
          <p> Abuja</p>
        </div>
      </div>
      <div>
        <div>
          <div className="overflow-x-auto bg-transparent">
            <table className="table w-full  bg-transparent">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Employee</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((leader) => (
                  <tr key={leader.department}>
                    <td>{leader.department}</td>
                    <td>{leader.employee}</td>
                    <td>
                      <div className="flex items-center">
                        {leader.status === "Present" ? (
                          <div className="w-2 rounded-full mr-2 h-2 bg-green-700"></div>
                        ) : (
                          <div className="w-2 mr-2 h-2 rounded-full bg-red-900"></div>
                        )}
                        {leader.status}
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-ghost gap-2 btn-xs capitalize text-xs">
                        {leader.button}
                        <div>{leader.icon}</div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardUserAttendance;
