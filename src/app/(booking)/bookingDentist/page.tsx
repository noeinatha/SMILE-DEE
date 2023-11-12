import SelectDentistCard from "@/components/SelectDentistCard";
import StepBar from "@/components/StepBar";

export default function BookingDentist() {
  return (
    <div className="flex flex-col gap-2.5 items-center bg-pageBG h-screen">
      <StepBar step={0} />
      <div className="w-full h-fit flex flex-row-reverse px-40">
        <button className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple">
          NEXT
        </button>
      </div>
      <div className="flex flex-wrap gap-10 px-10 py-5">
        <SelectDentistCard />
        <SelectDentistCard />
        <SelectDentistCard />
        {/* <SelectDentistCard />
        <SelectDentistCard /> */}
        <SelectDentistCard />
      </div>
    </div>
  );
}
