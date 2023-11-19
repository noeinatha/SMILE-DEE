"use client";
import { TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";
export default function EditDentistCard({
  isVisible,
  onClose,
  dentistName,
  dentistExpertist,
  hospitalName,
  hospitalAddress,
  dentistTel,
  imgSrc,
}: {
  isVisible: boolean;
  onClose: () => void;
  dentistName: string;
  dentistExpertist: string;
  hospitalName: string;
  hospitalAddress: string;
  dentistTel: string;
  imgSrc: string;
}) {
  if (!isVisible) return null;
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
        <div className="w-[120px] h-[120px] flex justify-center items-center mb-2.5 relative">
          <div className="w-[117px] h-[117px] rounded-full relative ">
            <Image
              src={imgSrc}
              alt="Dentist Picture"
              fill={true}
              className="object-cover rounded-full"
            />
          </div>
          <button>
            <Icon
              icon="icon-park-solid:add-one"
              color="#ed7b7b"
              width="30"
              height="30"
              className="absolute bottom-0 right-2"
            />
          </button>
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
                  variant="outlined"
                  defaultValue={dentistName}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
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
                  variant="outlined"
                  defaultValue={dentistExpertist}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
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
                  variant="outlined"
                  defaultValue={hospitalName}
                  sx={{
                    "& .MuiInputLabel-root": { color: "#504099" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
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
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[45px] flex flex-row justify-end">
            <button className="p-2.5 text-white bg-red font-semibold  text-sm rounded-2xl hover:bg-orage font-inria">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
