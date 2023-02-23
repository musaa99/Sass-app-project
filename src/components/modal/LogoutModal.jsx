import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function LogoutModal({
  isOpen,
  setIsOpen,
  title,
  subtitle,
  btnAction,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                    className="text-xl font-semibold text-black/[0.85] "
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{subtitle}</p>
                  </div>

                  <div className="mt-5 space-x-[37px] ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black/20 px-4 py-2 text-sm font-medium text-black/[0.85] btn hover:bg-black/20 "
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className={
                        `${
                          btnAction === "logout"
                            ? " bg-[#F55151] hover:bg-[#F55151] "
                            : " bg-[#37A7AE] hover:bg-[#37A7AE] "
                        }` +
                        "inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-black/[0.85] btn  "
                      }
                    >
                      {btnAction}
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
