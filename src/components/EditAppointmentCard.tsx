"use client";
import { InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import updateAppointments from "@/libs/upDateAppointments";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import getDentists from "@/libs/getDentists";
export default function EditDentistCard({
  isVisible,
  onClose,
  bookingId,
  bookingDate,
  userId,
  dentistId,
  token,
}: {
  isVisible: boolean;
  onClose: () => void;
  bookingId: string;
  bookingDate: Dayjs;
  userId: string;
  dentistId: string;
  token: string;
}) {
  const [dentist, setDentist] = useState<Object[]>([]);
  const [newDentistId, setNewDentistId] = useState<string>(dentistId);
  const [newBookingDate, setNewBookingDate] = useState<Dayjs | null>(
    bookingDate
  );

  useEffect(() => {
    async function fetchDentist() {
      const { data } = await getDentists();
      // console.log(data);
      const results: Object[] = [];
      data.forEach((dentists: Object) => {
        results.push(dentists);
      });
      setDentist(results);
    }
    fetchDentist();
  }, []);

  if (!isVisible) return null;

  const handleEditAppointment = async ({
    bookingId,
  }: {
    bookingId: string;
  }) => {
    try {
      await updateAppointments(
        bookingId,
        token,
        dayjs(newBookingDate).toString(),
        userId,
        newDentistId
      );
      console.log(`Appointment with ID ${bookingId} edit successfully.`);
    } catch (error) {
      console.error("Error editing Appointment:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={() => onClose()}
    >
      <div
        className="w-fit h-fit bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-row gap-10">
          <div className="grid gap-3">
            <div className="font-sans font-medium text-lg text-darkpurple font-inria">
              Date:
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="w-[200px] font-inria"
                label="MM/DD/YYYY"
                sx={{
                  svg: { color: "#ED7B7B" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#974EC3",
                    },
                  },
                }}
                value={newBookingDate ? dayjs(newBookingDate) : null}
                onChange={(value) => {
                  console.log("Selected Date:", value);
                  setNewBookingDate(value);
                  // onDateChange(value);
                }}
              />
            </LocalizationProvider>
          </div>
          <div>
            <div className="font-sans font-medium text-lg text-darkpurple font-inria">
              Dentist:
            </div>
            <Select
              variant="standard"
              name="dentist"
              id="dentist"
              defaultValue ={dentistId}
              className="h-[56px] w-[200px]"
              onChange={(e) => {
                // console.log(value.target.value);
                const value = dentist?.find((x) => x._id === e.target.value);
                setNewDentistId(value._id);
                console.log(value._id);
                // console.log(typeof value._id);
              }}
            >
              {dentist.map((dentistItem: Object) => {
                if (dentistItem && dentistItem._id) {
                  return (
                    <MenuItem key={dentistItem._id} value={dentistItem._id}>
                      {dentistItem.name}
                    </MenuItem>
                  );
                } else {
                  // Handle the case where dentistItem is undefined or _id is not present
                  return null; // or you can render a default option, or handle it in another way
                }
              })}
            </Select>
          </div>
        </div>
        <div className="w-full h-[45px] flex flex-row justify-end">
          <button
            className="p-2.5 text-white bg-red font-semibold  text-sm rounded-2xl hover:bg-orage font-inria"
            onClick={() => handleEditAppointment({ bookingId })}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}
