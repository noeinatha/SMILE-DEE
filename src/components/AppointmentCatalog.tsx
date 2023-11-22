import { getServerSession } from "next-auth";
import AppointmentCard from "./AppointmentCard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getAppointments from "@/libs/getAppointments";
import getUserProfile from "@/libs/getUserProfile";

export default async function AppointmentCatalog() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return (
      <div className="flex justify-center items-center h-2/3 font-inria text-4xl font-bold text-center text-red py-5">
        Please log in to view your appointments.
      </div>
    );
  }

  const appointmentJsonReady = await getAppointments(session.user.token);
  const token = session.user.token;
  const profile = await getUserProfile(token);
  return (
    <div>
      <div className="font-inria text-4xl font-bold text-center text-darkblue py-5">
        MY APPOINTMENT
      </div>
      <div className="overflow-auto flex flex-wrap justify-center gap-10 px-20">
        {profile.data.role === "admin"
          ? appointmentJsonReady.data.map((appointmentItem: Object) => (
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
            ))
          : appointmentJsonReady.data.map((appointmentItem: Object) => (
              <AppointmentCard
                bookingDate={appointmentItem.bookingDate}
                userName={session.user?.name}
                userId={appointmentItem.user}
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
