import UtilityHeader from "../../components/headers/UtilityHeader";

export default function EmployeeLeave() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"leave"} />

      <div className="mb-[50px] overflow-x-auto rounded-[20px] bg-white h-fit w-full py-10 px-[46px] z-50 md:grid grid-cols-2 gap-[46px]   ">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className="card w-full min-w-[320px] max-w-[507px] bg-[#F7F8F9] rounded-[10px] shadow-xl "
          >
            <div className="card-body">
              <h2 className="card-title text-2xl font-medium text-black/[0.85] capitalize">
                Grace Johnson
              </h2>
              <p className="capitalize font-medium text-[23px] text-black/70">
                Operations department
              </p>
              <p className="capitalize font-medium text-xl text-black/60">
                sick leave
              </p>
              <p className="font-normal text-black/[0.85] text-[22px] mb-2 ">
                <span>Leave from:</span> <span>2nd Aug</span> -
                <span>10th Aug</span> <span>2022</span>
              </p>
              <div>
                <select className="select select-bordered w-full max-w-xs text-base bg-white capitalize text-black/[0.85] font-medium">
                  <option disabled>Select option</option>
                  <option>valid</option>
                  <option>investigate</option>
                  <option>invalid</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
