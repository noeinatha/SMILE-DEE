'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavigationItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  const pathname = usePathname();
  console.log('mypath', pathname);

  return pathname === pageRef ? (
    <Link
      href={pageRef}
      className="w-fit h-full text-center pl-5 pr-5 pt-[10px] font-sans font-semibold text-2xl text-white flex flex-row justify-center items-center font-inria border-b-8 border-red"
    >
      {title}
    </Link>
  ) : (
    <Link
      href={pageRef}
      className="w-fit h-full text-center pl-5 pr-5 pt-[10px] font-sans font-medium text-2xl text-white flex flex-row justify-center items-center font-inria hover:font-semibold hover:border-b-8 hover:border-red"
    >
      {title}
    </Link>
  );
}



