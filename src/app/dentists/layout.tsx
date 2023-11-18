import Image from "next/image";

export default function DentistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
      {children}
    </div>
    // <div className="bg-cover bg-bottom bg-[url('/img/dentistBG.png')]">
    //   {children}
    // </div>
  );
}
