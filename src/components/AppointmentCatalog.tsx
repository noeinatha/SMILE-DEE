import { getServerSession } from "next-auth";
import AppointmentCard from "./AppointmentCard";
import dayjs from "dayjs";
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
      <div className="font-inria text-4xl font-bold text-center text-darkblue py-5">
        MY APPOINTMENT
      </div>
      <div className="overflow-auto m-5 flex flex-wrap justify-center gap-10 px-20">
        {appointmentJsonReady.data.map((appointmentItem: Object) => (
          <AppointmentCard
            bookingDate={appointmentItem.bookingDate}
            userName={appointmentItem.user.name}
            userId={appointmentItem.user._id}
            dentistName={appointmentItem.dentist.name}
            dentistId={appointmentItem.dentist._id}
            dentistTel={appointmentItem.dentist.tel}
            bookingId={appointmentItem._id}
            token={token}
          />
        ))}
      </div>
    </div>
  );
}
