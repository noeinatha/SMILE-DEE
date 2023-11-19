import { getServerSession } from "next-auth";
import AppointmentCard from "./AppointmentCard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { boolean } from "zod";
export default async function AppointmentCatalog({
  appointmentJson,
}: {
  appointmentJson: Object;
}) {
  const appointmentJsonReady = await appointmentJson;
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const token = session.user.token;
  return (
    <div>
      <div className="font-inria text-5xl font-bold text-center text-darkblue py-5">
        MY APPOINTMENT
      </div>
      <div className="m-5 flex flex-wrap justify-center gap-20 px-20">
        {appointmentJsonReady.data.map((appointmentItem: Object) => (
          <AppointmentCard
            bookingDate={appointmentItem.bookingDate}
            user={appointmentItem.user.name}
            dentist={appointmentItem.dentist.name}
            bookingId={appointmentItem._id}
            token={token}
          />
        ))}
      </div>
    </div>
  );
}
