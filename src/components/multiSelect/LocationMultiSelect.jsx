import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

const locations = [
  { id: 1, name: "new york" },
  { id: 2, name: "abuja" },
  { id: 3, name: "lagos" },
  { id: 4, name: "florida" },
];

export default function LocationMultiSelect() {
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <div className="w-full max-w-xs">
      <Listbox
        value={selectedLocations}
        onChange={setSelectedLocations}
        multiple
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative h-12 w-full cursor-default rounded-lg bg-transparent py-2 pl-3 pr-10 text-left border-2 border-gray-500">
            <span className="block truncate text-xs capitalize text-gray-800">
              {selectedLocations.map((person) => person.name).join(", ")}
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
            <Listbox.Options className="locationIdx mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {locations.map((location, locationIdx) => (
                <Listbox.Option
                  key={locationIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 capitalize ${
                      active
                        ? "bg-[#07939BCC] text-white font-semibold"
                        : "text-gray-900"
                    }`
                  }
                  value={location}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {location.name}
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
