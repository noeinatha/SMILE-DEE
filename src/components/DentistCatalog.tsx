import ViewDentistCard from "@/components/ViewDentistCard";
export default function DentistCatalog(){
    const mockDentist = [{id : '01', dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '02',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '03',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '04',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'},
    {id : '05',dentistName: 'นายแพทย์พอใจ ฟันสวย', dentistExpertist: 'make kids cry', hospitalName: 'SW dev Hospity', hospitalAddress: 'some where near ur house', dentistTel: '012-345678', imgSrc: '/img/defaultProfile.jpg'}]
    return (
        <div>
            <div className="text-5xl font-bold text-center text-red py-5">GET TO KNOW OUR <span className="text-darkblue">DENTIST</span></div>
            <div className=" m-5 flex flex-wrap justify-start gap-20 px-20">
            {mockDentist.map((e) => (
                    <ViewDentistCard
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