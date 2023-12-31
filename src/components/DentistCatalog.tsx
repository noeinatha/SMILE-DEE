import ViewDentistCard from "@/components/ViewDentistCard";
export default async function DentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;
  return (
    <div>
      <div className="text-5xl font-bold text-center text-red py-5 font-inria">
        GET TO KNOW OUR{" "}
        <span className="text-darkblue font-inria">DENTIST</span>
      </div>
      <div className="flex flex-wrap justify-start gap-10 px-10 py-5">
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
