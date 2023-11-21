"use client";
import addAppointment from "@/libs/addAppointment";
import getDentists from "@/libs/getDentists";
import { MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default function BookingForm({
  token,
  userID,
}: {
  token: string;
  userID: string;
}) {
  const [dentist, setDentist] = useState<Object[]>([]);
  const [dentistId, setDentistId] = useState<string>("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    async function fetchDentist() {
      // Fetch data
      const { data } = await getDentists();
      console.log(data);
      const results: Object[] = [];
      // Store results in the results array
      data.forEach((dentists: Object) => {
        results.push(dentists);
      });
      // Update the options state
      setDentist(results);
    }

    // Trigger the fetch
    fetchDentist();
  }, []);

  const handleAddAppointment = async () => {
    try {
      await addAppointment(
        dentistId,
        token,
        dayjs(bookDate).toString(),
        userID
      );
      console.log(`Appointment of ID ${userID} add successfully.`);
    } catch (error) {
      console.error("Error adding Appointment:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="font-sans font-bold text-3xl text-darkblue pb-3 font-inria">
        MAKE AN APPOINTMENT
      </div>
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
              value={bookDate}
              onChange={(value) => {
                setBookDate(value);
                console.log(value);
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
            className="h-[56px] w-[200px]"
            onChange={(e) => {
              // console.log(value.target.value);
              const value = dentist?.find((x) => x._id === e.target.value);
              setDentistId(value._id);
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
      <button
        className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple font-inria"
        onClick={() => handleAddAppointment()}
      >
        CONFIRM
      </button>
    </div>
  );
}
