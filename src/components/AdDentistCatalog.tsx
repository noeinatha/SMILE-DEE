"use client";
import DentistCard from "@/components/DentistCard";
import { Icon } from '@iconify/react';
export default function AdDentistCatalog(){
    function addDentist(){
        console.log("add dentist")
    }
    const mockDentist = [{id : '01', dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '02',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '03',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '04',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '05',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'}]
    return (
        <div>
            <div className= "flex flex-row justify-between items-center w-full px-20">
                <div className="w-full text-5xl font-bold text-center text-red py-5 ">GET TO KNOW OUR  <span className="text-darkblue"> DENTIST</span> </div>
                <button className='w-[45px] h-[45px] rounded-full relative bg-vividpurple flex justify-center items-center' onClick={addDentist}>
                    <Icon icon="gridicons:create"  color="white" className= "w-3/5 h-3/5"/>
                </button>
            </div>
            <div className=" m-5 flex flex-wrap justify-start gap-20 px-20">
            {mockDentist.map((e) => (
                    <DentistCard
                        dentistName={e.dentistName}
                        dentistExpertist={e.dentistExpertist}
                        hospitalName={e.hospitalName}
                        hospitalAddress={e.hospitalAddress}
                        dentistTel={e.dentistTel}
                        imgSrc={e.imgSrc}
                    />
                ))}
            </div>
        </div>

    );
}