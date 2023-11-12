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
    <div className="w-[310px] h-[170px] gap-2 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-darkblue border-4 border-red">
      <div className="font-semibold text-xl p-2 w-full flex justify-center border-b-4 border-red">
        {day}
      </div>
      <div className="font-medium text-xl p-2">{date}</div>
      <div className="font-medium text-xl p-2">{time}</div>
    </div>
  );
}
