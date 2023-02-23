import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

const hardwares = [
  { id: 1, name: "fingerprint" },
  { id: 2, name: "RFID Card" },
  { id: 3, name: "mobile app" },
  { id: 4, name: "PIN" },
];

export default function CredentialSelect({ setMethod, value }) {
  const [selectedHardwares, setSelectedHardwares] = useState([]);

  function changeCredState(position) {
    const updatePick = value.map((item, index) =>
      position === index ? !item : item
    );
    setMethod([...updatePick]);
  }
  return (
    <div className="w-full">
      <Listbox
        value={selectedHardwares}
        onChange={setSelectedHardwares}
        multiple
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative h-12 w-full cursor-default rounded-lg bg-transparent py-2 pl-3 pr-10 text-left border-gray-500 border-2 ">
            <span className="block truncate text-xs capitalize text-black">
              {selectedHardwares.map((person) => person.name).join(", ")}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineChevronUpDown className="h-5 w-5 text-gray-800" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {hardwares.map((hardware, index) => (
                <Listbox.Option
                  key={hardware.id}
                  onClick={() => changeCredState(index)}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 capitalize ${
                      active
                        ? "bg-[#07939BCC] text-white font-semibold"
                        : "text-gray-900"
                    }`
                  }
                  value={hardware}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {hardware.name}
                      </span>
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
