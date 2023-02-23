import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function EmployeeDetailsModal({ open, setOpen }) {
  const closeModal = () => setOpen(false);
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
                <Dialog.Panel className="text-left w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-[26px] font-medium text-black/[0.85] mb-10 "
                  >
                    20th, June 2022.
                  </Dialog.Title>
                  <div className="text-xl text-black/70 space-y-[4px]">
                    <p>
                      <span className="font-medium mr-2">Employee Name:</span>
                      <span>Rita Dawins</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Employee ID:</span>
                      <span>1243</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Email Address:</span>
                      <span>ritadawins@chevrontech.com</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Department:</span>
                      <span>Human resources</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Position:</span>
                      <span>NIL</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Credential:</span>
                      <span>RFID Card</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Sign In:</span>
                      <span>08:40 AM</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Sign Out:</span>
                      <span>04:04 PM</span>
                    </p>
                    <p>
                      <span className="font-medium mr-2">Time at work:</span>
                      <span>8 hours</span>
                    </p>
                  </div>

                  <div className="mt-5 space-x-[37px] w-full flex justify-end ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black/20 px-4 py-2 text-sm font-medium text-black/[0.85] btn hover:bg-black/20 "
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#F55151] px-4 py-2 text-sm font-medium text-black/[0.85] btn hover:bg-[#F55151] "
                    >
                      Delete
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
