import React from "react";
import { Icon } from "@iconify/react";
import DashboardIcon from "../../../icons/DashboardIcon";
import UsersIcon from "../../../icons/UsersIcon";
import TeamIcon from "../../../icons/TeamIcon";
import OrganIcon from "../../../icons/OrganIcon";
import EventIcon from "../../../icons/EventIcon";
import TimeIcon from "../../../icons/TimeIcon";
import CapacityIcon from "../../../icons/CapacityIcon";
import UtilIcon from "../../../icons/UtilIcon";
import OccupancyIcon from "../../../icons/OccupancyIcon";
import HelpIcon from "../../../icons/HelpIcon";

export const sideBarTopMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "User",
    path: "/user",
    icon: <UsersIcon />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <TeamIcon />,
  },
];

export const organizationSubMenu = [
  {
    title: "Credentials",
    path: "/organization-setup/credentials",
    icon: <Icon icon="carbon:credentials" />,
    design: "designClass",
  },
  {
    title: "Billings",
    path: "/organization-setup/billings",
    icon: <Icon icon="fluent:payment-16-regular" />,
    design: "designClass",
  },
  {
    title: "Hardware",
    path: "/organization-setup/hardware",
    icon: <UtilIcon />,
    design: "designClass",
  },
  {
    title: "Permission",
    path: "/organization-setup/permission",
    icon: <Icon icon="icon-park-outline:permissions" />,
    design: "designClass",
  },
  {
    title: "Payment History",
    path: "/organization-setup/paymenthistory",
    icon: <Icon icon="fluent:payment-16-regular" />,
    design: "designClass",
  },
  {
    title: "Organogram",
    path: "/organization-setup/utility/help",
    icon: <Icon icon="ri:team-line" />,
    design: "designClass",
  },
  {
    title: "Setting",
    path: "/organization-setup/settings",
    icon: <Icon icon="uil:setting" />,
    design: "designClass",
  },
];
export const utilitySubMenu = [
  {
    title: "Time & Attendance",
    path: "/utility/time-attendance",
    icon: <TimeIcon />,
    design: "designClass",
  },
  {
    title: "Capacity Management",
    path: "/utility/capacity",
    icon: <CapacityIcon />,
    design: "designClass",
  },
  {
    title: "Productivity Mangement",
    path: "/utility/productivity-management",
    icon: <UtilIcon />,
    design: "designClass",
  },
  {
    title: "Occupancy Tracking",
    path: "/utility/occupancy",
    icon: <OccupancyIcon />,
    design: "designClass",
  },
  {
    title: "Help & Support",
    path: "/utility/help",
    icon: <HelpIcon />,
    design: "designClass",
  },
];

export const sideBarBottomMenu = [
  {
    title: "Event History",
    path: "/events",
    icon: <EventIcon />,
  },
  {
    title: "Integration",
    path: "/integration",
    icon: <OrganIcon />,
  },
  {
    title: "Reports",
    path: "/report",
    icon: <OrganIcon />,
  },
];
