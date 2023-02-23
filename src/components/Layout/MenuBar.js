import {
  organizationSubMenu,
  sideBarBottomMenu,
  sideBarTopMenu,
  utilitySubMenu,
} from "../Users/Standarduser/navbar/sideBarData";
import profilepic from "../../assets/profilepic.svg";
import bell from "../../assets/bell.svg";
import logo from "../../assets/logo.svg";
import LogoutIcon from "../../components/icons/LogoutIcon";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import UtilityIcon from "../icons/UtilityIcon";
import ArrowDown from "../icons/ArrownDown";
import { useState } from "react";
import ArrowUp from "../icons/ArrowUp";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../feature/user/userSlice";
import { logout } from "../../services/requests";

export default function MenuBar() {
  const [toggleArrow, setToggleArrow] = useState(true);
  const [showOrgSetup, setShowOrgSetup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toggleSubMenu() {
    const hiddenDiv = document.getElementById("subMenu");
    if (hiddenDiv.style.display === "none") {
      hiddenDiv.style.display = "block";
      setToggleArrow(true);
    } else {
      hiddenDiv.style.display = "none";
      setToggleArrow(false);
    }
  }

  async function logOut() {
    const res = await logout();
    res.status && dispatch(logoutUser());
    navigate("/signin");
  }
  return (
    <main className="h-screen w-screen">
      <div className="h-full flex w-full">
        <div className="w-[290px] h-full overflow-y-auto customScrollBar bg-white pb-12">
          <nav className="w-full ">
            <div className="">
              <img className=" pt-5 ml-10" src={logo} alt="logo" />
              <div className="mt-16 mb-32 flex items-center ">
                <div className="w-full flex flex-col items-center ">
                  <div className="w-full">
                    {sideBarTopMenu.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? ` text-[#37A7AE] flex items-center py-4 px-[42.5px] w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                            : ` flex items-center py-4 px-[42.5px] w-full text-black  `
                        }
                        end
                      >
                        {item.icon}
                        <p className="ml-4 text-sm font-semibold">
                          {item.title}
                        </p>
                      </NavLink>
                    ))}
                  </div>
                  <div className="w-full relative">
                    <NavLink
                      to={"/utility"}
                      className={({ isActive }) =>
                        isActive
                          ? ` text-[#37A7AE] flex items-center py-4 px-[42.5px] w-full border-t-[1px] border-b-[1px] border-[#37A7AE]  `
                          : `flex items-center py-4 px-[42.5px] w-full text-black   `
                      }
                      end
                    >
                      <div className="w-full flex justify-between items-center">
                        <span className="flex">
                          <UtilityIcon />
                          <p className="ml-4 text-sm font-semibold">
                            Utility Manager
                          </p>
                        </span>
                      </div>
                    </NavLink>
                    {/* toggleButton */}
                    <div
                      onClick={toggleSubMenu}
                      className="text-[#37A7AE] cursor-pointer absolute top-5 right-3 h-fit w-fit"
                    >
                      {toggleArrow ? <ArrowUp /> : <ArrowDown />}
                    </div>
                    <div id="subMenu" className="w-full pl-[30px] ">
                      {utilitySubMenu.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className={({ isActive }) =>
                            isActive
                              ? ` text-[#37A7AE] flex items-center py-4 px-[42.5px] w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                              : ` flex items-center py-4 px-[42.5px] w-full text-black  `
                          }
                          end
                        >
                          {item.icon}
                          <p className="ml-4 text-sm font-semibold">
                            {item.title}
                          </p>
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <div className="w-full relative">
                    <NavLink
                      to={"/organization-setup"}
                      className={({ isActive }) =>
                        isActive
                          ? ` text-[#37A7AE] flex items-center py-4 px-[42.5px] w-full border-t-[1px] border-b-[1px] border-[#37A7AE]  `
                          : `flex items-center py-4 px-[42.5px] w-full text-black   `
                      }
                      end
                    >
                      <div className="w-full flex justify-between items-center">
                        <span className="flex">
                          <Icon icon="fluent:organization-12-regular" />
                          <p className="ml-4 text-sm font-semibold">
                            Organization Setup
                          </p>
                        </span>
                      </div>
                    </NavLink>
                    {/* toggleButton */}
                    <div className="text-[#37A7AE] cursor-pointer absolute top-5 right-3 h-fit w-fit">
                      {showOrgSetup ? (
                        <div onClick={() => setShowOrgSetup(!showOrgSetup)}>
                          <ArrowUp />
                        </div>
                      ) : (
                        <div onClick={() => setShowOrgSetup(!showOrgSetup)}>
                          <ArrowDown />
                        </div>
                      )}
                    </div>

                    <div
                      className={` ${
                        showOrgSetup ? "translate-x-0 " : "hidden"
                      }`}
                    >
                      <div id="subMenu" className="w-full pl-[30px] ">
                        {organizationSubMenu.map((item, index) => (
                          <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                              isActive
                                ? ` text-[#37A7AE] flex items-center py-4 px-[42.5px] w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                                : ` flex items-center py-4 px-[42.5px] w-full text-black  `
                            }
                            end
                          >
                            {item.icon}
                            <p className="ml-4 text-sm font-semibold">
                              {item.title}
                            </p>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>

                  <></>

                  <div className="w-full">
                    {sideBarBottomMenu.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? ` text-[#37A7AE] flex items-center py-4 px-[42.5px] w-full border-t-[1px] border-b-[1px] border-[#37A7AE] `
                            : ` flex items-center py-4 px-[42.5px] w-full text-black  `
                        }
                        end
                      >
                        {item.icon}
                        <p className="ml-4 text-sm font-semibold">
                          {item.title}
                        </p>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ml-[70px] font-normal text-sm leading-[33px] capitalize">
                <p className="mb-2 ">standard user</p>
                <div
                  onClick={logOut}
                  className="flex space-x-1 items-center cursor-pointer"
                >
                  <LogoutIcon />
                  <p className="text-[#F33232]  ">logout</p>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex-1 h-full w-full ">
          <div className="flex w-full bg-[#07939B] h-16 pl-6 pr-[18px] py-3.5 justify-between items-center ">
            <form className="w-full flex-1">
              <div className="relative">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search"
                  className="max-w-[706px] w-full py-2 pl-12 px-4 text-black border rounded-md outline-none bg-gray-50 "
                />
              </div>
            </form>
            <div className="justify-between flex items-center ">
              <img className="lg:mr-4 " src={bell} alt="notificationbell" />
              <img src={profilepic} alt="profilepicture" />
            </div>
          </div>

          <div className="h-[calc(100vh-64px)] w-full bg-[#F5F5F5] xl:flex xl:flex-col xl:items-center overflow-y-auto customScrollBar  ">
            {<Outlet />}
          </div>
        </div>
      </div>
    </main>
  );
}
