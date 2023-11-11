"use client"
import Image from "next/image";
import { Icon } from '@iconify/react';
export default function SelectDentistCard(){
    return (
        <div  className="w-[300px] h-[380px] bg-white rounded-2xl shadow-lg p-2.5">
            <div className="w-full h-[120px] flex justify-center items-center mb-2.5">
                <div className='w-[117px] h-[117px] rounded-full relative '>
                        <Image src = {'/img/defaultProfile.jpg'}
                        alt = "Dentist Picture"
                        fill = {true}
                        className = "object-cover rounded-full"/> 
                </div>
            </div>
            <div className='w-full h-[168px]'>
                <div className="w-full h-2/5 flex flex-col justify-center">
                    <div className='text-lg text-darkblue font-bold pl-2.5 text-center py-1.5 px-2.5'>นายแพทย์พอใจ ฟันสวย</div>
                    <div className='text-sm text-gray pl-2.5 text-center py-1.5 px-2.5'>Expertist: make kids cry</div>
                </div>
                <div className="w-full h-3/5 flex flex-col justify-center px-2.5">
                    <div className="w-full h-1/3 px-2.5 py-1.5 text-darkblu  text-sm">Hospital: SW dev Hospity</div>
                    <div className="w-full h-1/3 px-2.5 py-1.5 text-darkblue text-sm">Address: some where near ur house</div>
                    <div className="w-full h-1/3 px-2.5 py-1.5 text-darkblue text-sm">Tel: 012-345678</div>
                </div>
            </div>
            <div className='w-full h-[45px] flex flex-row justify-end'>
                <button className="p-2.5 text-white bg-darkpurple font-semibold darkpurple text-sm rounded-2xl">SELECT</button>
            </div>

        </div>
    );
}