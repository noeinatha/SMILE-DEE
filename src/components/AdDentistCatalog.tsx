import DentistCard from "@/components/DentistCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
export default async function AdDentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const token = session.user.token;
  // console.log(token);
  return (
    <div>
      <div className="flex flex-wrap justify-start gap-10 px-10 py-5">
        {dentistJsonReady.data.map((dentistItem: Object) => (
          <DentistCard
            dentistName={dentistItem.name}
            dentistExpertist={dentistItem.expertist}
            hospitalName={dentistItem.hospital}
            hospitalAddress={dentistItem.address}
            dentistTel={dentistItem.tel}
            imgSrc={dentistItem.picture}
            dentistid= {dentistItem._id}
            token= {token}
          />
        ))}
      </div>
    </div>
  );
}
