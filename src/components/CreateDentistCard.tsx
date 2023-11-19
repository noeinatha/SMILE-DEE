'use client'
import { TextField } from "@mui/material";
import { Icon } from '@iconify/react';
import Image from "next/image";
import * as React from 'react';
import { addDentist } from "@/actions/addDentist";
// import ImageUploader from "./ImageUploader";
import { SingleImageDropzone } from '@/components/SingleImageDropzone';
import { useEdgeStore } from '@/libs/edgestore';
export default function CreateDentistCard({isVisible,onClose}:{isVisible:boolean,onClose:()=>void}){
    if (!isVisible) return null;
    const [file, setFile] = React.useState<File>();
    const { edgestore } = useEdgeStore();
    const [url, setURL] = React.useState("");
    return (
        <div className= "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50" onClick={() => onClose()}>
            <form action = {addDentist} className= "w-[700px] h-[448px] bg-white rounded-2xl shadow-lg p-10 flex flex-row gap-10 " onClick={ (e) =>{ e.stopPropagation()}}>
            <div>
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
                    <button type = "button" className="p-2.5 mt-2.5 text-white bg-darkpurple font-semibold  text-sm rounded-2xl hover:bg-vividpurple"
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
                            setURL(res.url);
                        }
                        }}
                    >
                        Upload
                    </button>
                    </div>
                    <div className="w-full flex justify-center items-center">
                    <input type="hidden"  name="picture" value= {url}/>
                    </div>
 
                </div>
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
                            name = "name"
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
                            name = "expertist"
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
                            name="hospital"
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
                            name="address"
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
                            name="tel"
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
                    <button type = "submit" className="p-2.5 text-white bg-darkpurple font-semibold  text-sm rounded-2xl hover:bg-vividpurple">CREATE</button>
                </div>
            </div>
        </form>

        </div>
        
    );
}