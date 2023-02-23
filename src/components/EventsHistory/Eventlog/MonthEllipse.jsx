import React from 'react'

const MonthEllipse = (x) => {
  
      const SavetoDevice = (x) => {
        console.log("edited", x);
      };
      const SendtoMail = (x) => {
        console.log("edited", x);
      };
    
      const handleDelete = (x) => {
        console.log("deleted", x);
      };
  return (
    <div>
        <div className=" text-[24px] font-medium  grid grid-cols-1 text-right gap-2 bg-white  p-6 shadow h-[297px] w-[269px]  ">
            <button
              className=" border-b-2 text-start"
              onClick={() => SendtoMail(x)}
            >
              Mail
            </button>
            <button className="text-start border-b-2" onClick={() => SavetoDevice(x)}>
              Save to device
            </button>
            <button className="text-start" onClick={() => handleDelete(x)}>
              Delete 
            </button>
          </div>
    </div>
  )
}

export default MonthEllipse