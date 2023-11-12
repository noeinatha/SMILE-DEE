"use client";
import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export default function BookingInfoCard() {
  return (
    <div className="w-[760px] h-[448px] bg-white rounded-2xl shadow-lg px-12 py-5 gap-6 flex flex-col">
      <div className="flex flex-col ">
        <div className="font-sans font-medium text-md text-darkpurple pb-3">
          Your name:
        </div>
        <div className="flex flex-row gap-20">
          <TextField
            label="Firstname"
            variant="outlined"
            className="w-[200px]"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#974EC3",
                },
              },
            }}
          />
          <TextField
            label="Lastname"
            variant="outlined"
            className="w-[200px]"
            sx={{
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
      <div className="grid gap-3">
        <div className="font-sans font-medium text-md text-darkpurple">
          Date:
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="w-[200px]"
            label="MM/DD/YYYY"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#974EC3",
                },
              },
            }}
            // value={bookDate}
            // onChange={(value) => {
            //   setBookDate(value);
            //   onDateChange(value);
            // }}
          />
        </LocalizationProvider>
      </div>
      <div className="grid gap-3">
        <div className="font-sans font-medium text-md text-darkpurple">
          Time:
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            className="w-[200px]"
            label="Time"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#974EC3",
                },
              },
            }}
            // value={value}
            // onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
