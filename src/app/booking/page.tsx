import DateCard from "@/components/DateCard";
import MiniDentistCard from "@/components/MiniDentistCard";
import SelectDentistCatalog from "@/components/SelectDentistCatalog";
import StepBar from "@/components/StepBar";
import getDentists from "@/libs/getDentists";

export default function BookingDentist() {
  const dentists = getDentists();
  return (
    <div className="flex flex-col gap-2.5 items-center h-full w-full">
      <StepBar step={0} />
      <div className="w-full h-fit flex flex-row-reverse px-10">
        <button className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple font-inria">
          CONFRIM
        </button>
      </div>
      <div className="w-full h-full flex flex-row px-20 justify-center">
        <div className="w-fit h-screen flex flex-col justify-start gap-10 px-10 py-5 bg-red rounded-t-2xl">
          <div className="flex flex-col gap-5">
            <div className="p-2.5 font-sans font-semibold text-2xl text-darkblue font-inria">
              Scheduled to:
            </div>
            <MiniDentistCard />
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-2.5 font-sans font-semibold text-2xl text-darkblue font-inria">
              Scheduled for:
            </div>
            <DateCard day="MONDAY" date="19 NOVEMBER" time="08:20 AM" />
          </div>
        </div>
        <SelectDentistCatalog dentistJson={dentists} />
      </div>
    </div>
  );
}
