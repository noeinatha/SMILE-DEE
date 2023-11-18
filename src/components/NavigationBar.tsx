import NavigationItem from "./NavigationItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function NavigationBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[100px] w-full bg-white fixed top-0 right-0 left-0 z-30 drop-shadow-md flex flex-row items-center">
      <NavigationItem title="HOME" pageRef="/" />
      <NavigationItem title="DENTISTS" pageRef="/dentists" />
      <NavigationItem title="APPOINTMENT" pageRef="/appointment" />
      <div className="w-full flex flex-row-reverse">
        {session ? (
          <Link href="/api/auth/signout">
            <div className="w-fit h-full text-center pl-5 pr-5 pt-[10px] font-sans font-medium text-2xl text-darkblue font-inria">
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="w-fit h-full text-center pl-5 pr-5 pt-[10px] font-sans font-medium text-2xl text-darkblue font-inria">
              Sign-In
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
