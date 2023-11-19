"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import deleteAppointments from "@/libs/deleteAppointments";
export default function AppointmentCard({
  bookingDate,
  userName,
  dentistName,
  dentistTel,
  bookingId,
  token,
}: {
  userName: string;
  dentistName: string;
  dentistTel: string;
  bookingDate: string;
  bookingId: string;
  token: string;
}) {
  const handleDeleteBooking = async ({ bookingId }: { bookingId: string }) => {
    console.log("Hi");
    try {
      await deleteAppointments(bookingId, token);
      console.log(`Booking with ID ${bookingId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  return (
    <div className="w-[1000px] h-fit px-5 py-5 bg-white rounded-2xl shadow-lg ">
      <div className="p-2.5 text-xl font-bold text-darkblue font-inria">
        Appointment Scheduled for
        <span className="font-normal text-darkblue font-inria">
          {" "}
          {userName}
        </span>
      </div>
      <div className="px-10 gap-2.5 flex flex-col w-full y-auto">
        <div className="flex flex-row gap-2.5 h-fit">
          <div className="w-full flex flex-col justify-center items-center gap-2.5">
            <div className="text-xl font-bold text-darkblue font-inria">
              {dentistName}
            </div>
            <div className="text-l text-darkpurple flex flex-row gap-0.5 font-inria">
              <Icon
                icon="solar:phone-bold"
                color="#ed7b7b"
                width="24"
                height="24"
              />
              {dentistTel}
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <div className="bg-fadegray w-full h-full rounded-2xl gap-x-8 px-5 py-2.5 flex flex-row">
            <div className="h-full flex justify-center items-center">
              <Icon
                icon="mdi:calendar-clock"
                color="#504099"
                width="50"
                height="60"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start h-full">
              <div className="text-l font-bold font-inria">Date</div>
              <div className="text-l text-darkpurple font-inria">
                {bookingDate}
              </div>
            </div>
          </div>
          <div className="h-full flex flex-row justify-center items-center gap-5 ml-5">
            <button
              className="w-[45px] h-[45px] rounded-full relative bg-red flex justify-center items-center"
              onClick={() => handleDeleteBooking({ bookingId })}
            >
              <Icon
                icon="mdi:bin-outline"
                color="white"
                className="w-3/5 h-3/5"
              />
            </button>
            <button className="w-[45px] h-[45px] rounded-full relative bg-fadepurple flex justify-center items-center">
              <Icon icon="tabler:edit" color="white" className="w-3/5 h-3/5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
