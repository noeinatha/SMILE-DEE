import SelectDentistCard from "./SelectDentistCard";
export default async function SelectDentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;

  return (
    <div>
      <div className="w-full h-fit flex flex-row-reverse px-10">
        <button className="w-fit h-fit p-5 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple">
          NEXT
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-10 py-5">
        {dentistJsonReady.data.map((dentistItem: Object) => (
          <SelectDentistCard
            dentistName={dentistItem.name}
            dentistExpertist={dentistItem.expertist}
            hospitalName={dentistItem.hospital}
            hospitalAddress={dentistItem.address}
            dentistTel={dentistItem.tel}
            imgSrc={dentistItem.picture}
          />
        ))}
      </div>
    </div>
  );
}
