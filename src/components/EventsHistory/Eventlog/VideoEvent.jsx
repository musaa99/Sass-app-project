// import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react";

// import { Videodata } from "../../../assets/data/VideoData";
// import Checkbox from "./Checkbox";

// const VideoEvent = () => {
//   const [isCheckAll, setIsCheckAll] = useState(false);
//   const [isCheck, setIsCheck] = useState([]);
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setList(Videodata);
//   }, [list]);

//   const handleSelectAll = (e) => {
//     setIsCheckAll(!isCheckAll);
//     setIsCheck(list.map((li) => li.id));
//     if (isCheckAll) {
//       setIsCheck([]);
//     }
//   };

//   // const handleClick = (e) => {
//   //   const { id, checked } = e.target;
//   //   setIsCheck([...isCheck, id]);
//   //   if (!checked) {
//   //     setIsCheck(isCheck.filter((item) => item !== id));
//   //   }
//   // };

//   const handleClick = (e) => {
//     const  checked  = e.target.checked;
//     if (checked) {
//        setIsCheck([...isCheck, e.target.id])
//     } else
//     setIsCheck(isCheck.filter((id) => id !== e.target.id));
//     // setIsCheck(revCount => revCount - 1)
//   };

//   const Video = list.map(({ id, Month, log }) => {
//     return (
//       <div className="flex">
//         <div className="flex items-center">
//           <div>
//             <Checkbox
//               key={id}
//               type="checkbox"
//                id={id}
//               handleClick={handleClick}
//               // onChange={handleChange}
//               isChecked={isCheck.includes(id)}
//             />
//           </div>
//           <div className=" flex items-center justify-between bg-[#F7F8F9] rounded-[10px] mr-[115px] border w-[700px] p-2 my-[10px] ">
//             <div>
//               <div className="font-medium text-[22px] leading-[33px]">
//                 {Month}
//               </div>
//               <div className="font-normal text-[18px] leading-[27px] text-black/60">
//                 {log}
//               </div>
//             </div>
//             <Icon icon="eva:arrow-ios-back-fill" rotate={2} />
//           </div>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div className=" flex bg-white m-4">
//       <div className="flex pt-6 justify-between text-[blue]">{setIsCheck.length} Selected</div>

//       <div className="mt-3 ">
//         <div className="ml-[40rem]">
//           <Checkbox
//             type="checkbox"
//             name="selectAll"
//             handleClick={handleSelectAll}
//             isChecked={isCheckAll}
//             className="ml-[40rem]"
//           />
//         </div>

//         {Video}
//       </div>
//     </div>
//   );
// };

// export default VideoEvent;
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import dotsThreeVertical from "@iconify/icons-entypo/dots-three-vertical";
// import { Link } from "react-router-dom";

import { Videodata } from "../../../assets/data/VideoData";
import Checklist from "./Checklist";
import MonthEllipse from "./MonthEllipse";

const VideoEvent = () => {
  const [activeItemsCount, setActiveItemsCount] = useState(0);
  const [isActive, setIsActive] = useState(false);


  //Looping over data
  const items = Videodata.map((x, index) => {
    return (
      <div  className="flex">
        <div className="flex items-center">
          <div>
            <Checklist key={index} setActiveItemsCount={setActiveItemsCount} />
          </div>
          <div className=" flex items-center justify-between bg-[#F7F8F9] rounded-[10px] mr-[115px] border w-[700px] p-2 my-[10px] ">
            <div>
              <div className="font-medium text-[22px] leading-[33px]">
                {x.Month}
              </div>
              <div className="font-normal text-[18px] leading-[27px] text-black/60">
                {x.log}
              </div>
            </div>
            <Icon icon="eva:arrow-ios-back-fill" rotate={2} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" flex justify-between px-4   bg-white ">
      <div className="mt-6">
        <h1 className="whitespace-nowrap  text-[24px] leading-[36px] font-medium">
          weeks
        </h1>
      </div>
      <main className="mt-6">
        <div className=" flex mx-4  lg:w-[700px] ">
          <div className="whitespace-nowrap ml-8 text-[#37A7AE] text-[24px] leading-[36px] font-medium">
            {/* <h1 className=" whitespace-nowrap    ml-8 text-[#37A7AE] text-[24px] leading-[36px] font-medium"> */}
            <h1 className="">{activeItemsCount} Selected</h1>
          </div>

          <div className=" flex lg:ml-[28rem]">
          <Checklist setActiveItemsCount={setActiveItemsCount} />
          <Icon  onClick={() => setIsActive((prev) => !prev)} className=" ml-[5rem]   " icon={dotsThreeVertical} />
          <div  className={
            isActive
              ? " absolute lg:right-[10rem] pt-8 grid grid-cols-1 text-right gap-2 h-[297px] w-[269px]   "
              : "hidden"
          }> <MonthEllipse/>
          </div>
        </div>
        </div>

        <div>{items}</div>
      </main>
    </div>
  );
};

export default VideoEvent;
