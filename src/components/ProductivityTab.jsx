import { Tab } from "@headlessui/react";
import LocationTab from "./productivityTab/LocationTab";
import ScheduleTab from "./productivityTab/ScheduleTab";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductivityTab() {
  return (
    <div className="w-full px-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-[62px] rounded-[5px] py-[26px] px-[57px] bg-white w-full">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full shadow rounded-[5px] py-[30px] bg-[#F7F8F9] text-[26px] capitalize font-semibold leading-[36px] ",
                "",
                selected
                  ? " text-black/[0.85] border-2 rounded-[5px] border-[#37A7AE] "
                  : "text-black/30  "
              )
            }
          >
            location
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full shadow rounded-[5px] py-[30px] bg-[#F7F8F9] text-[26px] capitalize font-semibold leading-[36px] ",
                "",
                selected
                  ? " text-black/[0.85] border-2 rounded-[5px] border-[#37A7AE] "
                  : "text-black/30  "
              )
            }
          >
            schedules
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-[85px]">
          <Tab.Panel className={classNames("", "")}>
            <LocationTab />
          </Tab.Panel>
          <Tab.Panel className={classNames("", "")}>
            <ScheduleTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
