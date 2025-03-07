"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Transportation = "car" | "public" | "shuttle";
export default function Page() {
  const [transportation, setTransportation] =
    useState<Transportation>("shuttle");

  const options: Array<{ value: Transportation; label: string }> = [
    { value: "shuttle", label: "大眾接駁車" },
    { value: "public", label: "大眾運輸工具" },
    { value: "car", label: "自行開車 / 機車" },
  ];

  return (
    <div className="flex w-full flex-col items-start justify-center gap-8">
      <section
        id="address"
        className="flex w-full flex-col items-center gap-3 font-bold"
      >
        <h1 className="self-start text-h1-mobile font-bold md:text-h1">
          交通方式
        </h1>
        <h2 className="text-[20px] md:text-[30px]">
          中央研究院 人文社會科學館
        </h2>
        <p className="text-[18px] md:text-h3">
          台北市南港區研究院路 2 段 128 號
        </p>
      </section>
      <section id="map" className="flex w-full flex-col gap-8">
        <div className="relative h-auto w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.18734000737!2d121.6113732!3d25.0409679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab46b3aaaaab%3A0x6ad0b8243ddc70ef!2z5Lit5aSu56CU56m26Zmi5Lq65paH56S-5pyD56eR5a246aSo!5e0!3m2!1szh-TW!2stw!4v1705165279899!5m2!1szh-TW!2stw"
            className="h-[400px] w-full md:h-[600px]"
            style={{
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-2 text-h3-mobile font-bold md:flex-row md:gap-6 md:text-h3">
          {options.map((option) => (
            <motion.button
              initial={{ scale: 1, shadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.8)",
              }}
              key={option.value}
              onClick={() => setTransportation(option.value)}
              className={`flex h-[60px] flex-grow items-center justify-center rounded-xl text-black ${
                transportation === option.value
                  ? "bg-[#B9D3E6]"
                  : "bg-[#DEE6EB]"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </section>
      {transportation === "car" && <CarDiagram />}
      {transportation === "public" && <PublicDiagram />}
      {transportation === "shuttle" && <ShuttleDiagram />}
    </div>
  );
}

const CarDiagram = () => {
  return (
    <section
      id="description"
      className="mt-20 flex w-full flex-col items-center justify-between gap-8 pl-0 md:flex-row md:pl-4"
    >
      <div className="flex flex-row justify-between md:hidden">
        {/* arrow */}
        <svg
          width="16"
          height="235"
          viewBox="0 0 16 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-[200px] md:hidden"
        >
          <path
            d="M7.29288 234.707C7.68341 235.098 8.31657 235.098 8.7071 234.707L15.0711 228.343C15.4616 227.953 15.4616 227.319 15.0711 226.929C14.6805 226.538 14.0474 226.538 13.6568 226.929L7.99999 232.586L2.34314 226.929C1.95261 226.538 1.31945 226.538 0.928922 226.929C0.538398 227.319 0.538398 227.953 0.928922 228.343L7.29288 234.707ZM7 -4.37114e-08L6.99999 234L8.99999 234L9 4.37114e-08L7 -4.37114e-08Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col items-start justify-between">
          <span className="material-symbols-outlined !text-[80px]">
            directions_car
          </span>
          <p className="w-[100%] text-normal leading-[200%]">
            {`由國道三號，南深路 - 中研院匝道 <16km> 出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究路岔路口，即可看到中研院。`}
          </p>
        </div>
      </div>

      <span className="material-symbols-outlined !hidden !text-[80px] md:!block">
        directions_car
      </span>
      <div className="relative hidden h-1 w-[444px] rounded-full bg-[#ffffff] md:block">
        <p className="absolute left-[15%] top-[20px] flex w-[70%] text-normal leading-[200%]">
          {`由國道三號，南深路 - 中研院匝道 <16km> 出國道三號後，左轉接南深路，再左轉接舊莊路一段直走，遇到與研究路岔路口，即可看到中研院。`}
        </p>
      </div>
      <div className="box-border w-full rounded-xl border border-[#ffffff] p-5 md:w-[360px]">
        <h3 className="text-[20px] font-bold">中研院門口</h3>
        <p className="mt-2 text-normal leading-[150%]">
          中研院內設有停車格，車輛進入院區持證件向大門警衛換證後可駛入院區，計費方式請參考{" "}
          <Link
            className="link"
            href={"https://dga.sinica.edu.tw/posts/78705"}
            target="_blank"
          >
            中央研究院院區車輛通行停放管理施行要點
          </Link>
          。
        </p>
        <br />
        <p>
          機車禁止進入院區，在{" "}
          <Link
            className="link"
            href={"https://maps.app.goo.gl/ZqKjZFgAS8SYPSF39"}
            target="_blank"
          >
            大門右側
          </Link>
          、
          <Link
            className="link"
            href={"https://maps.app.goo.gl/ZqKjZFgAS8SYPSF39"}
            target="_blank"
          >
            大門對面
          </Link>{" "}
          與{" "}
          <Link
            className="link"
            href={"https://maps.app.goo.gl/ZqKjZFgAS8SYPSF39"}
            target="_blank"
          >
            胡適公園旁
          </Link>{" "}
          均設有機車停車場，供員工和來賓停放不予收費（不負保管責任）
        </p>
      </div>
    </section>
  );
};

const ShuttleDiagram = () => {
  return (
    <>
      <section
        id="description"
        className="mt-20 hidden w-full flex-row items-center justify-between gap-4 pl-4 md:flex"
      >
        <div className="flex w-[25%] items-center justify-start rounded-xl border border-[#ffffff] p-4">
          <span className="material-symbols-outlined mr-4 hidden !text-[48px] md:block">
            directions_railway
          </span>
          <p>南港展覽館站</p>
        </div>
        {/* arrow */}
        <svg
          viewBox="0 0 66 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="y-[20px] w-[10%]"
        >
          <path
            d="M65.7071 8.7071C66.0976 8.31658 66.0976 7.68341 65.7071 7.29289L59.3431 0.928927C58.9526 0.538403 58.3195 0.538403 57.9289 0.928927C57.5384 1.31945 57.5384 1.95262 57.9289 2.34314L63.5858 7.99999L57.9289 13.6568C57.5384 14.0474 57.5384 14.6805 57.9289 15.0711C58.3195 15.4616 58.9526 15.4616 59.3431 15.0711L65.7071 8.7071ZM8.74228e-08 9L65 8.99999L65 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
            fill="white"
          />
        </svg>
        <div className="flex w-[15%] justify-start rounded-xl border border-[#ffffff] px-2 py-12 text-center leading-[200%]">
          <p>捷運南港展覽館站 2A 出口</p>
        </div>
        {/* arrow */}
        <div className="y-[20px] relative w-[30%]">
          <svg
            viewBox="0 0 332 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M331.707 8.70708C332.098 8.31655 332.098 7.68339 331.707 7.29286L325.343 0.928904C324.953 0.538379 324.319 0.538379 323.929 0.928904C323.538 1.31943 323.538 1.95259 323.929 2.34312L329.586 7.99997L323.929 13.6568C323.538 14.0474 323.538 14.6805 323.929 15.071C324.319 15.4616 324.953 15.4616 325.343 15.071L331.707 8.70708ZM8.74228e-08 9L331 8.99997L331 6.99997L-8.74228e-08 7L8.74228e-08 9Z"
              fill="white"
            />
          </svg>
          <div className="absolute left-[10%] top-[20px] w-[80%]">
            <p>地點：台北捷運站南港展覽館 2A 出口（當天會有人舉牌引導）</p>
            <p>接駁車發車時間：7:45~10:00</p>
            <p>班距：15~20 分鐘一班</p>
          </div>
        </div>
        <div className="flex w-[15%] flex-col rounded-xl border border-[#ffffff] px-2 py-12 text-center leading-[200%]">
          <p>中研院</p>
          <p>人文社會科學館</p>
        </div>
      </section>
      <section
        id="description"
        className="mt-20 flex w-full flex-col items-center justify-between gap-8 pl-0 md:hidden"
      >
        <div className="flex w-full items-center justify-center rounded-xl border border-[#ffffff] py-4 text-h3-mobile">
          捷運 南港展覽館站 2A 出口
        </div>
        <div className="flex w-full">
          <svg
            width="16"
            height="208"
            viewBox="0 0 16 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-8 mr-16"
          >
            <path
              d="M7.29288 207.707C7.68341 208.098 8.31657 208.098 8.7071 207.707L15.0711 201.343C15.4616 200.953 15.4616 200.319 15.0711 199.929C14.6805 199.538 14.0474 199.538 13.6568 199.929L7.99999 205.586L2.34314 199.929C1.95261 199.538 1.31945 199.538 0.928923 199.929C0.538399 200.319 0.538399 200.953 0.928923 201.343L7.29288 207.707ZM7 -4.37114e-08L6.99999 207L8.99999 207L9 4.37114e-08L7 -4.37114e-08Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col justify-center">
            <svg
              width="86"
              height="86"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_129_1926)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.86 10C38.7802 9.99985 39.6881 10.2114 40.5135 10.6181C41.3388 11.0249 42.0596 11.6161 42.62 12.346L42.852 12.672L44.992 15.882C45.5659 16.7424 45.9076 17.7366 45.984 18.768L46 19.212V32C46.0003 33.0092 45.6192 33.9811 44.933 34.7211C44.2468 35.4611 43.3063 35.9143 42.3 35.99L42 36H41.66C41.2568 37.1406 40.5183 38.1327 39.5415 38.8463C38.5646 39.5598 37.3949 39.9615 36.1857 39.9987C34.9765 40.0359 33.7843 39.7069 32.7655 39.0547C31.7466 38.4025 30.9485 37.4576 30.476 36.344L30.34 36H17.658C17.2544 37.1399 16.5159 38.1314 15.5393 38.8445C14.5626 39.5575 13.3933 39.959 12.1846 39.9962C10.9759 40.0333 9.7842 39.7046 8.76556 39.0529C7.74691 38.4012 6.94887 37.457 6.476 36.344L6.34 36H6C4.99085 36.0003 4.01887 35.6192 3.2789 34.933C2.53894 34.2468 2.08569 33.3063 2.01 32.3L2 32V16C1.99991 14.4696 2.58465 12.997 3.63457 11.8835C4.68448 10.77 6.12021 10.0998 7.648 10.01L8 10H37.86ZM36 32C35.4696 32 34.9609 32.2107 34.5858 32.5858C34.2107 32.9609 34 33.4696 34 34C34 34.5304 34.2107 35.0391 34.5858 35.4142C34.9609 35.7893 35.4696 36 36 36C36.5304 36 37.0391 35.7893 37.4142 35.4142C37.7893 35.0391 38 34.5304 38 34C38 33.4696 37.7893 32.9609 37.4142 32.5858C37.0391 32.2107 36.5304 32 36 32ZM12 32C11.4696 32 10.9609 32.2107 10.5858 32.5858C10.2107 32.9609 10 33.4696 10 34C10 34.5304 10.2107 35.0391 10.5858 35.4142C10.9609 35.7893 11.4696 36 12 36C12.5304 36 13.0391 35.7893 13.4142 35.4142C13.7893 35.0391 14 34.5304 14 34C14 33.4696 13.7893 32.9609 13.4142 32.5858C13.0391 32.2107 12.5304 32 12 32ZM32.536 24H6V32H6.34C6.7532 30.8289 7.51948 29.8149 8.5332 29.0976C9.54692 28.3803 10.7582 27.9951 12 27.9951C13.2418 27.9951 14.4531 28.3803 15.4668 29.0976C16.4805 29.8149 17.2468 30.8289 17.66 32H30.34C30.7532 30.8289 31.5195 29.8149 32.5332 29.0976C33.5469 28.3803 34.7582 27.9951 36 27.9951C37.2418 27.9951 38.4531 28.3803 39.4668 29.0976C40.4805 29.8149 41.2468 30.8289 41.66 32H42V26H36C35.2979 26 34.6081 25.8152 34.0001 25.4641C33.392 25.113 32.8871 24.6081 32.536 24ZM37.86 14H36V22H42V19.212C42.0001 18.8169 41.8832 18.4307 41.664 18.102L39.524 14.89C39.3413 14.6162 39.0938 14.3917 38.8036 14.2364C38.5133 14.0812 38.1892 14 37.86 14ZM12 14H8C7.51013 14.0001 7.03733 14.1799 6.67126 14.5054C6.30519 14.8309 6.07131 15.2795 6.014 15.766L6 16V20H12V14ZM22 14H16V20H22V14ZM32 14H26V20H32V14Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_129_1926">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="leading-[200%]">
              地點：台北捷運站南港展覽館 2A 出口（當天會有人舉牌引導）
            </p>
            <p className="leading-[200%]">接駁車發車時間：7:45~10:00</p>
            <p className="leading-[200%]">班距：15~20 分鐘一班</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl border border-[#ffffff] py-4 text-h3-mobile">
          中研院 人文社會科學館
        </div>
      </section>
    </>
  );
};

const PublicDiagram = () => {
  return (
    <>
      <section
        id="description"
        className="mt-20 hidden h-[500px] w-full justify-between gap-4 md:flex"
      >
        <div className="flex w-[25%] flex-col">
          <div className="mb-[20px] flex h-[13%] w-full items-center rounded-xl border border-[#ffffff] p-4">
            <span className="material-symbols-outlined mr-4 !text-[48px]">
              train
            </span>
            <p className="text-h3-mobile">南港火車站</p>
          </div>
          <div className="flex h-[13%] w-full items-center rounded-xl border border-[#ffffff] p-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.0909 34.1333C42.6093 34.1333 43.1064 34.337 43.473 34.6996C43.8395 35.0622 44.0455 35.5539 44.0455 36.0667C44.0455 36.5794 43.8395 37.0712 43.473 37.4337C43.1064 37.7963 42.6093 38 42.0909 38H4.95456C4.43618 38 3.93903 37.7963 3.57249 37.4337C3.20594 37.0712 3.00001 36.5794 3.00001 36.0667C3.00001 35.5539 3.20594 35.0622 3.57249 34.6996C3.93903 34.337 4.43618 34.1333 4.95456 34.1333H42.0909ZM24.5 9C30.8015 9 36.1139 11.0783 39.8784 14.0054C43.5744 16.8783 46 20.7643 46 24.4667C46 26.0945 45.4957 27.4827 44.6064 28.604C43.7405 29.6983 42.5854 30.4407 41.4088 30.9511C39.0907 31.9525 36.3328 32.2 34.2727 32.2H6.89737C6.38465 32.1997 5.87701 32.0995 5.40351 31.9049C4.93001 31.7104 4.49995 31.4254 4.13794 31.0662C3.77594 30.7071 3.4891 30.2808 3.29383 29.8119C3.09857 29.3429 2.99873 28.8405 3.00001 28.3333V12.8667C3.00001 10.7381 4.73956 9 6.90519 9H24.5ZM41.7332 22.5333H6.9091V28.3333H34.2727C36.1217 28.3333 38.2502 28.0975 39.8432 27.4073C40.6191 27.0709 41.1742 26.6668 41.53 26.2183C41.8622 25.8007 42.0909 25.2555 42.0909 24.4667C42.0909 23.8751 41.9736 23.2216 41.7332 22.5333ZM14.7273 12.8667H6.9091V18.6667H14.7273V12.8667ZM24.5 12.8667H18.6364V18.6667H26.4546V12.944C25.8174 12.8937 25.1646 12.8667 24.5 12.8667ZM30.3636 13.6071V18.6667H39.2588C38.7023 18.0818 38.1019 17.5396 37.4625 17.0446C35.5823 15.583 33.1821 14.3476 30.3636 13.6071Z"
                fill="white"
              />
            </svg>
            <p className="text-h3-mobile">高鐵南港站</p>
          </div>
          <div className="mt-[20px] flex h-full items-center">
            <div className="flex w-full flex-grow items-center rounded-xl border border-[#ffffff] p-4">
              <span className="material-symbols-outlined mr-4 !text-[48px]">
                directions_railway
              </span>
              <p className="text-h3-mobile">南港展覽館站</p>
            </div>
          </div>
        </div>

        <div className="flex w-[5%] flex-col">
          <div className="flex h-[30%] w-full items-center">
            <div className="relative flex h-min w-full justify-center">
              <span className="material-symbols-outlined absolute bottom-6 !text-[48px]">
                directions_walk
              </span>
              <svg
                width="66"
                height="16"
                viewBox="0 0 66 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.7071 8.7071C66.0976 8.31658 66.0976 7.68341 65.7071 7.29289L59.3431 0.928927C58.9526 0.538403 58.3195 0.538403 57.9289 0.928927C57.5384 1.31945 57.5384 1.95262 57.9289 2.34314L63.5858 7.99999L57.9289 13.6568C57.5384 14.0474 57.5384 14.6805 57.9289 15.0711C58.3195 15.4616 58.9526 15.4616 59.3431 15.0711L65.7071 8.7071ZM8.74228e-08 9L65 8.99999L65 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="mt-[20px] flex flex-grow items-center">
            <svg
              width="66"
              height="16"
              viewBox="0 0 66 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.7071 8.7071C66.0976 8.31658 66.0976 7.68341 65.7071 7.29289L59.3431 0.928927C58.9526 0.538403 58.3195 0.538403 57.9289 0.928927C57.5384 1.31945 57.5384 1.95262 57.9289 2.34314L63.5858 7.99999L57.9289 13.6568C57.5384 14.0474 57.5384 14.6805 57.9289 15.0711C58.3195 15.4616 58.9526 15.4616 59.3431 15.0711L65.7071 8.7071ZM8.74228e-08 9L65 8.99999L65 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="flex w-[15%] flex-col gap-[5%]">
          <div className="flex h-[30%] flex-col items-center justify-center rounded-xl border border-[#ffffff] text-center text-h3-mobile">
            <p>捷運</p>
            <p>南港站</p>
            <p>2號出口</p>
          </div>
          <div className="flex h-[30%] flex-col items-center justify-center rounded-xl border border-[#ffffff] text-center text-h3-mobile">
            <p>捷運</p>
            <p>南港展覽館站</p>
            <p>5號出口</p>
          </div>
          <div className="flex h-[30%] flex-col items-center justify-center rounded-xl border border-[#ffffff] text-center text-h3-mobile">
            <p>捷運</p>
            <p>南港展覽館站</p>
            <p>4號出口</p>
          </div>
        </div>
        <div className="flex w-[30%] flex-col gap-[5%]">
          <div className="flex h-[30%] items-center justify-center">
            <div className="relative h-min w-full">
              <svg
                width="332"
                height="16"
                viewBox="0 0 332 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M331.707 8.70708C332.098 8.31655 332.098 7.68339 331.707 7.29286L325.343 0.928904C324.953 0.538379 324.319 0.538379 323.929 0.928904C323.538 1.31943 323.538 1.95259 323.929 2.34312L329.586 7.99997L323.929 13.6568C323.538 14.0474 323.538 14.6805 323.929 15.071C324.319 15.4616 324.953 15.4616 325.343 15.071L331.707 8.70708ZM8.74228e-08 9L331 8.99997L331 6.99997L-8.74228e-08 7L8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-4 flex w-full justify-center"
              >
                <g clipPath="url(#clip0_129_1926)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.86 10C38.7802 9.99985 39.6881 10.2114 40.5135 10.6181C41.3388 11.0249 42.0596 11.6161 42.62 12.346L42.852 12.672L44.992 15.882C45.5659 16.7424 45.9076 17.7366 45.984 18.768L46 19.212V32C46.0003 33.0092 45.6192 33.9811 44.933 34.7211C44.2468 35.4611 43.3063 35.9143 42.3 35.99L42 36H41.66C41.2568 37.1406 40.5183 38.1327 39.5415 38.8463C38.5646 39.5598 37.3949 39.9615 36.1857 39.9987C34.9765 40.0359 33.7843 39.7069 32.7655 39.0547C31.7466 38.4025 30.9485 37.4576 30.476 36.344L30.34 36H17.658C17.2544 37.1399 16.5159 38.1314 15.5393 38.8445C14.5626 39.5575 13.3933 39.959 12.1846 39.9962C10.9759 40.0333 9.7842 39.7046 8.76556 39.0529C7.74691 38.4012 6.94887 37.457 6.476 36.344L6.34 36H6C4.99085 36.0003 4.01887 35.6192 3.2789 34.933C2.53894 34.2468 2.08569 33.3063 2.01 32.3L2 32V16C1.99991 14.4696 2.58465 12.997 3.63457 11.8835C4.68448 10.77 6.12021 10.0998 7.648 10.01L8 10H37.86ZM36 32C35.4696 32 34.9609 32.2107 34.5858 32.5858C34.2107 32.9609 34 33.4696 34 34C34 34.5304 34.2107 35.0391 34.5858 35.4142C34.9609 35.7893 35.4696 36 36 36C36.5304 36 37.0391 35.7893 37.4142 35.4142C37.7893 35.0391 38 34.5304 38 34C38 33.4696 37.7893 32.9609 37.4142 32.5858C37.0391 32.2107 36.5304 32 36 32ZM12 32C11.4696 32 10.9609 32.2107 10.5858 32.5858C10.2107 32.9609 10 33.4696 10 34C10 34.5304 10.2107 35.0391 10.5858 35.4142C10.9609 35.7893 11.4696 36 12 36C12.5304 36 13.0391 35.7893 13.4142 35.4142C13.7893 35.0391 14 34.5304 14 34C14 33.4696 13.7893 32.9609 13.4142 32.5858C13.0391 32.2107 12.5304 32 12 32ZM32.536 24H6V32H6.34C6.7532 30.8289 7.51948 29.8149 8.5332 29.0976C9.54692 28.3803 10.7582 27.9951 12 27.9951C13.2418 27.9951 14.4531 28.3803 15.4668 29.0976C16.4805 29.8149 17.2468 30.8289 17.66 32H30.34C30.7532 30.8289 31.5195 29.8149 32.5332 29.0976C33.5469 28.3803 34.7582 27.9951 36 27.9951C37.2418 27.9951 38.4531 28.3803 39.4668 29.0976C40.4805 29.8149 41.2468 30.8289 41.66 32H42V26H36C35.2979 26 34.6081 25.8152 34.0001 25.4641C33.392 25.113 32.8871 24.6081 32.536 24ZM37.86 14H36V22H42V19.212C42.0001 18.8169 41.8832 18.4307 41.664 18.102L39.524 14.89C39.3413 14.6162 39.0938 14.3917 38.8036 14.2364C38.5133 14.0812 38.1892 14 37.86 14ZM12 14H8C7.51013 14.0001 7.03733 14.1799 6.67126 14.5054C6.30519 14.8309 6.07131 15.2795 6.014 15.766L6 16V20H12V14ZM22 14H16V20H22V14ZM32 14H26V20H32V14Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_129_1926">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="absolute top-6 flex w-full justify-center text-[12px]">
                212 直、270（到中研院站）
              </p>
            </div>
          </div>
          <div className="flex h-[30%] items-center justify-center">
            <div className="relative h-min w-full">
              <svg
                width="332"
                height="16"
                viewBox="0 0 332 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M331.707 8.70708C332.098 8.31655 332.098 7.68339 331.707 7.29286L325.343 0.928904C324.953 0.538379 324.319 0.538379 323.929 0.928904C323.538 1.31943 323.538 1.95259 323.929 2.34312L329.586 7.99997L323.929 13.6568C323.538 14.0474 323.538 14.6805 323.929 15.071C324.319 15.4616 324.953 15.4616 325.343 15.071L331.707 8.70708ZM8.74228e-08 9L331 8.99997L331 6.99997L-8.74228e-08 7L8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-4 flex w-full justify-center"
              >
                <g clipPath="url(#clip0_129_1926)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.86 10C38.7802 9.99985 39.6881 10.2114 40.5135 10.6181C41.3388 11.0249 42.0596 11.6161 42.62 12.346L42.852 12.672L44.992 15.882C45.5659 16.7424 45.9076 17.7366 45.984 18.768L46 19.212V32C46.0003 33.0092 45.6192 33.9811 44.933 34.7211C44.2468 35.4611 43.3063 35.9143 42.3 35.99L42 36H41.66C41.2568 37.1406 40.5183 38.1327 39.5415 38.8463C38.5646 39.5598 37.3949 39.9615 36.1857 39.9987C34.9765 40.0359 33.7843 39.7069 32.7655 39.0547C31.7466 38.4025 30.9485 37.4576 30.476 36.344L30.34 36H17.658C17.2544 37.1399 16.5159 38.1314 15.5393 38.8445C14.5626 39.5575 13.3933 39.959 12.1846 39.9962C10.9759 40.0333 9.7842 39.7046 8.76556 39.0529C7.74691 38.4012 6.94887 37.457 6.476 36.344L6.34 36H6C4.99085 36.0003 4.01887 35.6192 3.2789 34.933C2.53894 34.2468 2.08569 33.3063 2.01 32.3L2 32V16C1.99991 14.4696 2.58465 12.997 3.63457 11.8835C4.68448 10.77 6.12021 10.0998 7.648 10.01L8 10H37.86ZM36 32C35.4696 32 34.9609 32.2107 34.5858 32.5858C34.2107 32.9609 34 33.4696 34 34C34 34.5304 34.2107 35.0391 34.5858 35.4142C34.9609 35.7893 35.4696 36 36 36C36.5304 36 37.0391 35.7893 37.4142 35.4142C37.7893 35.0391 38 34.5304 38 34C38 33.4696 37.7893 32.9609 37.4142 32.5858C37.0391 32.2107 36.5304 32 36 32ZM12 32C11.4696 32 10.9609 32.2107 10.5858 32.5858C10.2107 32.9609 10 33.4696 10 34C10 34.5304 10.2107 35.0391 10.5858 35.4142C10.9609 35.7893 11.4696 36 12 36C12.5304 36 13.0391 35.7893 13.4142 35.4142C13.7893 35.0391 14 34.5304 14 34C14 33.4696 13.7893 32.9609 13.4142 32.5858C13.0391 32.2107 12.5304 32 12 32ZM32.536 24H6V32H6.34C6.7532 30.8289 7.51948 29.8149 8.5332 29.0976C9.54692 28.3803 10.7582 27.9951 12 27.9951C13.2418 27.9951 14.4531 28.3803 15.4668 29.0976C16.4805 29.8149 17.2468 30.8289 17.66 32H30.34C30.7532 30.8289 31.5195 29.8149 32.5332 29.0976C33.5469 28.3803 34.7582 27.9951 36 27.9951C37.2418 27.9951 38.4531 28.3803 39.4668 29.0976C40.4805 29.8149 41.2468 30.8289 41.66 32H42V26H36C35.2979 26 34.6081 25.8152 34.0001 25.4641C33.392 25.113 32.8871 24.6081 32.536 24ZM37.86 14H36V22H42V19.212C42.0001 18.8169 41.8832 18.4307 41.664 18.102L39.524 14.89C39.3413 14.6162 39.0938 14.3917 38.8036 14.2364C38.5133 14.0812 38.1892 14 37.86 14ZM12 14H8C7.51013 14.0001 7.03733 14.1799 6.67126 14.5054C6.30519 14.8309 6.07131 15.2795 6.014 15.766L6 16V20H12V14ZM22 14H16V20H22V14ZM32 14H26V20H32V14Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_129_1926">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="absolute top-6 flex w-full justify-center text-[12px]">
                205、212、276、306、306 區（到中研院站）
              </p>
            </div>
          </div>
          <div className="flex h-[30%] items-center justify-center">
            <div className="relative h-min w-full">
              <svg
                width="332"
                height="16"
                viewBox="0 0 332 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M331.707 8.70708C332.098 8.31655 332.098 7.68339 331.707 7.29286L325.343 0.928904C324.953 0.538379 324.319 0.538379 323.929 0.928904C323.538 1.31943 323.538 1.95259 323.929 2.34312L329.586 7.99997L323.929 13.6568C323.538 14.0474 323.538 14.6805 323.929 15.071C324.319 15.4616 324.953 15.4616 325.343 15.071L331.707 8.70708ZM8.74228e-08 9L331 8.99997L331 6.99997L-8.74228e-08 7L8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
              <span className="material-symbols-outlined absolute bottom-4 w-full text-center !text-[48px]">
                directions_bike
              </span>
              <div className="absolute top-6 flex w-full justify-center text-[12px]">
                <div>
                  <p>中研院附近的 YouBike 2.0 站牌 :</p>
                  <p>1. 中研院人文社會科學館</p>
                  <p>2. 中研院綜合體育館東側</p>
                  <p>3. 研究院舊莊街口</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[15%] flex-col items-center justify-center rounded-xl border border-[#ffffff] text-h3-mobile">
          <p>中研院</p>
          <p>人文社會</p>
          <p>科學館</p>
        </div>
      </section>
      <section
        id="description"
        className="mt-20 flex w-full flex-col gap-4 md:hidden"
      >
        <div className="flex flex-row justify-between gap-[4%]">
          <div className="flex w-[48%] flex-col items-center gap-4">
            <div className="flex w-full flex-row border border-[#ffffff] border-x-transparent p-2">
              <div className="flex w-[50%] flex-col items-center gap-4">
                <span className="material-symbols-outlined !text-[48px]">
                  train
                </span>
                <p className="text-[12px]">南港火車站</p>
              </div>
              <div className="flex w-[50%] flex-col items-center gap-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.0909 34.1333C42.6093 34.1333 43.1064 34.337 43.473 34.6996C43.8395 35.0622 44.0455 35.5539 44.0455 36.0667C44.0455 36.5794 43.8395 37.0712 43.473 37.4337C43.1064 37.7963 42.6093 38 42.0909 38H4.95456C4.43618 38 3.93903 37.7963 3.57249 37.4337C3.20594 37.0712 3.00001 36.5794 3.00001 36.0667C3.00001 35.5539 3.20594 35.0622 3.57249 34.6996C3.93903 34.337 4.43618 34.1333 4.95456 34.1333H42.0909ZM24.5 9C30.8015 9 36.1139 11.0783 39.8784 14.0054C43.5744 16.8783 46 20.7643 46 24.4667C46 26.0945 45.4957 27.4827 44.6064 28.604C43.7405 29.6983 42.5854 30.4407 41.4088 30.9511C39.0907 31.9525 36.3328 32.2 34.2727 32.2H6.89737C6.38465 32.1997 5.87701 32.0995 5.40351 31.9049C4.93001 31.7104 4.49995 31.4254 4.13794 31.0662C3.77594 30.7071 3.4891 30.2808 3.29383 29.8119C3.09857 29.3429 2.99873 28.8405 3.00001 28.3333V12.8667C3.00001 10.7381 4.73956 9 6.90519 9H24.5ZM41.7332 22.5333H6.9091V28.3333H34.2727C36.1217 28.3333 38.2502 28.0975 39.8432 27.4073C40.6191 27.0709 41.1742 26.6668 41.53 26.2183C41.8622 25.8007 42.0909 25.2555 42.0909 24.4667C42.0909 23.8751 41.9736 23.2216 41.7332 22.5333ZM14.7273 12.8667H6.9091V18.6667H14.7273V12.8667ZM24.5 12.8667H18.6364V18.6667H26.4546V12.944C25.8174 12.8937 25.1646 12.8667 24.5 12.8667ZM30.3636 13.6071V18.6667H39.2588C38.7023 18.0818 38.1019 17.5396 37.4625 17.0446C35.5823 15.583 33.1821 14.3476 30.3636 13.6071Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[12px]">高鐵南港站</p>
              </div>
            </div>
            <div className="relative flex w-max items-center">
              <svg
                width="16"
                height="76"
                viewBox="0 0 16 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 75.7071C7.68341 76.0976 8.31658 76.0976 8.7071 75.7071L15.0711 69.3431C15.4616 68.9526 15.4616 68.3195 15.0711 67.9289C14.6805 67.5384 14.0474 67.5384 13.6569 67.9289L8 73.5858L2.34314 67.9289C1.95262 67.5384 1.31945 67.5384 0.928929 67.9289C0.538405 68.3195 0.538405 68.9526 0.928929 69.3431L7.29289 75.7071ZM7 -4.37114e-08L7 75L9 75L9 4.37114e-08L7 -4.37114e-08Z"
                  fill="white"
                />
              </svg>
              <span className="material-symbols-outlined absolute left-4 !text-[48px]">
                directions_walk
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#ffffff] py-6 text-normal">
              <p>捷運</p>
              <p>南港站</p>
              <p>2號出口</p>
            </div>
          </div>
          <div className="flex w-[48%] flex-col items-center gap-4">
            <div className="flex w-full flex-row border border-[#ffffff] border-x-transparent p-2">
              <div className="flex w-full flex-col items-center gap-4">
                <span className="material-symbols-outlined !text-[48px]">
                  directions_railway
                </span>
                <p className="text-[12px]">南港展覽館站</p>
              </div>
            </div>
            <div className="relative flex w-max items-center">
              <svg
                width="16"
                height="76"
                viewBox="0 0 16 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 75.7071C7.68341 76.0976 8.31658 76.0976 8.7071 75.7071L15.0711 69.3431C15.4616 68.9526 15.4616 68.3195 15.0711 67.9289C14.6805 67.5384 14.0474 67.5384 13.6569 67.9289L8 73.5858L2.34314 67.9289C1.95262 67.5384 1.31945 67.5384 0.928929 67.9289C0.538405 68.3195 0.538405 68.9526 0.928929 69.3431L7.29289 75.7071ZM7 -4.37114e-08L7 75L9 75L9 4.37114e-08L7 -4.37114e-08Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="w-full flex-grow flex-col text-normal">
              <div className="flex h-[60%] flex-col items-center gap-2 py-2">
                <p>捷運</p>
                <p>南港展覽館站</p>
              </div>
              <div className="flex h-[40%] flex-row justify-between gap-2 text-center">
                <div className="flex flex-grow items-center justify-center rounded-xl border border-[#ffffff] p-2">
                  5號出口
                </div>
                <div className="flex flex-grow items-center justify-center rounded-xl border border-[#ffffff] p-2">
                  4號出口
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[4%]">
          <div className="flex w-[24%] flex-col items-center">
            <svg
              width="16"
              height="98"
              viewBox="0 0 16 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 97.7071C7.68341 98.0976 8.31658 98.0976 8.7071 97.7071L15.0711 91.3431C15.4616 90.9526 15.4616 90.3195 15.0711 89.9289C14.6805 89.5384 14.0474 89.5384 13.6568 89.9289L8 95.5858L2.34314 89.9289C1.95262 89.5384 1.31945 89.5384 0.928928 89.9289C0.538403 90.3195 0.538403 90.9526 0.928928 91.3431L7.29289 97.7071ZM7 -4.95696e-08L7 97L9 97L9 4.95696e-08L7 -4.95696e-08Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex w-[48%] flex-col items-center">
            <svg
              width="104"
              height="100"
              viewBox="0 0 104 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.000306813 97.9749C-0.0135609 98.527 0.422768 98.9858 0.974874 98.9997L9.97204 99.2257C10.5241 99.2396 10.983 98.8033 10.9968 98.2512C11.0107 97.6991 10.5744 97.2403 10.0223 97.2264L2.0248 97.0254L2.22574 89.028C2.23961 88.4759 1.80328 88.017 1.25117 88.0032C0.699057 87.9893 0.240239 88.4256 0.226371 88.9777L0.000306813 97.9749ZM102.311 0.275355L0.310869 97.2754L1.68911 98.7247L103.689 1.72464L102.311 0.275355Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex w-[24%] flex-col items-center">
            <svg
              width="16"
              height="98"
              viewBox="0 0 16 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 97.7071C7.68341 98.0976 8.31658 98.0976 8.7071 97.7071L15.0711 91.3431C15.4616 90.9526 15.4616 90.3195 15.0711 89.9289C14.6805 89.5384 14.0474 89.5384 13.6568 89.9289L8 95.5858L2.34314 89.9289C1.95262 89.5384 1.31945 89.5384 0.928928 89.9289C0.538403 90.3195 0.538403 90.9526 0.928928 91.3431L7.29289 97.7071ZM7 -4.95696e-08L7 97L9 97L9 4.95696e-08L7 -4.95696e-08Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[4%]">
          <div className="flex w-[48%] flex-col items-center gap-4">
            <div className="flex w-full flex-row gap-4">
              <div className="flex w-[50%] flex-row border border-[#ffffff] border-x-transparent border-b-transparent p-1">
                <div className="flex w-full flex-col items-center gap-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_129_1926)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.86 10C38.7802 9.99985 39.6881 10.2114 40.5135 10.6181C41.3388 11.0249 42.0596 11.6161 42.62 12.346L42.852 12.672L44.992 15.882C45.5659 16.7424 45.9076 17.7366 45.984 18.768L46 19.212V32C46.0003 33.0092 45.6192 33.9811 44.933 34.7211C44.2468 35.4611 43.3063 35.9143 42.3 35.99L42 36H41.66C41.2568 37.1406 40.5183 38.1327 39.5415 38.8463C38.5646 39.5598 37.3949 39.9615 36.1857 39.9987C34.9765 40.0359 33.7843 39.7069 32.7655 39.0547C31.7466 38.4025 30.9485 37.4576 30.476 36.344L30.34 36H17.658C17.2544 37.1399 16.5159 38.1314 15.5393 38.8445C14.5626 39.5575 13.3933 39.959 12.1846 39.9962C10.9759 40.0333 9.7842 39.7046 8.76556 39.0529C7.74691 38.4012 6.94887 37.457 6.476 36.344L6.34 36H6C4.99085 36.0003 4.01887 35.6192 3.2789 34.933C2.53894 34.2468 2.08569 33.3063 2.01 32.3L2 32V16C1.99991 14.4696 2.58465 12.997 3.63457 11.8835C4.68448 10.77 6.12021 10.0998 7.648 10.01L8 10H37.86ZM36 32C35.4696 32 34.9609 32.2107 34.5858 32.5858C34.2107 32.9609 34 33.4696 34 34C34 34.5304 34.2107 35.0391 34.5858 35.4142C34.9609 35.7893 35.4696 36 36 36C36.5304 36 37.0391 35.7893 37.4142 35.4142C37.7893 35.0391 38 34.5304 38 34C38 33.4696 37.7893 32.9609 37.4142 32.5858C37.0391 32.2107 36.5304 32 36 32ZM12 32C11.4696 32 10.9609 32.2107 10.5858 32.5858C10.2107 32.9609 10 33.4696 10 34C10 34.5304 10.2107 35.0391 10.5858 35.4142C10.9609 35.7893 11.4696 36 12 36C12.5304 36 13.0391 35.7893 13.4142 35.4142C13.7893 35.0391 14 34.5304 14 34C14 33.4696 13.7893 32.9609 13.4142 32.5858C13.0391 32.2107 12.5304 32 12 32ZM32.536 24H6V32H6.34C6.7532 30.8289 7.51948 29.8149 8.5332 29.0976C9.54692 28.3803 10.7582 27.9951 12 27.9951C13.2418 27.9951 14.4531 28.3803 15.4668 29.0976C16.4805 29.8149 17.2468 30.8289 17.66 32H30.34C30.7532 30.8289 31.5195 29.8149 32.5332 29.0976C33.5469 28.3803 34.7582 27.9951 36 27.9951C37.2418 27.9951 38.4531 28.3803 39.4668 29.0976C40.4805 29.8149 41.2468 30.8289 41.66 32H42V26H36C35.2979 26 34.6081 25.8152 34.0001 25.4641C33.392 25.113 32.8871 24.6081 32.536 24ZM37.86 14H36V22H42V19.212C42.0001 18.8169 41.8832 18.4307 41.664 18.102L39.524 14.89C39.3413 14.6162 39.0938 14.3917 38.8036 14.2364C38.5133 14.0812 38.1892 14 37.86 14ZM12 14H8C7.51013 14.0001 7.03733 14.1799 6.67126 14.5054C6.30519 14.8309 6.07131 15.2795 6.014 15.766L6 16V20H12V14ZM22 14H16V20H22V14ZM32 14H26V20H32V14Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_129_1926">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[12px]">
                    205、212、 276、306、 306 區（到中研院站）
                  </p>
                </div>
              </div>
              <div className="flex w-[50%] flex-row border border-[#ffffff] border-x-transparent border-b-transparent p-1">
                <div className="flex w-full flex-col items-center gap-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_129_1926)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.86 10C38.7802 9.99985 39.6881 10.2114 40.5135 10.6181C41.3388 11.0249 42.0596 11.6161 42.62 12.346L42.852 12.672L44.992 15.882C45.5659 16.7424 45.9076 17.7366 45.984 18.768L46 19.212V32C46.0003 33.0092 45.6192 33.9811 44.933 34.7211C44.2468 35.4611 43.3063 35.9143 42.3 35.99L42 36H41.66C41.2568 37.1406 40.5183 38.1327 39.5415 38.8463C38.5646 39.5598 37.3949 39.9615 36.1857 39.9987C34.9765 40.0359 33.7843 39.7069 32.7655 39.0547C31.7466 38.4025 30.9485 37.4576 30.476 36.344L30.34 36H17.658C17.2544 37.1399 16.5159 38.1314 15.5393 38.8445C14.5626 39.5575 13.3933 39.959 12.1846 39.9962C10.9759 40.0333 9.7842 39.7046 8.76556 39.0529C7.74691 38.4012 6.94887 37.457 6.476 36.344L6.34 36H6C4.99085 36.0003 4.01887 35.6192 3.2789 34.933C2.53894 34.2468 2.08569 33.3063 2.01 32.3L2 32V16C1.99991 14.4696 2.58465 12.997 3.63457 11.8835C4.68448 10.77 6.12021 10.0998 7.648 10.01L8 10H37.86ZM36 32C35.4696 32 34.9609 32.2107 34.5858 32.5858C34.2107 32.9609 34 33.4696 34 34C34 34.5304 34.2107 35.0391 34.5858 35.4142C34.9609 35.7893 35.4696 36 36 36C36.5304 36 37.0391 35.7893 37.4142 35.4142C37.7893 35.0391 38 34.5304 38 34C38 33.4696 37.7893 32.9609 37.4142 32.5858C37.0391 32.2107 36.5304 32 36 32ZM12 32C11.4696 32 10.9609 32.2107 10.5858 32.5858C10.2107 32.9609 10 33.4696 10 34C10 34.5304 10.2107 35.0391 10.5858 35.4142C10.9609 35.7893 11.4696 36 12 36C12.5304 36 13.0391 35.7893 13.4142 35.4142C13.7893 35.0391 14 34.5304 14 34C14 33.4696 13.7893 32.9609 13.4142 32.5858C13.0391 32.2107 12.5304 32 12 32ZM32.536 24H6V32H6.34C6.7532 30.8289 7.51948 29.8149 8.5332 29.0976C9.54692 28.3803 10.7582 27.9951 12 27.9951C13.2418 27.9951 14.4531 28.3803 15.4668 29.0976C16.4805 29.8149 17.2468 30.8289 17.66 32H30.34C30.7532 30.8289 31.5195 29.8149 32.5332 29.0976C33.5469 28.3803 34.7582 27.9951 36 27.9951C37.2418 27.9951 38.4531 28.3803 39.4668 29.0976C40.4805 29.8149 41.2468 30.8289 41.66 32H42V26H36C35.2979 26 34.6081 25.8152 34.0001 25.4641C33.392 25.113 32.8871 24.6081 32.536 24ZM37.86 14H36V22H42V19.212C42.0001 18.8169 41.8832 18.4307 41.664 18.102L39.524 14.89C39.3413 14.6162 39.0938 14.3917 38.8036 14.2364C38.5133 14.0812 38.1892 14 37.86 14ZM12 14H8C7.51013 14.0001 7.03733 14.1799 6.67126 14.5054C6.30519 14.8309 6.07131 15.2795 6.014 15.766L6 16V20H12V14ZM22 14H16V20H22V14ZM32 14H26V20H32V14Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_129_1926">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[12px]">212 直、270 （到中研院站）</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[48%] flex-col items-center gap-4">
            <div className="flex w-full flex-row border border-[#ffffff] border-x-transparent border-b-transparent p-2">
              <div className="flex w-full flex-col items-center gap-4">
                <span className="material-symbols-outlined !text-[48px]">
                  directions_bike
                </span>
                <div className="text-[12px]">
                  <p>YouBike 2.0 還車點 :</p>
                  <p>1. 中研院人文社會科學館</p>
                  <p>2. 中研院綜合體育館</p>
                  <p>3. 研究院舊莊街口</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[4%]">
          <div className="flex w-[48%] flex-col items-center gap-4">
            <div className="flex w-full flex-row gap-4">
              <div className="flex w-[50%] items-start justify-center border border-[#ffffff] border-x-transparent border-b-transparent">
                <svg
                  width="16"
                  height="111"
                  viewBox="0 0 16 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.29289 110.707C7.68341 111.098 8.31658 111.098 8.7071 110.707L15.0711 104.343C15.4616 103.953 15.4616 103.319 15.0711 102.929C14.6805 102.538 14.0474 102.538 13.6568 102.929L8 108.586L2.34314 102.929C1.95262 102.538 1.31945 102.538 0.928928 102.929C0.538403 103.319 0.538403 103.953 0.928928 104.343L7.29289 110.707ZM7 -4.37114e-08L7 110L9 110L9 4.37114e-08L7 -4.37114e-08Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex w-[50%] items-start justify-center border border-[#ffffff] border-x-transparent border-b-transparent">
                <svg
                  width="16"
                  height="111"
                  viewBox="0 0 16 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.29289 110.707C7.68341 111.098 8.31658 111.098 8.7071 110.707L15.0711 104.343C15.4616 103.953 15.4616 103.319 15.0711 102.929C14.6805 102.538 14.0474 102.538 13.6568 102.929L8 108.586L2.34314 102.929C1.95262 102.538 1.31945 102.538 0.928928 102.929C0.538403 103.319 0.538403 103.953 0.928928 104.343L7.29289 110.707ZM7 -4.37114e-08L7 110L9 110L9 4.37114e-08L7 -4.37114e-08Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex w-[48%] flex-col items-center gap-4">
            <div className="flex w-full items-start justify-center border border-[#ffffff] border-x-transparent border-b-transparent">
              <svg
                width="16"
                height="111"
                viewBox="0 0 16 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 110.707C7.68341 111.098 8.31658 111.098 8.7071 110.707L15.0711 104.343C15.4616 103.953 15.4616 103.319 15.0711 102.929C14.6805 102.538 14.0474 102.538 13.6568 102.929L8 108.586L2.34314 102.929C1.95262 102.538 1.31945 102.538 0.928928 102.929C0.538403 103.319 0.538403 103.953 0.928928 104.343L7.29289 110.707ZM7 -4.37114e-08L7 110L9 110L9 4.37114e-08L7 -4.37114e-08Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl border border-[#ffffff] py-6 text-normal">
          中研院 人文社會科學館
        </div>
      </section>
    </>
  );
};
