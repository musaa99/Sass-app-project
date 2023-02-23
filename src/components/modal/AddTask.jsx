import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useSWR from "swr";
import { getAllDeptFetcher } from "../../services/requests";
import DeptSelectBox from "../multiSelect/DeptSelectBox";

export default function AddTask({ isOpen, setIsOpen }) {
  const { data: allDepartments, error: departmentsError } = useSWR(
    "api/all-dept",
    getAllDeptFetcher,
    {
      refreshInterval: 3000,
      refreshWhenHidden: true,
    }
  );
  const [newTasks, setNewTasks] = useState({
    taskTitle: "",
    deptID: "",
    taskDescription: "",
  });
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black capitalize"
                  >
                    new task
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-sm font-medium capitalize text-black">
                          title
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter title"
                        className="input input-bordered w-full bg-white border-gray-400 "
                      />
                    </div>
                    <div className="form-control w-full my-1 ">
                      <DeptSelectBox
                        title={"department"}
                        data={allDepartments}
                        error={departmentsError}
                        setMethod={setNewTasks}
                        value={newTasks}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-sm font-medium text-black capitalize">
                          description
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-24 border-gray-400 bg-white"
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4 w-full flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border bg-[#07939BCC] px-4 py-2 text-sm font-medium text-white hover:text-[#07939BCC] capitalize hover:bg-white hover:border-[#07939BCC] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
