import BookingInfoCard from "@/components/BookingInfoCard";
import MiniDentistCard from "@/components/MiniDentistCard";
import StepBar from "@/components/StepBar";

export default function BookingInfo() {
  return (
    <>
      <div className="flex flex-col gap-2.5 items-center">
        <StepBar step={1} />
        <div className="flex flex-row gap-28">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="p-2.5 font-sans font-medium text-md text-darkblue">
                Scheduled to:
              </div>
              <MiniDentistCard />
            </div>
            <div className="flex flex-col gap-5">
              <div className="p-2.5 font-sans font-medium text-md text-darkblue">
                Scheduled for:
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="gap-2.5 p-2.5 font-sans font-medium text-xl text-darkpurple">
              Booking information
            </div>
            <BookingInfoCard />
            <div className="w-full h-fit flex flex-row-reverse">
              <button className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple">
                CONFRIM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
