import React, { useState } from "react";
import Logins from "./Logins";
import "./Login.css";
import LogOutSession from "./LogOutSession";
import Delete from "./Delete";
import ConfirmPassword from "./ConfirmPassword";
import TwoFactorAuthentification from "./TwoFactorAuthentification";

const Login = () => {
  const [changePassword, SetChangePassword] = useState(false);
  const [twoFactor, SetTwoFactor] = useState(false);
  const [logOut, SetLogOut] = useState(false);
  const [deleteAccount, SetDeleteAccount] = useState(false);

  return (
    <div className="m-6  text-center lg:text-start lg:w-[850px] ">
      <div>
        <h1 className=" text-[24px] font-semibold leading-[45px]">Logins</h1>
      </div>
      <div className="block lg:flex justify-between lg:border-b-2 pb-[30px] pt-[50px]">
        <div>
          <h2>Password</h2>
          <span>Last Updated: 4th August</span>
        </div>
        <button
          onClick={() => SetChangePassword((prev) => !prev)}
          className=" button w-[180px] lg:w-[230px] h-[58px]"
        >
          Change Password
        </button>
      </div>
      <div className={changePassword ? "" : "hidden"}>
      <ConfirmPassword onClickClose={() => SetChangePassword((prev) => !prev)} />
      </div>

      <h1 className="text-[24px] leading-[45px]">Security</h1>
      <div className="body">
        <Logins
          header="Two factor Authetication"
          text="Enabling this will provide an extra layer of security for 
        your account. when logging in, we will ask for a special
        authentication code from your device. "
        />
        <div className="bg-[#37A7AE]  w-[auto] md:w-[300px] md:m-auto lg:m-0  items-center text-center  text-white">
          <button
            onClick={() => SetTwoFactor((prev) => !prev)}
            className="h-[58px] md:w-[auto]   "
          >
            Enable Two-factor Authentication
          </button>
        </div>
      </div>
      <div className={twoFactor ? "" : "hidden"}>
       <TwoFactorAuthentification onClickClose={() => SetTwoFactor((prev) => !prev)} />
      </div>
      <div className="body">
        <Logins
          header="Log out of all sessions"
          text="This will log you out from every device you are currently
        logged in on. If you didn’t log in on any of these devices,
        we can help you secure your accout. "
        />
        <button
          onClick={() => SetLogOut((prev) => !prev)}
          className="button w-[15rem]"
        >
          Log out of all Sessions
        </button>
      </div>
      <div className={logOut ? "flex" : "hidden"}>
        <LogOutSession onClickClose={() => SetLogOut((prev) => !prev)}   />
        
      </div>
      <div className="body">
        <Logins
          header="Delete account"
          text="Deleting your account will remove all of your information
        from our database. This cannot be undone. "
        />

        <button
          onClick={() => SetDeleteAccount((prev) => !prev)}
          className=" button w-[11rem]"
        >
          Delete Account
        </button>
      </div>
      <div className={deleteAccount ? "flex" : "hidden"}>
        <Delete onClickClose={() => SetDeleteAccount((prev) => !prev)} />
        
      </div>
    </div>
  );
};

export default Login;
