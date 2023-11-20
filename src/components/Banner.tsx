import Image from "next/image";
import Link from "next/link";
import BookingForm from "./BookingForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Banner() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const token = session.user.token;
  const userID = session.user._id;

  return (
    <div className="w-full h-full absolute bottom 0">
      <Image
        src={"/img/BannerBG.png"}
        alt="cover"
        fill={true}
        objectFit="cover"
      />
      <div className="w-1/2 flex flex-col justify-start items-start z-10 absolute bottom-30 left-10 gap-10">
        <div className="text-darkblue font-bold text-5xl font-inria">
          We wish to provide
          <span className="text-orage font-inria">
            professional dental service
          </span>{" "}
          that match you.
        </div>
        <div>
          {/* <button className="px-4 py-1.5 bg-darkpurple text-white text-2xl rounded-xl font-inria">
                        <Link href="/booking">MAKE AN APPOINTMENT</Link>
                    </button> */}

          <BookingForm token={token} userID={userID} />
        </div>
      </div>
    </div>
  );
}
