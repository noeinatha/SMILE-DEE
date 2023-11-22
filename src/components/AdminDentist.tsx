"use client";
import { Icon } from "@iconify/react";
import CreateDentistCard from "./CreateDentistCard";
import { Fragment } from "react";
import * as React from "react";
import { useState } from "react";
export default function AdminDentist() {
  function addDentist() {
    console.log("add dentist");
  }
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Fragment>
        <div className="flex flex-row justify-between items-center w-full px-20 pt-5">
          <div className="w-full text-5xl font-bold text-center text-red py-5 font-inria">
            GET TO KNOW OUR{" "}
            <span className="text-darkblue font-inria"> DENTIST</span>{" "}
          </div>
          <button
            className="w-[60px] h-[60px] rounded-full relative bg-darkpurple hover:bg-vividpurple flex justify-center items-center"
            onClick={() => setShowModal(true)}
          >
            <Icon
              icon="gridicons:create"
              color="white"
              className="w-3/5 h-3/5"
            />
          </button>
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
