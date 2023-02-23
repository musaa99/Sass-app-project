import React from "react";
import Modal from "../modal/Modal";

import "./Login.css";

const ConfirmPassword = ({onClickClose}) => {

  return (
    <Modal 
      children={
        <>
          <div className="bg-white border justify-evenly shadow w-[auto] h-[455px] flex flex-col items-center ">
            <h1 className="font-semibold text-[30px] leading-[45px]">
              Confirm your Current Password
            </h1>
            <p className="pt-[10px]">Please confirm your password </p>
            
            <input className="border shadow m-[25px]  w-[-webkit-fill-available] h-[60px]" type="password" />
            <div className="grid grid-cols-2 gap-[37px]  w-auto">
            <button onClick={onClickClose} className=' button  w-[250px] h-[58px]'>Cancel</button>
            {/* <button onClick={() => ChangePassword((prev) => !prev)} className=' button  w-[250px] h-[58px]'>cancll</button> */}

              <button className="bg-[#37A7AE] w-[250px] h-[60px] rounded-[12px]">
                Confirm Password
              </button>
            </div>
            <p>Forgot Password?</p>
          </div>
        </>
      }
    />
    
  );
};

export default ConfirmPassword;
