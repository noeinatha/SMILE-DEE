import StepBar from "@/components/StepBar";
import { ClassNames } from "@emotion/react";

export default function BookingDentist() {
  return (
    <>
      <div className="flex flex-col gap-2.5 justify-center">
        <StepBar step={0} />
      </div>
      <div className="w-full h-fit flex flex-row-reverse px-40">
        <button className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple">
          NEXT
        </button>
      </div>
    </>
  );
}
