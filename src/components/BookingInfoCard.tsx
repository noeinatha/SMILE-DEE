"use client";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
const useStyles = makeStyles({
  root: {
    width: 220,
    // input label when focused
    "& label.Mui-focused": {
      color: "#504099",
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#504099",
      },
    },
    "&:hover .MuiInputLabel-root": {
      color: "#504099",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#504099",
    },
    ".MuiOutlinedInput-root .Mui-focused fieldset": {
      borderColor: "#504099",
    },
  },
});

export default function BookingInfoCard() {
  const classes = useStyles();

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
            className={classes.root}
          />
          <TextField
            label="Lastname"
            variant="outlined"
            className={classes.root}
          />
        </div>
      </div>
      <div className="grid gap-3">
        <div className="font-sans font-medium text-md text-darkpurple">
          Date:
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className={classes.root}
            label="MM/DD/YYYY"
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
            className={classes.root}
            label="Time"
            // value={value}
            // onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
