export default function DateCard({
  day,
  date,
  time,
}: {
  day: string;
  date: string;
  time: string;
}) {
  return (
    <div className="w-[320px] h-[120px] gap-2 bg-white rounded-2xl flex flex-col items-center justify-center text-darkblue font-inria">
      <div className="font-semibold text-xl p-2 w-full flex justify-center border-b-4 border-red font-inria">
        {day}
      </div>
      <div className="font-medium text-xl p-2 font-inria">{date}</div>
    </div>
  );
}
