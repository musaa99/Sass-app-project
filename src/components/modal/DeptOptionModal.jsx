import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { mutate } from "swr";
import { archiveDeptById, archiveEmployeeById } from "../../services/requests";
import DotsIcon from "../icons/DotsIcon";
import DeleteDeptNotificationModal from "./DeleteDeptNotificationModal";

export default function DeptOptionModal({ edit, archive, deletePerm, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  async function handleArchive() {
    if (archive === "archive employee") {
      const res = await archiveEmployeeById(id);
      if (res.status) {
        console.log(res.message);
        mutate("api/all-employees");
      }
    } else {
      const res = await archiveDeptById(id);
      if (res.status) {
        console.log(res.message);
        mutate("api/all-dept");
      }
    }
  }

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
          <Menu.Items className="z-20 absolute right-0 mt-[1px] w-40 origin-top-right divide-y -translate-y-full divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-0.5">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#07939BCC] text-white" : "text-black/[0.85]"
                    } group flex w-full items-center rounded-md px-2 py-0.5 text-xs font-medium capitalize`}
                  >
                    {edit}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleArchive}
                    className={`${
                      active ? "bg-[#07939BCC] text-white" : "text-black/[0.85]"
                    } group flex w-full items-center rounded-md px-2 py-0.5 text-xs font-medium capitalize`}
                  >
                    {archive}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={openModal}
                    className={`${
                      active ? "bg-[#07939BCC] text-white" : "text-black/[0.85]"
                    } group flex w-full items-center rounded-md px-2 py-0.5 text-xs font-medium capitalize`}
                  >
                    {deletePerm}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <DeleteDeptNotificationModal
        open={isOpen}
        setOpen={setIsOpen}
        deletePerm={deletePerm}
        id={id}
      />
    </div>
  );
}
