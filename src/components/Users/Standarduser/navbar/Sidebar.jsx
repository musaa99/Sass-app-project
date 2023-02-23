import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
        className="flex text-4xl text-white items-center cursor-pointer fixed x left-[1.5rem] top-6 z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        x
      </button>
      ) : (
        <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="  z-30 flex items-center  text-white cursor-pointer right-10 top-6"
        fill="#2563EB"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <div
    className="HAMBURGER-ICON pt-4 space-y-2"
  >
    <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
    <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
    <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
  </div>
      </div>
      )}

      <div
        className={`top-0  w-[45vw] m-auto bg-[#09969F]   text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "hidden"
        }`}
      >
       
         <ul className=" mt-20 text-[18px]  pl-4 md:pl-[60px] font-semibold  MENU-LINK-MOBILE-OPEN flex text-left z-50  flex-col  fixed   text-black  "> 
         {/* <ul className="mt-[50px]"> */}
        <li className=" hover:bg-[#09969F]   py-3 ">
          <a className="hover:text-[20px] " href="/dashboard">DASHBOARD</a>
        </li>
        <li className=" hover:bg-[#09969F] hover:rounded py-3   ">
          <a href="/Users">USERS</a>
        </li>
        <li className="  hover:rounded py-3 ">
          <a href="/Features">PLACES</a>
        </li>
        <li className="hover:bg-[#09969F] hover:rounded py-3    ">
          <a href="/Faq">EVENTS</a>
        </li>
        <li className=" py-3  ">
          <a href="/Faq">REPORTS</a>
        </li>
      </ul>
      <div className=" pt-[]">
        <p className="pt-[400px]">Midlevel User</p>
        <button className=" pl-4 text-[red]">logout</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;