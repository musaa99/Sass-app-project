import UtilityHeader from "../../components/headers/UtilityHeader";
import HelpSupportAccordion from "../../components/HelpSupportAccordion";

export default function HelpSupport() {
  return (
    <main className="relative w-[calc(100vw-330px)] max-w-7xl pb-8 ">
      <UtilityHeader title={"help & support"} />

      <div className="w-full max-w-[793px]  ">
        <HelpSupportAccordion />
      </div>
    </main>
  );
}
