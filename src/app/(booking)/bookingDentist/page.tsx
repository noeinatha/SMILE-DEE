import SelectDentistCatalog from "@/components/SelectDentistCatalog";
import StepBar from "@/components/StepBar";
import getDentists from "@/libs/getDentists";

export default function BookingDentist() {
  const dentists = getDentists();
  return (
    <div className="flex flex-col gap-2.5 items-center h-full w-full">
      <StepBar step={0} />
      <SelectDentistCatalog dentistJson={dentists} />
    </div>
  );
}
