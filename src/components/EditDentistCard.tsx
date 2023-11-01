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
  const TextField = styled(MuiTextField)(`
  .${inputClasses.root} {
    font-size: 12px;
    color: darkblue;
  }
  .${inputLabelClasses.root} {
    font-size: 8px;
    color: fadegray;
    &.${inputLabelClasses.focused} {
      color: fadegray;
    }
  }
`);
const TextField1 = styled(MuiTextField)(`
.${inputClasses.root} {
  font-size: 15px;
  font-weight: bold;
  color: darkblue;
}
.${inputLabelClasses.root} {
  font-size: 8px;
  color: fadegray;
  &.${inputLabelClasses.focused} {
    color: fadegray;
  }
}
`);
const TextField2 = styled(MuiTextField)(`
.${inputClasses.root} {
  font-size: 12px;
  color: fadegray;
}
.${inputLabelClasses.root} {
  font-size: 8px;
  color:#F3F3F3 ;
  &.${inputLabelClasses.focused} {
    color: #F3F3F3 ;
  }
}
`);
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
                    <TextField1 id="name" label="Name" variant="standard" defaultValue="นายแพทย์พอใจ ฟันสวย" InputProps={{sx: {fontSize:15,height:15}}}  />
                    <TextField2 id="expertist" label="Expertist" variant="standard" defaultValue="make kids cry" InputProps={{sx: {fontSize:12}}}/>
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