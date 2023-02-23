import React, { useState } from "react";
import CredentialToggle from "../components/CredentialToggle";
import UtilityHeader from "../components/headers/UtilityHeader";

const Credentials = () => {
  const [showMore, setShowMore] = useState(-1);
  const units = [
    {
      id: 1,
      unitName: "front door",
    },
    {
      id: 2,
      unitName: "operations office",
    },
    {
      id: 3,
      unitName: "marketing office",
    },
    {
      id: 4,
      unitName: "human resources office",
    },
    {
      id: 5,
      unitName: "technology office",
    },
    {
      id: 6,
      unitName: "records room",
    },
  ];
  const hardwares = [
    {
      id: 1,
      type: "fingerprint",
    },
    {
      id: 2,
      type: "RFID Card",
    },
    {
      id: 3,
      type: "mobile app",
    },
    {
      id: 4,
      type: "PIN",
    },
  ];

  function sendEmail() {
    console.log("clicked");
  }
  return (
    <div className="w-[calc(100vw-330px)] pr-4 max-w-7xl pb-52  ">
      <div className="w-full mb-8">
        <UtilityHeader title={"credentials"} subtitle={""} backLink={""} />
      </div>

      <div>
        {hardwares.map((hardware, index) => (
          <div
            key={hardware.id}
            className="w-full max-w-[1095px] bg-white rounded-[20px] p-6 mb-10 "
          >
            <h1 className="leading-6 text-black text-2xl font-bold mb-4 capitalize">
              {hardware.type}
            </h1>
            <div className="overflow-x-auto">
              <table className="table w-full capitalize">
                <thead>
                  <tr>
                    <th></th>
                    <th>employees</th>
                    <th>administrators</th>
                  </tr>
                </thead>
                <tbody>
                  {units.map((unit) => (
                    <tr key={unit.id}>
                      <td>{unit.unitName}</td>
                      <td>
                        <CredentialToggle />
                      </td>
                      <td>
                        <CredentialToggle />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {showMore === index && (
              <div className="mt-8">
                <p className="text-black capitalize font-medium text-lg">
                  special access
                </p>
                <p className="text-black text-sm mb-4">
                  Enter employee email address to give access to credential
                </p>
                <div className="flex space-x-8">
                  <input
                    type="email"
                    placeholder="Enter employee email"
                    className="input input-bordered w-full max-w-xs bg-transparent outline-none"
                  />
                  <button
                    onClick={sendEmail}
                    type="button"
                    className="h-12 px-8 capitalize bg-[#37A7AE] rounded-lg text-white"
                  >
                    send
                  </button>
                </div>
              </div>
            )}
            <div
              onClick={() => setShowMore((i) => (i === index ? -1 : index))}
              className="text-[#37A7AE] text-sm cursor-pointer font-semibold capitalize flex space-x-1 w-fit mt-4"
            >
              <p>view</p>
              <p className="">{showMore === index ? "less" : "more"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credentials;
