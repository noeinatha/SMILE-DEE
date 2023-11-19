import SelectDentistCard from "./SelectDentistCard";
export default async function SelectDentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;

  return (
    <div className="overflow-auto flex flex-wrap justify-center gap-10 px-10 py-5">
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
  );
}
