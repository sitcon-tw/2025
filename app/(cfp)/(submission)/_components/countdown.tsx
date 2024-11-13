"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownPage() {
  const TARGET_DATE = "2025-01-21T23:59:59"; // 可以動態設置
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 客戶端倒數計時邏輯
  function calculateTimeLeft(): TimeLeft {
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

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // 更新倒數時間
    }, 1000);

    return () => clearInterval(timerId); // 清除計時器
  }, [timeLeft]); // 當 timeLeft 更新時觸發

  function formatToTwoDigits(num: number): string {
    return num.toString().padStart(2, "0");
  }

  return (
    <div className="mx-auto flex h-[289px] w-[642px] flex-col justify-between lg:w-[840px]">
      <div className="border-light-brown flex h-[200px] w-full flex-col items-center rounded-3xl border px-24 py-5">
        <h3 className="text-light-brown text-normal tracking-widest">
          距 離 投 稿 截 止 還 有 :
        </h3>
        <div className="mt-5 flex w-full justify-between">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="relative">
              <div className="mb-2 flex flex-col items-center">
                <motion.span
                  key={value}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-light-brown text-6xl"
                >
                  {formatToTwoDigits(value)}
                </motion.span>
                <p className="text-light-brown text-normal font-light">
                  {key.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-[67px] w-full justify-between">
        <div className="border-light-brown flex h-full w-[377px] items-center justify-between rounded-2xl border px-5 lg:w-[552px]">
          {/* calender icon */}
          <Image
            src="/calender.svg"
            width={48}
            height={48}
            alt="calendar"
            className="min-w-[48px]"
          />
          <div className="text-light-brown w-full justify-between pl-2 lg:flex lg:pl-12">
            <p className="font-bold">截止日期</p>
            <p>即日起至2024年1月21日(六) 23：59</p>
          </div>
        </div>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="bg-light-brown h-full w-[246px] rounded-2xl lg:w-[264]"
        >
          <Link
            className="flex h-full w-full items-center justify-center"
            href={"#"}
          >
            <h3 className="text-red flex h-full w-1/2 items-center justify-center text-h3 font-bold">
              立刻投稿
            </h3>
            <motion.div
              animate={{
                x: !isHovered ? 0 : 10,
                y: !isHovered ? 0 : -10,
                scale: !isHovered ? 1 : 1.2,
              }}
            >
              <Image
                src="/north_east.svg"
                width={40}
                height={40}
                alt="up_right_arrow"
                className="mr-5"
              />
            </motion.div>
            <motion.div
              animate={{
                x: !isHovered ? 0 : 10,
                y: !isHovered ? 0 : -10,
                scale: !isHovered ? 1 : 1.2,
              }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/north_east.svg"
                width={40}
                height={40}
                alt="up_right_arrow"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

// 上方 642 * 200px

// 左右gap: pc 24px tablet 20px
// 上下gap: pc 22px tablet 22px

// 左下 377.09*67 552*67
// 右下 245.82*67 264*67
