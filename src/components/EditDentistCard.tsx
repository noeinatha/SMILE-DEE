"use client";
import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { addDentist } from "@/actions/addDentist";
import updateDentist from "@/libs/updateDentist";
import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { useEdgeStore } from "@/libs/edgestore";
export default function EditDentistCard({
  isVisible,
  onClose,
  dentistName,
  dentistExpertist,
  hospitalName,
  hospitalAddress,
  dentistTel,
  imgSrc,
  dentistid,
  token
}: {
  isVisible: boolean;
  onClose: () => void;
  dentistName: string;
  dentistExpertist: string;
  hospitalName: string;
  hospitalAddress: string;
  dentistTel: string;
  imgSrc: string;
  dentistid: string;
  token: string;
}) {
  const [name, setName] = useState(dentistName);
  const [expertist, setExpertist] = useState(dentistExpertist);
  const [hospital, setHospital] = useState(hospitalName);
  const [address, setAddress] = useState(hospitalAddress);
  const [tel, setTel] = useState(dentistTel);
  const [picture, setPicture] = useState(imgSrc);
  const [file, setFile] = React.useState<File>();
  const { edgestore } = useEdgeStore();
  if (!isVisible) return null;
  const handleEditDentist = async ({ dentistid }: { dentistid: string }) => {
    try {
      await updateDentist(dentistid, token ,name, expertist, hospital, address, tel, picture);
      console.log(`Dentist with ID ${dentistid} edit successfully.`);
    } catch (error) {
      console.error("Error editing dentist:", error);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={() => onClose()}
    >
      <div
        className="w-[700px] h-[448px] bg-white rounded-2xl shadow-lg p-10 flex flex-row gap-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-auto h-full mb-2.5 relative">
          <div className="w-full flex flex-row justify-center items-center mb-5">
            <div className="w-[117px] h-[117px] rounded-2xl relative ">
              <Image
                src={imgSrc}
                alt="Dentist Picture"
                fill={true}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div>
            <SingleImageDropzone
              width={200}
              height={200}
              value={file}
              onChange={(file) => {
                setFile(file);
              }}
            />
            <div className="w-full flex justify-center items-center">
              <button
                type="button"
                className="p-2.5 mt-2.5 text-white bg-darkpurple font-semibold  text-sm rounded-2xl hover:bg-vividpurple font-inria"
                onClick={async () => {
                  if (file) {
                    const res = await edgestore.publicImages.upload({
                      file,
                      onProgressChange: (progress) => {
                        // you can use this to show a progress bar
                        console.log(progress);
                      },
                    });

                    // you can run some server action or api here
                    // to add the necessary data to your database
                    console.log(res);
                    setPicture(res.url);
                  }
                }}
              >
                Upload
              </button>
            </div>
            </div>

        </div>
        <div>
          <div className="flex flex-row gap-5 mb-5">
            <div>
              <div className="font-sans font-medium text-md text-darkpurple pb-3 font-inria">
                Dentist's name:
              </div>
              <div>
                <TextField
                  label="Name"
                  name = "name"
                  variant="outlined"
                  value = {name}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="font-sans font-medium text-md text-darkpurple pb-3 font-inria">
                Expertist:
              </div>
              <div className="flex flex-row gap-20">
                <TextField
                  label="Expertist"
                  name = "expertist"
                  variant="outlined"
                  value = {expertist}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                  onChange={(e) => setExpertist(e.target.value)}
                  
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <div>
              <div className="font-sans font-medium text-md text-darkpurple pb-3 font-inria">
                Hospital:
              </div>
              <div>
                <TextField
                  label="Hospital"
                  name = "hospital"
                  variant="outlined"
                  value={hospital}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                  onChange={(e) => setHospital(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="font-sans font-medium text-md text-darkpurple pb-3 font-inria">
                Address:
              </div>
              <div className="flex flex-row gap-20">
                <TextField
                  label="Address"
                  name = "address"
                  value={address}
                  variant="outlined"
                  defaultValue={hospitalAddress}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <div>
              <div className="font-sans font-medium text-md text-darkpurple pb-3 font-inria">
                Tel:
              </div>
              <div>
                <TextField
                  label="Tel"
                  name="tel"
                  value={tel}
                  variant="outlined"
                  defaultValue={dentistTel}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[45px] flex flex-row justify-end">
            <button className="p-2.5 text-white bg-red font-semibold  text-sm rounded-2xl hover:bg-orage font-inria" onClick={() => handleEditDentist({ dentistid })}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
