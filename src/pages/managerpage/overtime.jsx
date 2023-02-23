import UtilityHeader from "../../components/headers/UtilityHeader";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function OverTime() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"overtime"} />

      <div className="mb-[50px] overflow-x-auto rounded-[20px] bg-white h-fit w-full py-10 px-[46px] z-50 md:grid grid-cols-2 gap-[46px]   ">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className="card w-full min-w-[320px] max-w-[507px] bg-[#F7F8F9] rounded-[10px] shadow-xl "
          >
            <div className="card-body">
              <h2 className="card-title text-2xl font-medium text-black/[0.85] capitalize">
                Kal Norman
              </h2>
              <p className="capitalize font-medium text-[23px] text-black/70">
                Operations department
              </p>
              <div className="font-normal text-black/[0.85] text-[22px] flex items-center space-x-[4px] ">
                <AiOutlineClockCircle />
                <p>
                  <span>2hrs overtime on</span> <span>2nd Aug</span>,
                  <span className="ml-2">2022</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
