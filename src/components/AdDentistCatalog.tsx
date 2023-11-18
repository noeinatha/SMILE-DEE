import DentistCard from "@/components/DentistCard";
export default async function AdDentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 px-10 py-5">
        {dentistJsonReady.data.map((dentistItem: Object) => (
          <DentistCard
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
