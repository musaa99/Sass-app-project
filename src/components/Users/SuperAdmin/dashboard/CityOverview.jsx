import React from "react";

const CityOverview = (props) => {
  const { header, employee, credential, admin, standard, department } = props;

  return (
    <div className="mb-4 ">
      <h1 className="font-medium text-2xl mb-2 text-black leading-[36px]">
        {header}
      </h1>
      <div className="text-base text-black font-semibold">
        <h6 className=""> {department}</h6>
        <h6 className=""> {employee}</h6>
        <h6 className=""> {admin}</h6>
        <h6 className=""> {standard}</h6>
        <h6 className=""> {credential}</h6>
      </div>
    </div>
  );
};

export default CityOverview;
