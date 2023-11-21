import Image from "next/image";
import BookingForm from "./BookingForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Banner() {
  const session = await getServerSession(authOptions);
  return (
    <div className="absolute pt-24 h-[calc(100vh-80px)] w-full overflow-auto bg-cover bg-scroll bg-no-repeat bg-bottom bg-[url('/img/BannerBG.png')]">
      {/* <Image
        src={"/img/BannerBG.png"}
        alt="cover"
        fill={true}
        objectFit="cover"
      /> */}
      <div className="w-1/2 flex flex-col justify-start items-start z-10 absolute bottom-30 left-10 gap-10">
        <div className="text-darkblue font-bold text-5xl font-inria">
          We wish to provide{" "}
          <span className="text-orage font-inria">
            professional dental service
          </span>{" "}
          that match you.
        </div>
        <div>
          {session ? (
            <BookingForm token={session.user.token} userID={session.user._id} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
