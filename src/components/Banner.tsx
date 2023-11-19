import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="w-full h-full absolute bottom 0">
            <Image
                src={"/img/BannerBG.png"}
                alt="cover"
                fill={true}
                objectFit='cover'
            />
            <div className="w-1/2 flex flex-col justify-center items-center z-10 p-10 absolute bottom-30 left-10 gap-10">
                <div className='text-darkblue font-bold text-5xl'>
                    We wish to provide
                    <span className='text-orage'>
                        professional dental service
                    </span> that match you.
                </div>
                <div>
                    <button className="px-4 py-1.5 bg-darkpurple text-white text-2xl rounded-xl font-inria">
                        <Link href="/booking">MAKE AN APPOINTMENT</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
