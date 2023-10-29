import Image from 'next/image';
import { Icon } from '@iconify/react';
export default function AppointmentCard() {
    return (
        <div className="w-[1000px] h-[320px] px-5 py-5 bg-white rounded-2xl shadow-lg ">
            <div className="px-2.5 text-2xl font-bold text-darkblue">Appointment Scheduled for   
                <span className="font-normal text-darkblue"> คุณฟันผุ ว้าวุ่นใหญ่เลยทีนี้</span>
            </div>
            <div className= 'px-10 m-2.5'>
                    <div className='flex flex-row m-2.5 h-[105px]'>
                        <div className='w-[105px] h-[105px] rounded-full relative mx-4'>
                            <Image src = {'/img/defaultProfile.jpg'}
                            alt = "Dentist Picture"
                            fill = {true}
                            className = "object-cover rounded-full"/> 
                        </div>
                        <div className='mx-4 center' >
                            <div className='text-xl mt-4 text-darkblue'>นายแพทย์พอใจ ฟันสวย</div>
                            <div className='text-l text-darkpurple mt-2'>SW DEV Hospital</div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-fadegray text-xl w-[728px] h-[95px] rounded-2xl'>
                            <div className='px-8 py-2.5'>
                                <div className='font-bold mb-4'>Date & Time</div>
                                <div className='text-darkpurple'>Tuesday,December 12,2023 - 03.30 pm.</div>
                            </div>
                        </div>
                    </div>
            </div>   
        </div>

    );
}