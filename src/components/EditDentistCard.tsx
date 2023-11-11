"use client"
import Image from "next/image";
import { Icon } from '@iconify/react';
import TextField from '@mui/material/TextField';
import React from "react";
import MuiTextField from "@mui/material/TextField";
import { inputClasses } from "@mui/material/Input";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
export default function EditDentistCard(){  
    return (
        <div  className="w-[300px] h-[380px] bg-white rounded-2xl shadow-lg p-2.5 flex flex-col justify-center items-center border-4 border-red">
            <div className="w-[120px] h-[120px] flex justify-center items-center mb-2.5 relative">
                <div className='w-[117px] h-[117px] rounded-full relative '>
                        <Image src = {'/img/defaultProfile.jpg'}
                        alt = "Dentist Picture"
                        fill = {true}
                        className = "object-cover rounded-full"/> 
                </div>
                <Icon icon="icon-park-solid:add-one" color="#ed7b7b" width="30" height="30" className="absolute bottom-0 right-2"/>
            </div>
            <div className='w-full h-[168px]'>
                <div className="w-full h-2/5 flex flex-col justify-center items-center">
                    <TextField id="name" label="Name" variant="standard" defaultValue="นายแพทย์พอใจ ฟันสวย" InputProps={{sx: {fontSize:12,height:12}}} sx={{
                      "& .MuiInputLabel-root": {color: '#504099'},
                      "& .MuiInputLabel-root.Mui-focused": {color: '#504099'},
                      "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                      borderColor: "#974EC3"},
                      },
                    }} />
                    <TextField id="expertist" label="Expertist" variant="standard" defaultValue="make kids cry" InputProps={{sx: {fontSize:12}}}/>
                </div>
                <div className="w-full h-3/5 flex flex-col justify-center pl-2.5">
                    <TextField id="hospital" label="Hospital"  defaultValue="SW dev Hospity" variant="standard" />
                </div>
            </div>
            <div className='w-full h-[45px] flex flex-row justify-end'>
                <button className="p-2.5 text-white bg-red font-semibold text-sm rounded-2xl">CONFIRM</button>
            </div>
        </div>

    );
}