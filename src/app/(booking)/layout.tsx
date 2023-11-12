import Image from "next/image";

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cover bg-bottom bg-[url('/img/bookingBG.png')]">
      {children}
    </div>
  );
}
