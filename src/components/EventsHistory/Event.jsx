import React from "react";
// import { Icon } from "@iconify/react";

// import { Link } from "react-router-dom";
import { Eventhistorydata } from "../../assets/data/Eventhistorydata";
import Country from "../country/Country";
// import EllipsisModal from "./EventHistoryEllipse";
import EventHistoryEllipse from "./EventHistoryEllipse";
const Event = () => {
  // const [edit, SetEdit] = useState("");
 
  
  

  return (
    <main className="m-4 flex justify-between mr-[90px] ">
      <div>
        <h1 className="text-[30px] leading[] font-bold">Event History</h1>
        <div   className=''>
        {Eventhistorydata.map(({ Month, log }) => (
          <div >

            <EventHistoryEllipse title={<div className="bg-white">
              <h1  >{Month}</h1>
              <h1>{log}</h1>
            </div>}  />
          </div>
        ))}
    </div> 
      </div>
      <Country />
    </main>
  );
};

export default Event;
