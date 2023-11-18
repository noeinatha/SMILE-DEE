import DentistCatalog from "@/components/DentistCatalog";
import AdDentistCatalog from "@/components/AdDentistCatalog";
import getDentists from "@/libs/getDentists";
export default function Dentists() {
  const dentists = getDentists();
  return (
    <div className=" h-screen w-full">
      {/* <AdDentistCatalog/> */}
      <DentistCatalog dentistJson={dentists} />
    </div>
  );
}
