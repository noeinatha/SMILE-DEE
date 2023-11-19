import DateCard from "@/components/DateCard";
import MiniDentistCard from "@/components/MiniDentistCard";
import SelectDentistCatalog from "@/components/SelectDentistCatalog";
import StepBar from "@/components/StepBar";
import getDentists from "@/libs/getDentists";

export default function BookingDentist() {
  const dentists = getDentists();
  return (
    <div className="flex flex-col gap-2.5 items-center h-screen w-full">
      <StepBar step={0} />
      <div className="w-full h-fit flex flex-row-reverse px-20">
        <button className="w-[100px] h-fit p-2.5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple font-inria">
          CONFRIM
        </button>
      </div>
      <div className="w-full h-screen flex flex-row px-20 justify-center">
        <div className="w-fit h-full flex flex-col justify-start px-10 py-5 bg-red rounded-t-2xl gap-5">
          <div className="flex flex-col gap-5">
            <div className="p-2.5 font-sans font-medium text-2xl text-white font-inria">
              Scheduled to:
            </div>
            <MiniDentistCard />
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-2.5 font-sans font-medium text-2xl text-white font-inria">
              Scheduled on:
            </div>
            <DateCard day="MONDAY" date="19 NOVEMBER" time="08:20 AM" />
          </div>
        </div>
        <SelectDentistCatalog dentistJson={dentists} />
      </div>
    </div>
  );
}
