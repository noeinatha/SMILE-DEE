import AppointmentCatalog from "@/components/AppointmentCatalog";
import getAppointments from "@/libs/getAppointments";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Appointment() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const appointments = getAppointments(session.user.token);
  return (
    <div className="h-[calc(100vh-80px)] w-full overflow-auto bg-cover bg-scroll bg-no-repeat bg-bottom bg-[url('/img/appointmentBG.png')]">
      <AppointmentCatalog appointmentJson={appointments} />
    </div>
  );
}
