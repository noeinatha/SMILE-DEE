import DentistCatalog from "@/components/DentistCatalog";
import AdDentistCatalog from "@/components/AdDentistCatalog";
import AdminDentist from "@/components/AdminDentist";
import getDentists from "@/libs/getDentists";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Dentists() {
  const dentists = await getDentists(); // Await the asynchronous function
  const session = await getServerSession(authOptions);
  if(!session) 
        return <DentistCatalog dentistJson={dentists} />
  const profile = await getUserProfile(session.user.token)
  return (
    <div className="h-screen w-full">
      {(profile.data.role == "admin")? (
        <>
          <AdminDentist />
          <AdDentistCatalog dentistJson={dentists} />
        </> 
      ) : (
        <DentistCatalog dentistJson={dentists} />
      )}
    </div>
  );
}
