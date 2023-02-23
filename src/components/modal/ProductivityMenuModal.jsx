import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DotsIcon from "../icons/DotsIcon";

export default function ProductivityMenuModal() {
  return (
    <div className="text-right z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn-ghost hover:bg-transparent">
            <DotsIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-20 absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#07939BCC] text-white" : "text-black/[0.85]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                  >
                    Export
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#07939BCC] text-white" : "text-black/[0.85]"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                  >
                    Generate report
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
