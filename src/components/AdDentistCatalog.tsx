import DentistCard from "@/components/DentistCard";
import { Icon } from "@iconify/react";
import CreateDentistCard from "./CreateDentistCard";
import { Fragment } from "react";
import * as React from "react";
import { useState } from "react";
export default async function AdDentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;

  function addDentist() {
    console.log("add dentist");
  }
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Fragment>
        <div className="flex flex-row justify-between items-center w-full px-20">
          <div className="w-full text-5xl font-bold text-center text-red py-5 ">
            GET TO KNOW OUR <span className="text-darkblue"> DENTIST</span>{" "}
          </div>
          <button
            className="w-[45px] h-[45px] rounded-full relative bg-vividpurple flex justify-center items-center"
            onClick={() => setShowModal(true)}
          >
            <Icon
              icon="gridicons:create"
              color="white"
              className="w-3/5 h-3/5"
            />
          </button>
        </div>
        <div className=" m-5 flex flex-wrap justify-start gap-20 px-20">
          {dentistJsonReady.data.map((dentistItem: Object) => (
            <DentistCard
              dentistName={dentistItem.name}
              dentistExpertist={dentistItem.expertist}
              hospitalName={dentistItem.hospital}
              hospitalAddress={dentistItem.address}
              dentistTel={dentistItem.tel}
              imgSrc={dentistItem.picture}
            />
          ))}
        </div>
        <CreateDentistCard
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      </Fragment>
    </div>
  );
}
