export default function GlobalLockdown() {
  return (
    <div className="w-full bg-white rounded-[10px]">
      <div className="w-full p-[50px] ">
        {[1, 2].map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#F7F8F9] rounded-[5px] py-6 px-10 flex items-center justify-between mb-5"
          >
            <p className="text-xl text-black/[0.85] font-medium w-[135px] ">
              Doors Opens automatically
            </p>
            <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
              <option>Select day</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full max-w-xs border-gray-700 bg-transparent">
              <option>Select time</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
