import Link from "next/link";

import CalendarSvg from "./logos/calendar";
import CountdownClock from "./coundownClock";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function calculateTimeLeft(): TimeLeft {
  const TARGET_DATE = "2025-01-21T23:59:59";
  const now = new Date();
  const target = new Date(TARGET_DATE);
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownPage() {
  // const initialTimeLeft = calculateTimeLeft();
  return (
    <div className="mx-auto hidden h-[289px] w-full flex-col justify-between md:mb-16 md:flex">
      <div className="flex h-[200px] w-full flex-col items-center rounded-3xl border border-foreground px-24 py-5">
        <h3 className="text-normal tracking-widest text-foreground">
          距 離 投 稿 截 止 還 有 :
        </h3>
        <div className="mt-5 flex w-full justify-between">
          <CountdownClock />
        </div>
      </div>
      <div className="flex h-[67px] w-full justify-between">
        <div className="flex h-full w-[57%] items-center justify-between rounded-2xl border border-foreground px-5">
          <CalendarSvg height={48} width={48} />
          <div className="w-full justify-between px-4 text-foreground min-[1210px]:flex">
            <p className="whitespace-nowrap text-nowrap font-bold">
              截止日期&nbsp;
            </p>
            <p className="whitespace-nowrap text-nowrap">
              2025 年 1 月 21 日（二）23:59
            </p>
          </div>
        </div>
        <div className="h-full w-[40%] rounded-2xl bg-foreground transition-all duration-[0.4s] hover:bg-primary">
          <Link
            className="flex h-full w-full items-center justify-center"
            href={"/cfp/deadline.ics"}
          >
            <h3 className="flex h-full items-center justify-center text-xl font-bold text-black">
              將徵稿截止日期加入行事曆
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
