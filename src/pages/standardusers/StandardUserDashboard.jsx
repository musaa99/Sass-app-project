import React from "react";
import StandardUserAttendance from "../../components/Users/Standarduser/dashboard/StandardUserAttendance";
import StandardUserOverview from "../../components/Users/Standarduser/dashboard/StandardUserOverview";
import StandardUserMonthlyLog from "../../components/Users/Standarduser/dashboard/StandardUserMonthlyLog.jsx";
import StandardUserWeeklyStatus from "../../components/Users/Standarduser/dashboard/StandardUserWeeklyStatus";
// import DashboardTop from "../../components/DashboardTop/DashboardTop";

const StandardUserDashboard = () => {
  return (
    <div className="w-[calc(100vw-330px)] max-w-7xl  ">
      {/* <DashboardTop /> */}
      <div className="flex space-x-[24px] xl:justify-between ">
        <StandardUserOverview />
        <StandardUserMonthlyLog />
      </div>
      <div className="flex mt-[18px] mb-[30px] space-x-[24px] xl:justify-between  ">
        <StandardUserAttendance />
        <StandardUserWeeklyStatus />
      </div>
    </div>
  );
};
export default StandardUserDashboard;
