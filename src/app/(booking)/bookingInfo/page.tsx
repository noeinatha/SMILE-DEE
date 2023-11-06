import StepBar from "@/components/StepBar";

export default function BookingInfo() {
  return (
    <>
      <div className="flex flex-col gap-2.5 justify-center">
        <StepBar title="MAKE AN APPOINTMENT" step={2} />
      </div>
    </>
  );
}
