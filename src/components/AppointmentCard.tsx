"use client";
import { Icon } from "@iconify/react";
import { Fragment, useState } from "react";
import deleteAppointments from "@/libs/deleteAppointments";
import EditAppointmentCard from "./EditAppointmentCard";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { set } from "mongoose";
export default function AppointmentCard({
  bookingDate,
  userName,
  userId,
  dentistName,
  dentistId,
  dentistTel,
  bookingId,
  token,
}: {
  bookingDate: Dayjs;
  userName: string;
  userId: string;
  dentistName: string;
  dentistId: string;
  dentistTel: string;
  bookingId: string;
  token: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const handleDeleteBooking = async ({ bookingId }: { bookingId: string }) => {
    try {
      await deleteAppointments(bookingId, token);
      console.log(`Booking with ID ${bookingId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  // console.log("mydate", dayjs(bookingDate));
  const date = dayjs(bookingDate).diff(dayjs(), "day");
  const [dateBefore, setDateBefore] = useState<string>();
  useEffect(() => {
    if (date === 0) {
      setDateBefore("TODAY");
    } else if (date >= 1) {
      setDateBefore(`IN ${date} DAYS`);
    }
  }, [date]);
  console.log("date", dateBefore);
  return (
    <div>
      <Fragment>
        <div className="w-[1000px] h-fit px-5 py-5 bg-white rounded-2xl shadow-lg ">
          <div className="flex flex-row justify-between items-center">
            <div className="p-2.5 text-xl font-bold text-darkblue font-inria">
              Appointment Scheduled for
              <span className="font-normal text-darkblue font-inria">
                {" "}
                {userName}
              </span>
            </div>
            {dateBefore === "TODAY" ? (
              <div className="bg-red h-full rounded-lg gap-x-8 px-5 py-2.5 flex flex-row">
                <div className="text-l font-semibold text-white font-inria">
                  {dateBefore}
                </div>
              </div>
            ) : date < 8 ? (
              <div className="bg-vividpurple h-full rounded-lg gap-x-8 px-5 py-2.5 flex flex-row ">
                <div className="text-l font-semibold text-white font-inria">
                  {dateBefore}
                </div>
              </div>
            ) : (
              <div className="bg-fadegray h-full rounded-lg gap-x-8 px-5 py-2.5 flex flex-row ">
                <div className="text-l font-semibold text-darkpurple font-inria">
                  {dateBefore}
                </div>
              </div>
            )}
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
                    {dayjs(bookingDate).format("dddd, MMMM D, YYYY")}
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
                <button
                  className="w-[45px] h-[45px] rounded-full relative bg-fadepurple flex justify-center items-center"
                  onClick={(e) => {
                    setShowModal(true);
                    e.stopPropagation();
                  }}
                >
                  <Icon
                    icon="tabler:edit"
                    color="white"
                    className="w-3/5 h-3/5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <EditAppointmentCard
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          bookingId={bookingId}
          bookingDate={bookingDate}
          userId={userId}
          dentistId={dentistId}
          token={token}
        />
      </Fragment>
    </div>
  );
}
