import React from "react";

const Billings = (props) => {
  const { header, customClassName, contents, btnText, btnColor ,num} = props;

  return (
    <div className="mx-[auto] m-5 border-[1px] border-[inherit] rounded-[40px] text-justify   ">
      {/* // <div className="  rounded-[40px]  " > */}
      <div className={`${customClassName} w-[300px]    text-center`}>
        <h2 className="text-[30px] leading-[45px] font-medium ">{header}</h2>
        <div className=" p-[30px]  text-justify ">
          {contents.map((x) => (
            <li className="text-[] my-2 h-[44px]">{x}</li>
          ))}
        </div>
        <p className="text-[68px] py-4 font-bold">${num}</p>
      </div>
      <div className="text-center">
        <button className={`text-[1rem] my-4 text-center ${btnColor}`}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Billings;
