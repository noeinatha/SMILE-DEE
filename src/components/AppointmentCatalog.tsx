import { getServerSession } from "next-auth";
import AppointmentCard from "./AppointmentCard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function AppointmentCatalog({
  appointmentJson,
}: {
  appointmentJson: any;
}) {
  const appointmentJsonReady = await appointmentJson;
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  return (
    <div>
      <div className="text-5xl font-bold text-center text-darkblue py-5">
        MY APPOINTMENT
      </div>
      <div className="m-5 flex flex-wrap justify-center gap-20 px-20">
        {appointmentJsonReady.data.map((appointmentItem: any) => (
          // console.log(appointmentItem)
          <AppointmentCard
            bookingDate={appointmentItem.bookingDate}
            user={session.user.name}
            dentist={appointmentItem.dentist.name}
          />
        ))}
      </div>
    </div>
  );
}