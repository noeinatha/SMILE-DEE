import DentistCatalog from "@/components/DentistCatalog";
import AdDentistCatalog from "@/components/AdDentistCatalog";
import AdminDentist from "@/components/AdminDentist";
import getDentists from "@/libs/getDentists";
export default function Dentists() {
  const dentists = getDentists();
  return (
    <div className=" h-screen w-full">
      <AdminDentist />
      {/* <DentistCatalog dentistJson={dentists}/> */}
      <AdDentistCatalog dentistJson={dentists}/>
    </div>
  );
}
