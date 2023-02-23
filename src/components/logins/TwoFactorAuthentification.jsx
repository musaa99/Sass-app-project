import React from "react";
import Modal from "../modal/Modal";
import "./Login.css";

const TwoFactorAuthentification = ({onClickClose}) => {
  return (
    <Modal 
      children={
        <>
           <div className="bg-white border justify-evenly shadow w-[825px] h-[393px] flex flex-col items-center ">
            <h1 className="font-semibold text-[30px] leading-[45px]">
              Two-factor Authentication
            </h1>
            <p className="pt-[10px]">
              Enter an email address to enable us send an authentication code
              via email
            </p>
            <input
              className="border shadow  w-[715px] h-[60px]"
              type="email"
              placeholder=""
            />
            <div className="grid grid-cols-2 gap-[37px]">
              <button
                className="button w-[300px] h-[60px] rounded-[12px]"
                onClick={onClickClose}
              >
                Cancel
              </button>
              <button className="bg-[#37A7AE] w-[auto] md:w-[300px] h-[60px] rounded-[12px]">
                Continue
              </button>
            </div>
            <p>Forgot Password?</p>
          </div>
        </>
      }
    />
  );
};

export default TwoFactorAuthentification;
