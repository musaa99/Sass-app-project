import React from "react";

const Logins = (props) => {
  const { header, text } = props;

  return (
    <div className=" justify-between ">
      <div className=" my-[30px]">
        <h1 className="font-bold text-[24px] leading-[36px]">{header}</h1>
        <p className="text-[20px] w-[auto] lg:w-[504px]  leading-[30px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Logins;
