import Image from "next/image";
export default function MiniDentistCard() {
  return (
    <div className="w-[320px] h-[120px] bg-white rounded-2xl shadow-lg px-2.5 pb-2.5">
      <div className="flex flex-row">
        <div className="w-4/12 h-[102px] flex justify-center items-center">
          <div className="w-5/6 h-5/6 rounded-full relative ">
            <Image
              src={"/img/defaultProfile.jpg"}
              alt="Dentist Picture"
              fill={true}
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="w-8/12 h-[102px] flex flex-col justify-center">
          <div className="text-base text-darkblue font-bold pl-2.5 text-center py-1.5 px-2.5 font-inria">
            นายแพทย์พอใจ ฟันสวย
          </div>
          <div className="text-md text-xs text-darkpurple pl-2.5 text-center py-1.5 px-2.5 font-inria">
            Hospital: SW dev Hospity
          </div>
        </div>
      </div>
    </div>
  );
}
