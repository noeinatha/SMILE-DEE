import { getServerSession } from "next-auth";
import AppointmentCard from "./AppointmentCard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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
            userName={appointmentItem.user.name}
            dentistName={appointmentItem.dentist.name}
            dentistTel={appointmentItem.dentist.tel}
            bookingId={appointmentItem._id}
            token={token}
          />
        ))}
      </div>
    </div>
  );
}
