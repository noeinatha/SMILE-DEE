import AppointmentCard from "@/components/AppointmentCard";
import MiniDentistCard from "@/components/MiniDentistCard";
import DentistCard from "@/components/DentistCard";
import EditDentistCard from "@/components/CreateDentistCard";
import Image from "next/image";
import BookingInfoCard from "@/components/BookingInfoCard";
import { LoginForm } from "@/components/LoginForm";
import SelectDentistCard from "@/components/SelectDentistCard";
import ViewDentistCard from "@/components/ViewDentistCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 top">
      {/* <AppointmentCard /> */}
      {/* <MiniDentistCard/> */}
      <EditDentistCard />
      {/* <BookingInfoCard /> */}
      {/* <LoginForm/> */}
      {/* <SelectDentistCard/> */}
    </main>
  );
}
