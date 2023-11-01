import AppointmentCard from '@/components/AppointmentCard'
import MiniDentistCard from '@/components/MiniDentistCard'
import DentistCard from '@/components/DentistCard'
import EditDentistCard from '@/components/EditDentistCard'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <AppointmentCard/> */}
      {/* <MiniDentistCard/> */}
      {/* <DentistCard/> */}
      <EditDentistCard/>
    </main>
  )
}
