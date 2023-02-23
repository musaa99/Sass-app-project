import UtilityHeader from "../../components/headers/UtilityHeader";

export default function UsersLocationMap() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"map"} />
      <div className="w-full max-w-[1158px] mb-24 bg-hreen-500  ">
        <p className="font-normal text-[30px] leading-[45px] text-black/70 -mt-12">
          The map will show the location of employees using the mobile app.
        </p>
        <div className="w-full bg-slate-500 mt-14 ">
          <img src="/map.svg" alt="dummy map" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
}
