import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Users from "./pages/standardusers/Users";
import SuperAdminDashboard from "./pages/managerpage/SuperAdminDashboard";
import StandardUserDashboard from "./pages/standardusers/StandardUserDashboard";
import MenuBar from "./components/Layout/MenuBar";
import UsersProfile from "./components/userProfileModules/UserProfile";
import Profile from "./components/userProfileModules/EditProfile";
import Notification from "./components/userProfileModules/Notification";
import EmailPreferences from "./components/userProfileModules/EmailPreferences";
import LoginSecurity from "./components/userProfileModules/LoginSecurity";
import Utility from "./pages/managerpage/utility";
import TimeAttendance from "./pages/managerpage/time-attendance";
import Attendance from "./pages/managerpage/attendances";
import SingleAttendance from "./components/Users/SuperAdmin/SingleAttendance";
import AttendanceTable from "./components/Users/SuperAdmin/AttendanceTable";
import EmployeeLeave from "./pages/managerpage/employee-leave";
import OverTime from "./pages/managerpage/overtime";
import Capacity from "./pages/managerpage/capacity";
import ProductivityManagement from "./pages/managerpage/productivity-management";
import UsersLocationMap from "./pages/managerpage/users-location-map";
import Jobs from "./pages/managerpage/jobs";
import AddJob from "./pages/managerpage/add-job";
import Activity from "./pages/managerpage/activity";
import OccupancyManagement from "./pages/managerpage/occupancy-tracking";
import OccupancySingleAttendance from "./components/Users/SuperAdmin/OccupancySingleAttendance";
import OccupancyAttendanceTable from "./components/Users/SuperAdmin/OccupancyAttendanceTable";
import HelpSupport from "./pages/managerpage/help-support";
import EventHistoryPage from "./pages/standardusers/EventHistoryPage";
import EventlogPage from "./pages/standardusers/EventlogPage";
import DailyEventlog from "./components/EventsHistory/Eventlog/DailyEventlog";
import PaymentHistory from "./components/paymentHistory/PaymentHistory";
import Index from "./components/permission/Index";
import Setting from "./components/Setting/Settings";
import Team from "./team";
import EmployeesPage from "./team/employees-page";
import Addemployee from "./team/add-employee";
import CreateDepartment from "./team/create-department";
import OrganizationSetup from "./organization";
import CreateBranch from "./organization/create-branch";
import Credentials from "./organization/credentials";
import { createContext, useState } from "react";
import Billings from "./organization/billings";
import Signin from "./pages/Signin";

export const UserTypeContext = createContext({
  userType: "",
  setUserType: () => {},
});

function App() {
  const [userType, setUserType] = useState(localStorage.getItem("userType"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuBar />,
      errorElement: (
        <div className="flex items-center justify-center w-full h-screen text-2xl">
          <p className="text-red-700"> Page Not Found...</p>
        </div>
      ),
      children: [
        {
          index: true,
          element: (
            <RequireAuth>
              {userType === "super_admin" ? (
                <SuperAdminDashboard />
              ) : (
                <StandardUserDashboard />
              )}
            </RequireAuth>
          ),
        },
        {
          path: "dashboard",
          element: (
            <RequireAuth>
              {userType === "super_admin" ? (
                <SuperAdminDashboard />
              ) : (
                <StandardUserDashboard />
              )}
            </RequireAuth>
          ),
        },
        {
          path: "user",
          element: (
            <RequireAuth>
              <Users />
            </RequireAuth>
          ),
        },
        {
          path: "user/:userId",
          element: (
            <RequireAuth>
              <UsersProfile />
            </RequireAuth>
          ),
        },
        {
          path: "user/:userId/profile",
          element: (
            <RequireAuth>
              <Profile />
            </RequireAuth>
          ),
        },
        {
          path: "/user/:userId/notification",
          element: (
            <RequireAuth>
              <Notification />
            </RequireAuth>
          ),
        },
        {
          path: "user/:userId/emailPreference",
          element: (
            <RequireAuth>
              <EmailPreferences />
            </RequireAuth>
          ),
        },
        {
          path: "user/:userId/loginSecurity",
          element: (
            <RequireAuth>
              <LoginSecurity />
            </RequireAuth>
          ),
        },
        {
          path: "team",
          element: (
            <RequireAuth>
              <Team />
            </RequireAuth>
          ),
        },
        {
          path: "team/employees",
          element: (
            <RequireAuth>
              <EmployeesPage />
            </RequireAuth>
          ),
        },
        {
          path: "team/create-department",
          element: (
            <RequireAuth>
              <CreateDepartment />
            </RequireAuth>
          ),
        },
        {
          path: "team/add-employee",
          element: (
            <RequireAuth>
              <Addemployee />
            </RequireAuth>
          ),
        },
        {
          path: "/utility",
          element: (
            <RequireAuth>
              <Utility />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/time-attendance",
          element: (
            <RequireAuth>
              <TimeAttendance />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/time-attendance/attendances",
          element: (
            <RequireAuth>
              <Attendance />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/time-attendance/attendances/:month",
          element: (
            <RequireAuth>
              <SingleAttendance />
            </RequireAuth>
          ), //change dynamic value later
        },
        {
          path: "/utility/time-attendance/attendances/:month/day",
          element: (
            <RequireAuth>
              <AttendanceTable />
            </RequireAuth>
          ), //change dynamic value later
        },
        {
          path: "/utility/time-attendance/leave",
          element: (
            <RequireAuth>
              <EmployeeLeave />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/time-attendance/overtime",
          element: (
            <RequireAuth>
              <OverTime />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/capacity",
          element: (
            <RequireAuth>
              <Capacity />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/productivity-management",
          element: (
            <RequireAuth>
              <ProductivityManagement />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/productivity-management/users-location-map",
          element: (
            <RequireAuth>
              <UsersLocationMap />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/productivity-management/jobs",
          element: (
            <RequireAuth>
              <Jobs />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/productivity-management/jobs/add-job",
          element: (
            <RequireAuth>
              <AddJob />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/productivity-management/activity",
          element: (
            <RequireAuth>
              <Activity />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/occupancy",
          element: (
            <RequireAuth>
              <OccupancyManagement />
            </RequireAuth>
          ),
        },
        {
          path: "/utility/occupancy/:month",
          element: (
            <RequireAuth>
              <OccupancySingleAttendance />
            </RequireAuth>
          ), //change dynamic value later
        },
        {
          path: "/utility/occupancy/:month/day",
          element: (
            <RequireAuth>
              <OccupancyAttendanceTable />
            </RequireAuth>
          ), //change dynamic value later
        },
        {
          path: "/utility/help",
          element: (
            <RequireAuth>
              <HelpSupport />
            </RequireAuth>
          ),
        },
        {
          path: "/events",
          element: (
            <RequireAuth>
              <EventHistoryPage />
            </RequireAuth>
          ),
        },
        {
          path: "/events/log",
          element: (
            <RequireAuth>
              <EventlogPage />
            </RequireAuth>
          ),
        },
        {
          path: "/events/log/:day",
          element: (
            <RequireAuth>
              <DailyEventlog />
            </RequireAuth>
          ),
        },
        {
          path: "/organization-setup",
          element: (
            <RequireAuth>
              <OrganizationSetup />
            </RequireAuth>
          ),
        },
        {
          path: "/organization-setup/create-branch",
          element: (
            <RequireAuth>
              <CreateBranch />
            </RequireAuth>
          ),
        },
        {
          path: "/organization-setup/credentials",
          element: (
            <RequireAuth>
              <Credentials />
            </RequireAuth>
          ),
        },
        {
          path: "/organization-setup/billings",
          element: (
            <RequireAuth>
              <Billings />
            </RequireAuth>
          ),
        },
        {
          path: "/paymenthistory",
          element: (
            <RequireAuth>
              <PaymentHistory />
            </RequireAuth>
          ),
        },
        {
          path: "/permission",
          element: (
            <RequireAuth>
              <Index />
            </RequireAuth>
          ),
        },
        {
          path: "/settings",
          element: (
            <RequireAuth>
              <Setting />
            </RequireAuth>
          ),
        },
      ],
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);
  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      <RouterProvider router={router} />
    </UserTypeContext.Provider>
  );
}

export default App;

function RequireAuth({ children }) {
  const userToken = localStorage.getItem("userToken");
  if (userToken) {
    return children;
  }
  return <Navigate to="/signin" />;
}
