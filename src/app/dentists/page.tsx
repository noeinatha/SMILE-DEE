import DentistCatalog from "@/components/DentistCatalog";
import AdDentistCatalog from "@/components/AdDentistCatalog";
import EditDentistCard from "@/components/CreateDentistCard";
export default function Dentists(){
    return (
        <div className=" h-screen w-full">
            <AdDentistCatalog/>
            {/* <DentistCatalog/> */}
        </div>

    );
}