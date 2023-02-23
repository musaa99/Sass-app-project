import { useRef, useState } from "react";

export default function TwoFactorModal({ setEditPassword }) {
  const [showNext, setShowNext] = useState(1);

  function swapItems() {
    const labelText = document.getElementById("label").textContent;

    console.log(labelText);
    if (labelText === "continue") {
      setShowNext(2);
    } else if (labelText === "confirm email") {
      setShowNext(3);
    } else if (labelText === "verify") {
      setShowNext(4);
    }
  }
  function disableTwoFactor() {
    const paragraphText = document.getElementById("unregister").textContent;
    console.log(paragraphText);
    if (paragraphText === "unregister email address") {
      setShowNext(5);
    }
  }
  return (
    <div>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white w-[825px] h-auto py-8 ">
          <label
            htmlFor="modal"
            className="btn btn-sm btn-circle bg-transparent absolute right-2 z-10 top-2 "
          >
            ✕
          </label>
          <div className="w-full text-center ">
            <h3 className="text-[30px] font-semibold leading-[45px] text-black/[0.85] ">
              {showNext === 4
                ? "Two-factor Authentication is enabled"
                : showNext === 5
                ? "Are you sure?"
                : "Two-factor Authentication"}
            </h3>
            <p className="text-sm font-normal  text-black/[0.7]">
              {showNext === 1
                ? " For security purposes please re-enter your password below."
                : showNext === 2
                ? "Enter an email address to enable us send an authentication code via email "
                : showNext === 3
                ? "A verification code has been sent to your email address. This code will be valid for 10 minutes"
                : showNext === 4
                ? "Your email address is set to Ethanmanroe@chevrontech.com. Authentication  codes will be sent to this email for logging in."
                : "This will disable two-factor authentification entirely"}
            </p>
          </div>
          <div className=" px-[15px] my-10 ">
            {showNext === 1 && (
              <div>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="input input-bordered border-black/[0.85] bg-transparent w-full "
                />
              </div>
            )}
            {showNext === 2 && (
              <div>
                <input
                  type="email"
                  placeholder="Sam@luchismart.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="input input-bordered border-black/[0.85] bg-transparent w-full "
                />
              </div>
            )}
            {showNext === 3 && (
              <div>
                <input
                  type="text"
                  placeholder="Please enter the code here"
                  className="input input-bordered border-black/[0.85] bg-transparent w-full "
                />
              </div>
            )}
            {/* error to display */}
            <div className="hidden text-[#F55151] text-sm font-medium ">
              <p>An error occured while verrifying your password.</p>
              <p>Incorrect password</p>
            </div>
            <div className="flex justify-center w-full space-x-[37px] mt-6 ">
              <label
                htmlFor="modal"
                onClick={() => setShowNext(1)}
                className="px-[22px] py-3.5 text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-black/[0.1] hover:bg-black/[0.1] h-[58px] rounded-xl "
              >
                Cancel
              </label>
              <label
                id="label"
                onClick={swapItems}
                className="px-[22px] text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-[#37A7AE] hover:btn-success hover:text-white h-[58px] rounded-xl "
              >
                {showNext === 1
                  ? "continue"
                  : showNext === 2
                  ? "confirm email"
                  : showNext === 3
                  ? "verify"
                  : showNext === 5
                  ? "ok"
                  : "finish"}
              </label>
            </div>
          </div>
          <div
            onClick={disableTwoFactor}
            className="w-full text-center cursor-pointer"
          >
            <p
              id="unregister"
              className="capitalize text-[20px] font-semibold leading-[30px] text-[#148B92] "
            >
              {showNext === 2 || showNext === 3
                ? " Resend code"
                : showNext === 4
                ? "unregister email address"
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
