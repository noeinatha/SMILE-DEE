'use client'
import { TextField } from "@mui/material";
import { Icon } from '@iconify/react';
import Image from "next/image";
export default function CreateDentistCard({isVisible,onClose}:{isVisible:boolean,onClose:()=>void}){
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50" onClick={() => onClose()}>
            <div className= "w-[700px] h-[448px] bg-white rounded-2xl shadow-lg p-10 flex flex-row gap-10 " onClick={ (e) =>{ e.stopPropagation()}}>
            <div className="w-[120px] h-[120px] flex justify-center items-center mb-2.5 relative">
                <div className='w-[117px] h-[117px] rounded-full relative '>
                        <Image src = {'/img/defaultProfile.jpg'}
                        alt = "Dentist Picture"
                        fill = {true}
                        className = "object-cover rounded-full"/> 
                </div>
                <button>
                    <Icon icon="icon-park-solid:add-one" color="#313866" width="30" height="30" className="absolute bottom-0 right-2"/>
                </button>
            </div>
            <div>
                <div className="flex flex-row gap-5 mb-5">
                    <div>
                        <div className="font-sans font-medium text-md text-darkpurple pb-3">
                            Dentist's name:
                        </div>
                        <div>
                        <TextField
                            label= "Name"
                            variant="outlined"
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
                        <div className="font-sans font-medium text-md text-darkpurple pb-3">
                            Expertist:
                        </div>
                        <div className="flex flex-row gap-20">
                        <TextField
                            label= "Expertist"
                            variant="outlined"
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
                        <div className="font-sans font-medium text-md text-darkpurple pb-3">
                            Hospital:
                        </div>
                        <div>
                        <TextField
                            label= "Hospital"
                            variant="outlined"
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
                        <div className="font-sans font-medium text-md text-darkpurple pb-3">
                            Address:
                        </div>
                        <div className="flex flex-row gap-20">
                        <TextField
                            label= "Address"
                            variant="outlined"
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
                        <div className="font-sans font-medium text-md text-darkpurple pb-3">
                            Tel:
                        </div>
                        <div>
                        <TextField
                            label= "Tel"
                            variant="outlined"
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
                <div className='w-full h-[45px] flex flex-row justify-end'>
                    <button className="p-2.5 text-white bg-darkpurple font-semibold  text-sm rounded-2xl hover:bg-vividpurple">CREATE</button>
                </div>
            </div>
        </div>

        </div>
        
    );
}