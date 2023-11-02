"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function BookingInfoCard() {
  return (
    <div className="w-8/12 h-[320px] bg-white rounded-2xl shadow-lg p-6 space-x-2.5 space-y-2.5">
      <div className="font-sans font-medium text-lg text-darkblue">
        Appointment Scheduled for คุณฟันผุ ว้าวุ่นใหญ่เลยทีนี้
      </div>
      <div className="px-10 flex flex-col">
        <div className="space-x-4 flex flex-row">
          <div className="w-[84px] h-[84px] rounded-full relative ">
            <Image
              src={"/img/defaultProfile.jpg"}
              alt="Dentist Picture"
              fill={true}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-md text-darkblue">นายแพทย์ พอใจ ฟันสวย</div>
            <div className="text-sm text-darkpurple flex flex-row items-center">
              <Icon
                icon="mdi:address-marker-outline"
                className="w-[20px] h-[20px] m-1 text-red"
              />
              SW dev Hospity
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="w-3/4 bg-fadegray rounded-xl flex flex-row justify-center items-center p-5 mt-5 mb-5 mr-5 space-x-2.5 space-y-2.5">
            <Icon
              icon="uil:calender"
              className="w-[60px] h-[60px] mr-1 text-darkpurple"
            />
            <div className="flex flex-col justify-center">
              <div className="font-medium text-md text-darkpurple">
                Date & Time
              </div>
              <div className="text-md text-black">
                Tuesday, December 12,2023 - 03.30 pm.
              </div>
            </div>
          </div>
          <Icon
            icon="mdi:bin-circle"
            className="w-[48px] h-[48px] m-1 text-red"
          />
          <Icon
            icon="mdi:edit-circle"
            className="w-[48px] h-[48px] m-1 text-fadepurple"
          />
        </div>
      </div>
    </div>
  );
}
