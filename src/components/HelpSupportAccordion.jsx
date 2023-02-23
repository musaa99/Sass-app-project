import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { helpSupportDetails } from "../data/data";

export default function HelpSupportAccordion() {
  return (
    <div className="w-full">
      <div className="w-full ">
        {helpSupportDetails.map((item) => (
          <Disclosure key={item.id}>
            {({ open }) => (
              <div className="mb-4">
                <Disclosure.Button className="flex w-full h-[87px] justify-between items-center rounded-[10px] bg-white px-4 py-2 text-left border border-gray-600 ">
                  <span className="text-[26px] font-medium leading-[39px] text-black/[0.85] capitalize">
                    {item.title}
                  </span>
                  <IoIosArrowUp
                    className={`${
                      open ? "" : "rotate-180 transform"
                    } h-[37px] w-[37px] text-black/70`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-10 py-6 rounded-[10px] bg-[#37A7AE1A]/70 text-[26px] font-normal text-black/70 leading-[39px]">
                  {item.content.map((item, index) => (
                    <p key={index} className="mb-4 capitalize">
                      {item}
                    </p>
                  ))}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
