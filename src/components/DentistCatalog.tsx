import ViewDentistCard from "@/components/ViewDentistCard";
export default async function DentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;
  return (
    <div>
      <div className="text-5xl font-bold text-center text-red py-5">
        GET TO KNOW OUR <span className="text-darkblue">DENTIST</span>
      </div>
      <div className="m-5 flex flex-wrap justify-start gap-20 px-20">
        {dentistJsonReady.data.map((dentistItem: Object) => (
          <ViewDentistCard
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
