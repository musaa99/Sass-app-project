import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { mutate } from "swr";
import { deleteEmployeeById } from "../../services/requests";

export default function DeleteAttendanceModal({
  isOpen,
  setIsOpen,
  deletePerm,
  id,
}) {
  const closeModal = () => setIsOpen(false);
  const [detail, setDetails] = useState({
    password: "",
    reason: "",
  });
  const canProceed = Boolean(detail.password) && Boolean(detail.reason);

  async function handleDelete() {
    if (deletePerm === "delete employee") {
      const res = await deleteEmployeeById(id);
      if (res.status) {
        console.log(res.message);
        mutate("api/all-employees");
      }
    } else {
    }
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
            <div className="flex min-h-full items-center justify-center p-4 text-center relative">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[484px] transform overflow-hidden rounded-2xl bg-white py-6 px-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-black/[0.85]"
                  >
                    Are you sure you want to delete?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-base text-black/70">
                      To delete plaese enter the following details
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="font-medium text-black/[0.85] capitalize text-base mb-0.5 ">
                      password
                    </p>
                    <input
                      value={detail.password}
                      onChange={(e) =>
                        setDetails({ ...detail, password: e.target.value })
                      }
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered border-2 w-full bg-transparent "
                    />
                    {/* error message */}
                    <p className="text-[#F33232] text-xl hidden">
                      Password is incorrect
                    </p>
                  </div>
                  <div className="">
                    <p className="font-medium text-black/[0.85] capitalize text-base mb-0.5 ">
                      reason
                    </p>
                    <textarea
                      value={detail.reason}
                      onChange={(e) =>
                        setDetails({ ...detail, reason: e.target.value })
                      }
                      className="textarea textarea-bordered border-2 w-full bg-transparent"
                      placeholder="State reason(s)"
                    ></textarea>
                  </div>
                  <div
                    onClick={closeModal}
                    className="absolute top-3 right-5 w-8 h-8 cursor-pointer hover:bg-red-500 hover:text-white rounded-full flex justify-center items-center"
                  >
                    ✕
                  </div>
                  <div className="mt-6 w-full text-right">
                    <button
                      disabled={!canProceed}
                      onClick={handleDelete}
                      type="button"
                      className={
                        `${!canProceed ? " bg-[#37A7AE]/40 " : ""}` +
                        "capitalize px-[50px] inline-flex justify-center rounded-md border border-transparent bg-[#37A7AE] py-3 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      }
                    >
                      proceed
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
