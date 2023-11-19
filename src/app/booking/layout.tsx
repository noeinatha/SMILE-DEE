import { EdgeStoreProvider } from "@/libs/edgestore";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </div>
  );
}
