import Image from "next/image";
export default function MiniDentistCard() {
    return (
        <div className="w-[310px] h-[190px] bg-white rounded-2xl shadow-lg p-2.5">
            <div className="flex flex-row">
                <div className="w-4/12 h-[102px] flex justify-center items-center">
                <div className='w-5/6 h-5/6 rounded-full relative '>
                    <Image src = {'/img/defaultProfile.jpg'}
                    alt = "Dentist Picture"
                    fill = {true}
                    className = "object-cover rounded-full"/> 
                </div>
                </div>   
                <div className="w-8/12 h-[102px] flex flex-col justify-center">
                    <div className='text-base text-darkblue font-bold pl-2.5 text-center py-1.5 px-2.5'>นายแพทย์พอใจ ฟันสวย</div>
                    <div className='text-xs text-darkpurple pl-2.5 text-center py-1.5 px-2.5'>SW DEV Hospital</div>
                </div>
            </div>
            <div className="w-full h-[25px] px-2.5 py-1.5 text-darkblue text-xs">Hospital: SW dev Hospity</div>
            <div className="w-full h-[25px] px-2.5 py-1.5 text-darkblue text-xs">Address: some where near ur house</div>
            <div className="w-full h-[25px] px-2.5 py-1.5 text-darkblue text-xs">Tel: 012-345678</div>
        </div>

    );

}