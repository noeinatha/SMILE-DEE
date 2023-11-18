import DentistCatalog from "@/components/DentistCatalog";
import AdDentistCatalog from "@/components/AdDentistCatalog";
<<<<<<< Updated upstream
import getDentists from "@/libs/getDentists";
||||||| Stash base
=======
import getDentists from "@/libs/getDentists";
import AdminDentist from "@/components/AdminDentist";
>>>>>>> Stashed changes
export default function Dentists() {
<<<<<<< Updated upstream
  const dentists = getDentists();
||||||| Stash base
=======
const dentists = getDentists();  
>>>>>>> Stashed changes
  return (
    <div className=" h-screen w-full">
<<<<<<< Updated upstream
      {/* <AdDentistCatalog/> */}
      <DentistCatalog dentistJson={dentists} />
||||||| Stash base
      <AdDentistCatalog />
      {/* <DentistCatalog/> */}
=======
      <AdminDentist />
      {/* <DentistCatalog/> */}
      <AdDentistCatalog dentistJson={dentists}/>
>>>>>>> Stashed changes
    </div>
  );
}
