import BookingInfoCard from "@/components/BookingInfoCard";
import DateCard from "@/components/DateCard";
import MiniDentistCard from "@/components/MiniDentistCard";
import StepBar from "@/components/StepBar";

export default function BookingInfo() {
  return (
    <>
      <div className="flex flex-col gap-2.5 items-center h-full">
        <StepBar step={1} />
        <div className="w-full flex flex-row justify-evenly p-5">
          <div className="flex flex-col gap-10">
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
          <div className="flex flex-col gap-10">
            <div className="gap-2.5 p-2.5 font-sans font-semibold text-4xl text-darkpurple font-inria">
              Booking information
            </div>
            <BookingInfoCard />
            <div className="w-full h-fit flex flex-row-reverse">
              <button className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple font-inria">
                CONFRIM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
