import Link from "next/link";

export default function NavigationItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link
      href={pageRef}
      className="w-fit h-full text-center pl-5 pr-5 pt-[10px] font-sans font-medium text-2xl text-darkblue flex flex-row justify-center items-center"
    >
      {title}
    </Link>
  );
}
