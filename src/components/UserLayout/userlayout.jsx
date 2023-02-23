import React from "react";
import profilepic from "../../assets/profilepic.svg";

const Userlayout = () => {

  return (
    <div className="m-4 ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[30px] leading-[45px] font-bold">
            Branch <span>: New York</span>
          </h1>
          <h2 className="text-[30px] leading-[45px] font-medium">
            Administration
          </h2>
        </div>

      </div>
      <main>
        <div className="bg-white flex  items-center my-4 w-[auto] md:w-[auto] py-4 rounded-[10px] shadow ">
          <img className=" m-[20px]" src={profilepic} alt="" />
          <div>
            <h6 className="text-black/85  text-[24px] leading-[36px] font-normal">
              May Greyson
            </h6>
            <small className="text-black/60  text-[20px] leading-[30px] font-normal">
              Administrative User
            </small>
          </div>
        </div>
        <div className="bg-white flex  items-center my-4 w-[auto] md:w-[auto] py-4 rounded-[10px] shadow ">
          <img className=" m-[20px]" src={profilepic} alt="" />
          <div>
            <h6 className="text-black/85  text-[24px] leading-[36px] font-normal">
              Bruce Miller
            </h6>
            <small className="text-black/60  text-[20px] leading-[30px] font-normal">
              Administrative User
            </small>
          </div>
        </div>
      </main>
      <h2 className="text-[30px] leading-[45px] font-semi-bold">Standard</h2>
      <main>
        <div className="bg-white flex  items-center my-4 w-[auto] md:w-[auto] py-4 rounded-[10px] shadow ">
          <img className=" m-[20px]" src={profilepic} alt="" />
          <div>
            <h6>May Greyson</h6>
            <small className="text-black/60  text-[20px] leading-[30px] font-normal">
              Administrative User
            </small>
          </div>
        </div>
        <div className="bg-white flex  items-center my-4 w-[auto] md:w-[auto] py-4 rounded-[10px] shadow ">
          <img className=" m-[20px]" src={profilepic} alt="" />
          <div>
            <h6>Oliver Wilson</h6>
            <small className="text-black/60  text-[20px] leading-[30px] font-normal">
              Administrative User
            </small>
          </div>
        </div>
        <div className="bg-white flex  items-center my-4 w-[auto] md:w-[auto] py-4 rounded-[10px] shadow ">
          <img className=" m-[20px]" src={profilepic} alt="" />
          <div>
            <h6>James Cheng</h6>
            <small className="text-black/60  text-[20px] leading-[30px] font-normal">
              Administrative User
            </small>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Userlayout;
