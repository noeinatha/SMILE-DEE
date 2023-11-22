import AppointmentCatalog from "@/components/AppointmentCatalog";
export default function Appointment() {
  return (
    <div className="h-[calc(100vh-80px)] w-full overflow-auto bg-cover bg-scroll bg-no-repeat bg-bottom bg-[url('/img/appointmentBG.png')]">
      <AppointmentCatalog/>
    </div>
  );
}
