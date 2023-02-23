import UtilityHeader from "../../components/headers/UtilityHeader";
import OccupancyTab from "../../components/OccupancyTab";
// import ProductivityTab from "../../components/ProductivityTab";

export default function OccupancyManagement() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"occupancy management"} />
      <div className="w-full max-w-[1158px] mb-24 bg-hreen-500  ">
        <OccupancyTab />
      </div>
    </main>
  );
}
