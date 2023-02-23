import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className=" h-[full] hidden lg:flex">
      

    <div className="bg-white border   h-[full] lg:w-[290px] ">
      <div className=" none mt-[]  ">
        {/* <div className=""> */}
          <img className=" pt-[20px] ml-10" src={logo} alt="" />
        {/* </div> */}
         <ul className=" justify-center pt-[60px]">
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <div className=" active flex items-center lg:ml-[40px]">
                    <div className="">
                    <div className="">{item.icon}</div>
                    </div>
                    <div>
                    <div className="ml-[15px] text-[18px] leading-[27px]">{item.title}</div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul> 
        
        <div className="ml-[60px] pt-[]">
        <p className="pt-[200px]">Midlevel User</p>
        <button className=" text-[red]">logout</button>
        </div>
      </div>
    </div>
    </nav>
  );
};
export default Navbar;
