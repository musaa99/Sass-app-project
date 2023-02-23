import React from "react";
import paypal from "../../assets/paypal.svg";
import debit from "../../assets/debit.svg";
import billing from "../../assets/billing.svg";
import transfer from "../../assets/transfer.svg";

const Payment = ({ onClickPay, onClickPaypal, onClickAddress }) => {
  return (
    <div>
      <h2 className="text-[] leading-[] font-normal">Select Payment Method</h2>
      <main className=" grid grid-cols-1 gap-4 rounded-[10px]">
        <div
          onClick={onClickPay}
          className="bg-white flex px-2 w-[550px] py-6 rounded-[10px] "
        >
          <img src={debit} alt="" />
          <h4>Debit/Credit Card</h4>
        </div>
        <div
          onClick={onClickPaypal}
          className="bg-white flex px-2 w-[550px] py-6 rounded-[10px] "
        >
          <img src={paypal} alt="" />

          <h4 className="ml-4">PayPal</h4>
        </div>
        <div
          onClick={onClickAddress}
          className="bg-white flex px-2 w-[550px] py-6 rounded-[10px] "
        >
          <img src={billing} alt="" />

          <h4 className="ml-4">Billing Address</h4>
        </div>

        <div className="bg-white flex px-2 w-[550px] py-6 rounded-[10px] ">
          <img src={transfer} alt="" />

          <h4 className="ml-4">Transfer</h4>
        </div>
      </main>
      <div className="pt-[100px]">
        <h1 className="text-[30px]">Add payment method for all </h1>
        <p>Choose to add a payment method for all</p>
      </div>
      <div className="pt-[90px] mb-[30px]">
        <h1 className="text-[30px]">Add payment method individually </h1>
        <p>Choose to add a payment methods seperately</p>
        <select className="w-fit-content px-3 py-2 mb-1 border-2  rounded-md focus:outline-none focus:border-indigo-500 transition-colors"  >
              

              <option>Abuja</option>
              <option>New York</option>
              <option>Lagos</option>
              <option>Florida</option>
              
            </select>
      </div>
    </div>
  );
};

export default Payment;
