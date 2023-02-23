import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiCheckDoubleLine } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import React from "react";

export default function PostSelectBox({
  title,
  data,
  error,
  setMethod,
  value,
}) {
  const [selected, setSelected] = useState("Select");

  useEffect(() => {
    selected && setMethod({ ...value, postID: selected.id });
  }, [selected]);

  useEffect(() => {
    data && setSelected(data[0]);
  }, [data]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <p className="mb-2 capitalize font-medium text-sm text-black ">
            {title}
          </p>
          <Listbox.Button className="relative w-full text-black cursor-default rounded-lg  bg-white pl-3 pr-10 text-left border-gray-400 outline-none focus:outline border h-12 sm:text-sm">
            <span className="block truncate ... capitalize text-xs">
              {selected && selected.name}
            </span>
            <span className="pointer-events-none absolute pr-2 top-3 right-1">
              <HiOutlineChevronUpDown className="h-5 w-5 text-black" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto customScrollBar rounded-md bg-white py-1 text-base focus:outline-none sm:text-sm  border border-offGray">
              {error && (
                <p className="italic h-full flex text-xs items-center justify-center text-black">
                  OOPS! an error has occured. Reload to try again!!
                </p>
              )}
              {!error && !data && (
                <div className="italic flex h-full w-full items-center text-xl justify-center space-x-2 text-black ">
                  <CgSpinner className="w-6 h-6 text-orange animate-spin" />
                  <p>Loading...</p>
                </div>
              )}

              {data &&
                data.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 capitalize   ${
                        active ? "bg-[#09929C] text-white " : "text-[#09929C]"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate text-black hover:text-white ${
                            selected ? "font-medium  " : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-navBg">
                            <RiCheckDoubleLine className="h-5 w-5" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
