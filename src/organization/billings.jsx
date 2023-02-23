import UtilityHeader from "../components/headers/UtilityHeader";
import { BsCreditCardFill, BsPaypal } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { BiTransferAlt } from "react-icons/bi";
import CredentialToggle from "../components/CredentialToggle";
import LocationMultiSelect from "../components/multiSelect/LocationMultiSelect";

export default function Billings() {
  return (
    <div className="w-[calc(100vw-330px)] pr-4 max-w-7xl pb-52  ">
      <div className="w-full mb-8">
        <UtilityHeader title={"billing"} subtitle={""} backLink={""} />
      </div>
      <div className="flex space-x-[40px]">
        <div className=" w-full max-w-[360px] cursor-pointer  ">
          <div className="bg-[#FFE24D33] py-[30px] px-6 rounded-t-[40px] w-full flex flex-col items-center">
            <p className="text-[30px] text-black font-medium capitalize mb-6">
              basic
            </p>
            <div className="flex items-center justify-center ">
              <ul className="list-disc text-black ">
                <li className="">multi branch</li>
                <li className="">access to Luchismart Mobile App</li>
                <li className="">video intercom system</li>
                <li className="">access control</li>
                <li className="">workflow management</li>
                <li className="">compliance</li>
                <li className="">maximum of 100 staff</li>
              </ul>
            </div>
            <p className="mt-[30px] text-black text-4xl font-bold">$ 5</p>
          </div>
          <p className="bg-white text-[#FFE24D] text-center font-medium capitalize p-6 rounded-b-[40px] text-[30px] ">
            purchase
          </p>
        </div>
        <div className="w-full max-w-[360px] cursor-pointer">
          <div className="bg-[#FF777733] py-[30px] px-6 rounded-t-[40px] w-full flex flex-col items-center">
            <p className="text-[30px] text-black font-medium capitalize mb-6">
              standard
            </p>
            <div className="flex items-center justify-center ">
              <ul className="list-disc text-black ">
                <li className="">one branch</li>
                <li className="">access to Luchismart Mobile App</li>
                <li className="">video intercom system</li>
                <li className="">access control</li>
                <li className="">workflow management</li>
                <li className="">compliance</li>
                <li className="">maximum of 5 staff</li>
              </ul>
            </div>
            <p className="mt-[30px] text-black text-4xl font-bold">$ 10</p>
          </div>
          <p className="bg-white text-#FF7777] text-center font-medium capitalize p-6 rounded-b-[40px] text-[30px] ">
            upgrade
          </p>
        </div>
        <div className="w-full max-w-[360px] cursor-pointer">
          <div className="bg-[#5AA3F933] py-[30px] px-6 rounded-t-[40px] w-full flex flex-col items-center">
            <p className="text-[30px] text-black font-medium capitalize mb-6">
              enterprice
            </p>
            <div className="flex items-center justify-center ">
              <ul className="list-disc text-black ">
                <li className="">one branch</li>
                <li className="">access to Luchismart Mobile App</li>
                <li className="">video intercom system</li>
                <li className="">access control</li>
                <li className="">workflow management</li>
                <li className="">compliance</li>
                <li className="">unlimited staff</li>
                <li>time and attendance system</li>
              </ul>
            </div>
            <p className="mt-[30px] text-black text-4xl font-bold">$ 20</p>
          </div>
          <p className="bg-white text-[#5AA3F9] text-center font-medium capitalize p-6 rounded-b-[40px] text-[30px] ">
            upgrade
          </p>
        </div>
      </div>
      <div>
        <p className="capitalize text-black text-lg font-semibold mt-10">
          payment method
        </p>
        <p className="text-black/60 text-base font-medium">
          Select payment method
        </p>
        <div>
          <div className="bg-white rounded-md w-full max-w-xs h-20 my-4 flex space-x-6 capitalize px-4 items-center cursor-pointer text-[#37A7AE] hover:bg-[#37A7AE] hover:text-white ">
            <BsCreditCardFill className="w-6 h-6" />
            <p className="text-black font-medium text-lg">debit/credit card</p>
          </div>
          <div className="bg-white rounded-md w-full max-w-xs h-20 my-4 flex space-x-6 capitalize px-4 items-center cursor-pointer text-[#37A7AE] hover:bg-[#37A7AE] hover:text-white ">
            <BsPaypal className="w-6 h-6" />
            <p className="text-black font-medium text-lg">paypal</p>
          </div>
          <div className="bg-white rounded-md w-full max-w-xs h-20 my-4 flex space-x-6 capitalize px-4 items-center cursor-pointer text-[#37A7AE] hover:bg-[#37A7AE] hover:text-white ">
            <FaAddressCard className="w-6 h-6" />
            <p className="text-black font-medium text-lg">billing address</p>
          </div>
          <div className="bg-white rounded-md w-full max-w-xs h-20 my-4 flex space-x-6 capitalize px-4 items-center cursor-pointer text-[#37A7AE] hover:bg-[#37A7AE] hover:text-white ">
            <BiTransferAlt className="w-6 h-6" />
            <p className="text-black font-medium text-lg">transfer</p>
          </div>

          <div className="flex items-center space-x-10 my-10">
            <div>
              <p className="capitalize text-black text-base font-semibold">
                Add payment method for all
              </p>
              <p className="text-black/60 text-sm font-medium">
                Choose to add a payment method for all
              </p>
            </div>
            <div>
              <CredentialToggle />
            </div>
          </div>
          <div className=" ">
            <div>
              <p className="capitalize text-black text-base font-semibold">
                Add payment method individually
              </p>
              <p className="text-black/60 text-sm font-medium">
                Choose to add payment methods seperately
              </p>
            </div>
            <div className="mt-4">
              <LocationMultiSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
