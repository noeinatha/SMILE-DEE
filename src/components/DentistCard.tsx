"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Fragment, useState } from "react";
import EditDentistCard from "./EditDentistCard";
import deleteDentist from "@/libs/deleteDentist";
export default function DentistCard({
  dentistName,
  dentistExpertist,
  hospitalName,
  hospitalAddress,
  dentistTel,
  imgSrc,
  dentistid,
  token,
}: {
  dentistName: string;
  dentistExpertist: string;
  hospitalName: string;
  hospitalAddress: string;
  dentistTel: string;
  imgSrc: string;
  dentistid: string;
  token: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const handleDeleteDentist = async ({ dentistid }: { dentistid: string }) => {
    try {
      await deleteDentist(dentistid, token);
      console.log(`Dentist with ID ${dentistid} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting dentist:", error);
    }
  };
  return (
    <div>
      <Fragment>
        <div className="w-[300px] h-[380px] bg-white rounded-2xl shadow-lg p-2.5">
          <div className="w-full h-[120px] flex justify-center items-center mb-2.5">
            <div className="w-[117px] h-[117px] rounded-full relative z-10">
              <Image
                src={imgSrc}
                alt="Dentist Picture"
                fill={true}
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-full h-[168px]">
            <div className="w-full h-2/5 flex flex-col justify-center">
              <div className="text-lg text-darkblue font-bold pl-2.5 text-center py-1.5 px-2.5 font-inria">
                {dentistName}
              </div>
              <div className="text-sm text-gray pl-2.5 text-center py-1.5 px-2.5 font-inria">
                Expertist: {dentistExpertist}
              </div>
            </div>
            <div className="w-full h-3/5 flex flex-col justify-center px-2.5">
              <div className="w-full h-1/3 px-2.5 py-1.5 text-darkblu  text-sm font-inria">
                Hospital:{hospitalName}
              </div>
              <div className="w-full h-1/3 px-2.5 py-1.5 text-darkblue text-sm font-inria">
                Address: {hospitalAddress}
              </div>
              <div className="w-full h-1/3 px-2.5 py-1.5 text-darkblue text-sm font-inria">
                Tel: {dentistTel}
              </div>
            </div>
          </div>
          <div className="w-full h-[45px] flex flex-row gap-1.5 justify-end px-2.5">
            <button
              className="w-[45px] h-full rounded-full relative bg-red hover:bg-orange flex justify-center items-center"
              onClick={() => handleDeleteDentist({ dentistid })}
            >
              <Icon
                icon="mdi:bin-outline"
                color="white"
                className="w-3/5 h-3/5"
              />
            </button>
            <button
              className="w-[45px] h-full rounded-full relative bg-fadepurple hover:bg-vividpurple flex justify-center items-center"
              onClick={(e) => {
                setShowModal(true);
                e.stopPropagation();
              }}
            >
              <Icon icon="tabler:edit" color="white" className="w-3/5 h-3/5" />
            </button>
          </div>
        </div>
        <EditDentistCard
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          dentistName={dentistName}
          dentistExpertist={dentistExpertist}
          hospitalName={hospitalName}
          hospitalAddress={hospitalAddress}
          dentistTel={dentistTel}
          imgSrc={imgSrc}
          dentistid={dentistid}
          token={token}
        />
      </Fragment>
    </div>
  );
}
