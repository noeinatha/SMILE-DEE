import Image from "next/image";
import { EdgeStoreProvider } from "@/libs/edgestore";

export default function DentistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[calc(100vh-80px)] w-full overflow-auto bg-cover bg-scroll bg-no-repeat bg-bottom bg-[url('/img/dentistBG.png')]">
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </div>
    // <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
    //   {children}
    // </div>
  );
}
