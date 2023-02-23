import React from "react";
import SuperAdminAttendance from "../../components/Users/SuperAdmin/dashboard/SuperAdminAttendance";
import SuperAdminMonthlyLog from "../../components/Users/SuperAdmin/dashboard/SuperAdminMonthlyLog.jsx";
import SuperAdminWeeklyStatus from "../../components/Users/SuperAdmin/dashboard/SuperAdminWeeklyStatus";
import SuperAdminOverviewCard from "../../components/Users/SuperAdmin/dashboard/SuperAdminOverviewCard";
import DashboardTop from "../../components/DashboardTop/DashboardTop";
import { useSelector } from "react-redux";
import { loggedInUser } from "../../feature/user/userSlice";
import useSWR from "swr";
import { getOrganizationFetcher } from "../../services/requests";
import { useState } from "react";
import { useEffect } from "react";

const SuperAdminDashboard = () => {
  const user = useSelector(loggedInUser);
  const { data, error } = useSWR(
    user ? user.organization.organization_id : null,
    getOrganizationFetcher
  );
  const [userOrgName, setUserOrg] = useState(data);

  useEffect(() => {
    setUserOrg(data);
  }, [data]);

  return (
    <div className="w-[calc(100vw-330px)] max-w-7xl  ">
      <DashboardTop
        user={user}
        data={userOrgName && userOrgName}
        error={error}
      />
      <div className="flex space-x-[24px] xl:justify-between ">
        <SuperAdminOverviewCard />
        <SuperAdminWeeklyStatus />
      </div>
      <div className="flex mt-[18px] mb-[30px] space-x-[24px] xl:justify-between  ">
        <SuperAdminAttendance />
        <SuperAdminMonthlyLog />
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
