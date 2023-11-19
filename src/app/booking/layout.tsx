export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
      {children}
    </div>
  );
}
