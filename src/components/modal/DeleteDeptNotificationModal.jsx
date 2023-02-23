import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DeleteAttendanceModal from "./DeleteAttendanceModal";

export default function DeleteDeptNotificationModal({
  open,
  setOpen,
  deletePerm,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setOpen(false);
  };

  function closeDelete() {
    setOpen(false);
  }

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
                <Dialog.Panel className="text-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-black/[0.85] "
                  >
                    Are you sure you want to delete this information?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If you delete this item you will lose all related data.
                      This cannot be recovered.
                    </p>
                  </div>

                  <div className="mt-5 space-x-[37px] ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black/20 px-4 capitalize border-none py-2 text-sm font-medium text-black/[0.85] btn hover:bg-black/20 "
                      onClick={closeDelete}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={openModal}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#F55151] px-4 capitalize border-none py-2 text-sm font-medium text-white btn hover:bg-[#F55151] "
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
      <DeleteAttendanceModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deletePerm={deletePerm}
        id={id}
      />
    </>
  );
}
