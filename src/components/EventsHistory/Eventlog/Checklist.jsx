import React, { useState, useEffect } from "react";

const Checklist = ({  setActiveItemsCount }) => {
  const [isActive, setIsActive] = useState(false);
  

  const changeHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isActive) {
      setActiveItemsCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }

        return prevCount;
      });
    }

    if (isActive) {
      setActiveItemsCount((prevCount) => prevCount + 1);
    }
  }, [isActive, setActiveItemsCount]);

  return <input type="checkbox"  className='w-8 h-5 accent-[#37A7AE]  '  checked={isActive} onChange={changeHandler} />;
};

export default Checklist;