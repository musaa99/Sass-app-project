import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

const CardPayment = () => {
  const [paymentsuccess, SetPaymentsuccess] = useState();
  const [cardname, SetCardname] = useState("");
  const [cardnumber, SetCardnumber] = useState("");
  const [expdate, SetExpdate] = useState("");
  const [securitycode, SetSecuritycode] = useState("");
  const [zipcode, SetZipcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-4">
      <header>
        <h1 className="font-bold text-[30px] leading-[45px]">Billing</h1>
        <p className="font-medium text-[24px] leading-[36px]">Payment method</p>
        <button className="text-[#37A7AE]">add card</button>
      </header>
      <main className="bg-white w-[619px]">
        <form onSubmit={handleSubmit} className="p-2">
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                value={cardname}
                onChange={(e) => SetCardname(e.target.value)}
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2  rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                value={cardnumber}
                onChange={(e) => SetCardnumber(e.target.value)}
                placeholder="card number"
                type="text"
              />
            </div>
          </div>
          <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <input
                  class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  value={expdate}
                  onChange={(e) => SetExpdate(e.target.value)}
                  placeholder="MM/YY"
                  type=""
                />
              </div>
            </div>
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1">Security Code</label>
              <div>
                <input
                  class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  value={securitycode}
                  onChange={(e) => SetSecuritycode(e.target.value)}
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Zip code</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                value={zipcode}
                onChange={(e) => SetZipcode(e.target.value)}
                placeholder="code"
                type="text"
              />
            </div>
          </div>

          <p className="text-[12px] leading-[18px]">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Servive apply. I warrant that this location information
            is correct.
          </p>
          <div>
            <button
              onClick={() => SetPaymentsuccess(true)}
              class="block w-full max-w-xs mx-auto bg-[#37A7AE] text-white rounded-lg px-3 py-3 font-semibold"
            >
              {" "}
              Add Card
            </button>
          </div>
          <div className={paymentsuccess ? "" : "hidden "}>
            <PaymentModal onClickContinue={() => SetPaymentsuccess(false)} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default CardPayment;
