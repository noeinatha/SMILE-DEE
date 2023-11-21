import AppointmentCard from "@/components/AppointmentCard";
import MiniDentistCard from "@/components/MiniDentistCard";
import DentistCard from "@/components/DentistCard";
import EditDentistCard from "@/components/CreateDentistCard";
import Image from "next/image";
import BookingInfoCard from "@/components/BookingInfoCard";
import { LoginForm } from "@/components/LoginForm";
import SelectDentistCard from "@/components/SelectDentistCard";
import ViewDentistCard from "@/components/ViewDentistCard";
import Banner from "@/components/Banner";
import BookingForm from "@/components/BookingForm";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <AppointmentCard /> */}
      {/* <MiniDentistCard/> */}
      {/* <EditDentistCard /> */}
      {/* <BookingInfoCard /> */}
      {/* <LoginForm/> */}
      {/* <SelectDentistCard/> */}
      <Banner />
    </main>
  );
}
