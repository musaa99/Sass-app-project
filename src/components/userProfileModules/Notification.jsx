import React, { useState } from "react";
import { notificationDetails } from "../../assets/data/userProfileBoard";
import ProfileHeader from "../headers/ProfileHeader";
import AvatarIcon from "../icons/AvatarIcon";

const Notification = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className="w-[calc(100vw-330px)] pl-6 pr-4 max-w-7xl     ">
      <>
        <ProfileHeader title={"notification"} />
      </>
      {!notificationDetails.length ? (
        <div className="w-full text-center h-full flex items-end justify-center ">
          <p className="text-2xl font-medium text-black/[0.85] ">
            You will recieve important update about our device
          </p>
        </div>
      ) : (
        <div className="w-full max-w-[851px] flex flex-col mb-24  ">
          {notificationDetails &&
            notificationDetails.map((item, index) => (
              <div key={item.id}>
                <div className="flex justify-between w-full">
                  <div className="avatar mr-8 ">
                    <div className="w-[94px] h-[94px] rounded-full overflow-hidden  ">
                      <div className="w-full bg-[#07939BCC] h-full flex justify-center items-center">
                        <AvatarIcon />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 capitalize text-[20px] font-medium leading-[30px] text-black/[0.85] ">
                      {item.name}
                    </p>
                    <p className="text-[20px] font-normal leading-[30px] text-black/[0.7] mb-[10px] ">
                      {item.message}
                    </p>
                    <p className="text-[18px] font-normal leading-[30px] text-black/[0.7] mb-4 ">
                      {item.timeSent}
                    </p>
                    {currentIndex === index ? (
                      <div className="flex justify-between">
                        <div className="overflow-hidden mr-12 flex-1 ">
                          <input
                            // value={item.description}
                            type="text"
                            placeholder="Enter response"
                            // onChange={changeInputValue}
                            className="h-[58px] input w-full input-bordered border-2 border-black/[0.1] bg-transparent max-w-[600px] text-black/[0.85] "
                          />
                        </div>
                        <button
                          onClick={() => setCurrentIndex(null)}
                          className="btn-success btn w-[104px] h-[58px] capitalize text-white font-medium rounded-[8px] "
                        >
                          send
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setCurrentIndex(index)}
                        className="btn font-medium w-[104px] h-[58px] capitalize text-black/[0.85] rounded-[8px] bg-black/[0.1] hover:text-white hover:border-0 hover:bg-[#F33232] border-[1px] border-black/[0.05] "
                      >
                        reply
                      </button>
                    )}
                  </div>
                </div>
                {index !== notificationDetails.length - 1 && (
                  <div className="divider max-w-[851px] border-[2px] h-[2px] border-black/[0.2] my-[30px] "></div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
