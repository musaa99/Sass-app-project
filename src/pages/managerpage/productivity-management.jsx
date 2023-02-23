import UtilityHeader from "../../components/headers/UtilityHeader";
import ProductivityTab from "../../components/ProductivityTab";

export default function ProductivityManagement() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl ">
      <UtilityHeader title={"productivity management"} />
      <div className="w-full max-w-[1158px] mb-24 bg-hreen-500  ">
        <ProductivityTab />
      </div>
    </main>
  );
}
