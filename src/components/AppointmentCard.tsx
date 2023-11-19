"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function AppointmentCard({
  bookingDate,
  userName,
  dentistName,
  dentistTel,
}: {
  bookingDate: any;
  userName: any;
  dentistName: any;
  dentistTel: any;
}) {
  return (
    <div className="w-[1000px] h-[320px] px-5 py-5 bg-white rounded-2xl shadow-lg ">
      <div className="p-2.5 text-2xl font-bold text-darkblue font-inria">
        Appointment Scheduled for
        <span className="font-normal text-darkblue font-inria">
          {" "}
          {userName}
        </span>
      </div>
      <div className="px-10 gap-2.5 flex flex-col w-full y-auto">
        <div className="flex flex-row gap-2.5 h-[105px]">
          <div className="w-[105px] h-[105px] rounded-full relative ">
            <Image
              src={"/img/defaultProfile.jpg"}
              alt="Dentist Picture"
              fill={true}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2.5">
            <div className="text-xl text-darkblue font-inria">
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
        <div className="w-full h-[95px] flex flex-row justify-between">
          <div className="bg-fadegray w-[728px] h-[95px] rounded-2xl gap-x-8 px-10 flex flex-row">
            <div className="h-full flex justify-center items-center">
              <Icon
                icon="mdi:calendar-clock"
                color="#504099"
                width="50"
                height="60"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start h-full">
              <div className="text-xl font-bold font-inria">Date & Time</div>
              <div className="text-darkpurple font-inria">{bookingDate}</div>
            </div>
          </div>
          <div className="h-full flex flex-row justify-center items-center gap-5">
            <div className="w-[45px] h-[45px] rounded-full relative bg-red flex justify-center items-center">
              <Icon
                icon="mdi:bin-outline"
                color="white"
                className="w-3/5 h-3/5"
              />
            </div>
            <div className="w-[45px] h-[45px] rounded-full relative bg-fadepurple flex justify-center items-center">
              <Icon icon="tabler:edit" color="white" className="w-3/5 h-3/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
