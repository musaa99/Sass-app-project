import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { scheduleAlarmDetails } from "../../data/data";

export default function ScheduleAlarmModal({ open, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={open} as={Fragment}>
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
              <Dialog.Panel className="w-full capitalize max-w-[450px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-[30px] font-medium leading-6 text-black/[0.85] mb-8"
                >
                  schedule alarm
                </Dialog.Title>
                <div className="mt-2">
                  <div className="form-control w-full my-3">
                    <label className="label">
                      <span className="label-text text-black/[0.85] text-lg font-medium">
                        Alarm
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Alarm type"
                      className="input input-bordered w-full bg-transparent outline-none border-gray-700"
                    />
                  </div>
                  {scheduleAlarmDetails.map((item, index) => (
                    <div key={item.id} className="form-control w-full my-3">
                      <label className="label">
                        <span className="label-text text-black/[0.85] text-lg font-medium">
                          {item.title}
                        </span>
                      </label>
                      <select className="select select-borderedw-full bg-transparent capitalize outline-none border-gray-700">
                        {item.options.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <div className="form-control w-full my-3">
                    <label className="label">
                      <span className="label-text text-black/[0.85] text-lg font-medium">
                        date
                      </span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered w-full border-gray-700 bg-gray-200"
                    />
                  </div>
                  <div className="form-control w-full my-3">
                    <label className="label">
                      <span className="label-text text-black/[0.85] text-lg font-medium">
                        time
                      </span>
                    </label>
                    <select className="select select-borderedw-full bg-transparent capitalize outline-none border-gray-700">
                      <option>12:30 PM</option>
                      <option>14:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 w-full flex justify-end">
                  <button
                    type="button"
                    className="btn capitalize inline-flex justify-center rounded-md border border-transparent bg-[#37A7AE] w-[129px] h-[50px] text-white hover:bg-[#37A7AE] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 text-[26px] font-medium leading-9"
                  >
                    save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
