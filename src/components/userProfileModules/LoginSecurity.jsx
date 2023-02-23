import { useState } from "react";
import ProfileHeader from "../headers/ProfileHeader";
import DeleteAccountModal from "../modal/DeleteAccountModal";
import LogoutModal from "../modal/LogoutModal";
import PasswordResetModal from "../modal/PasswordResetModal";
import TwoFactorModal from "../modal/TwoFactorModal";

export default function LoginSecurity() {
  const [editPassword, setEditPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const openDelete = () => setOpen(true);
  const openModal = () => setIsOpen(true);

  const changePasswordState = () => setEditPassword((prev) => !prev);
  return (
    <div className="w-[calc(100vw-330px)] pl-6 pr-4 max-w-7xl mb-[30px]      ">
      <>
        <ProfileHeader title={"logins"} />
      </>
      <div className="w-full max-w-[851px]   ">
        <div>
          <p className="capitalize text-2xl font-medium text-black/[0.85] mb-2.5 ">
            password
          </p>
          {!editPassword ? (
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-normal leading-[30px] text-black/[0.7] ">
                Last Updated: <span className="ml-2">4th August</span>
              </p>
              <label
                htmlFor="my-modal-3"
                className="text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-black/[0.1] hover:bg-[#37A7AE] hover:text-white px-[22px] h-[58px] "
              >
                change password
              </label>
            </div>
          ) : (
            <div className="">
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered border-black/[0.85] bg-transparent w-full"
              />
              <p className="font-normal leading-[27px] text-[18px] text-black/50 my-2">
                Password must be up to 8 or more characters with a mix of
                letters, numbers and symbols.
              </p>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered border-black/[0.85] bg-transparent w-full "
              />
              <div className="flex justify-start w-full space-x-[37px] mt-6 ">
                <button
                  onClick={() => setEditPassword(false)}
                  className="px-[22px] py-3.5 text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-black/[0.1] hover:bg-black/[0.1] h-[58px] rounded-xl "
                >
                  Cancel
                </button>
                <button className="px-[22px] text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-[#37A7AE] hover:btn-success hover:text-white h-[58px] rounded-xl ">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="divider max-w-[851px] border-[2px] h-[2px] border-black/[0.2] my-[30px] "></div>

        <div>
          <div className="mt-5 mb-[30px]">
            <h1 className="capitalize font-bold text-black text-[30px] leading-[45px]  ">
              security
            </h1>
          </div>
          <p className="capitalize text-2xl font-medium text-black/[0.85] mb-2.5 ">
            Two factor Authetication
          </p>
          <p className="text-[20px] font-normal leading-[30px] text-black/[0.7] max-w-[544px] mb-4">
            Enabling this will provide an extra layer of security for your
            account. when logging in, we will ask for a special authentication
            code from your device.{" "}
          </p>
          <label
            htmlFor="modal"
            className=" px-[22px] text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-[#37A7AE] hover:bg-[#37A7AE] hover:text-white h-[58px] "
          >
            Enable Two-factor Authentication
          </label>
        </div>
        <div className="divider max-w-[851px] border-[2px] h-[2px] border-black/[0.2] my-[30px] "></div>
        <div>
          <p className=" text-2xl font-medium text-black/[0.85] mb-2.5 ">
            Log out of all Sessions
          </p>
          <p className="text-[20px] font-normal leading-[30px] text-black/[0.7] max-w-[544px] mb-4">
            This will log you out from every device you are currently logged in
            on. If you didn’t log in on any of these devices, we can help you
            secure your accout.
          </p>
          <button
            type="button"
            onClick={openModal}
            className=" px-[22px] text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-black/[0.1] hover:bg-[#37A7AE] hover:text-white h-[58px] "
          >
            Log out of all Sessions
          </button>
        </div>
        <div className="divider max-w-[851px] border-[2px] h-[2px] border-black/[0.2] my-[30px] "></div>

        <div>
          <p className=" text-2xl font-medium text-black/[0.85] mb-2.5 ">
            Delete account
          </p>
          <p className="text-[20px] font-normal leading-[30px] text-black/[0.7] max-w-[544px] mb-4">
            Deleting your account will remove all of your information from our
            database. This cannot be undone.
          </p>
          <button
            type="button"
            onClick={openDelete}
            className=" px-[22px] text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-red-900 bg-black/[0.1] hover:bg-red-700 hover:text-white h-[58px] "
          >
            Delete Account
          </button>
        </div>
      </div>
      <PasswordResetModal setEditPassword={setEditPassword} />
      <TwoFactorModal setEditPassword={setEditPassword} />
      <LogoutModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"  Are you sure you want to log out of all sessions?"}
        subtitle={
          " You will loose all changes if you have unsaved edits in other devices!"
        }
        btnAction={"Log out of all sessions"}
      />
      <DeleteAccountModal open={open} setOpen={setOpen} />
    </div>
  );
}
