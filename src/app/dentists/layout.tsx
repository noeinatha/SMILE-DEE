import Image from "next/image";
import {EdgeStoreProvider} from "@/libs/edgestore";

export default function DentistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< Updated upstream
    <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
      {children}
||||||| Stash base
    <div>
        {children}
=======
    <div>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
>>>>>>> Stashed changes
    </div>
    // <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
    //   {children}
    // </div>
  );
}
