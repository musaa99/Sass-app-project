import UtilityHeader from "../../components/headers/UtilityHeader";

export default function Capacity() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"capacity management"} />
      <div className="bg-white w-full max-w-[977px] rounded-[20px] mb-24 py-[50px] px-5 ">
        <p className=" text-[40px] leading-[60px] text-center text-black/[0.85] font-semibold px-5 capitalize mb-20 ">
          users currently present
        </p>
        <div className="flex w-full justify-between items-center pl-20 pr-60">
          <div className="">
            <div
              className="radial-progress text-[#37A7AE]"
              style={{
                "--value": "80",
                "--size": "209px",
                "--thickness": "1rem",
              }}
            >
              <p className="text-black/[0.85] font-semibold text-[50px] ">
                80%
              </p>
            </div>
            <div className="mt-6 ">
              <p className="text-[26px] font-semibold text-black/[0.85] mb-[70px] ">
                Current Occupancy
              </p>
              <p className="font-normal text-xl text-black/60">
                <span>20th</span>, <span>June </span>
                <span>2022</span>. <span>03:40 PM</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-black/[0.85] text-center font-semibold text-[50px] mb-[122px] ">
              48
            </p>
            <p className="text-[26px] font-semibold text-black/[0.85] mb-[70px] ">
              Employees
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
