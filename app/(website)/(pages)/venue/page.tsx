"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TriangleAlert, CircleX, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

import Svg2F from "@/public/image/2F.svg";
import Svg3F from "@/public/image/3F.svg";
import Svg4F from "@/public/image/4F.svg";
import venueData from "./venueData";

interface Venue {
  number: string;
  title: string;
  description: string;
  url?: string;
}

export default function Page() {
  const [Floor, setFloor] = useState<Floor>("2F");
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  useEffect(() => {
    setSelectedVenue(null);
  }, [Floor]);

  type Floor = "2F" | "3F" | "4F";
  type VenueDataKey = keyof typeof venueData;

  const options: Array<{
    label: string;
    value: Floor;
    number: string;
    image: string;
  }> = [
    { label: "2F", value: "2F", number: "2", image: Svg2F.src },
    { label: "3F", value: "3F", number: "3", image: Svg3F.src },
    { label: "4F", value: "4F", number: "4", image: Svg4F.src },
  ];

  const currentFloorNumber = options.find(
    (option) => option.value === Floor,
  )?.number;

  const currentVenueData = currentFloorNumber
    ? (venueData[currentFloorNumber as unknown as VenueDataKey] as Venue[])
    : [];

  interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
    title: string;
    number: string;
    url?: string | boolean;
  }

  const Popup = ({
    isOpen,
    onClose,
    content,
    title,
    number,
    url,
  }: PopupProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(false);
      }
    }, [isOpen]);

    useEffect(() => {
      const handleEscKey = (event: { keyCode: number }) => {
        if (event.keyCode === 27 && isOpen) {
          onClose();
        }
      };

      window.addEventListener("keydown", handleEscKey);

      return () => {
        window.removeEventListener("keydown", handleEscKey);
      };
    }, [isOpen, onClose]);

    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (isOpen && target.classList.contains("popup-backdrop")) {
          onClose();
        }
      };

      window.addEventListener("mousedown", handleOutsideClick);
      return () => window.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        className={`popup-backdrop fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          isVisible
            ? "bg-black bg-opacity-10 backdrop-blur"
            : "bg-black bg-opacity-0 backdrop-blur-none"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.95,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mx-4 w-full max-w-xl overflow-hidden rounded-3xl bg-[#FFFFFF] text-black shadow-lg"
        >
          <div className="mx-4 mt-3 flex items-center justify-between p-4">
            <h3 className="text-lg font-medium">
              {number}. {title}
            </h3>
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <CircleX />
            </motion.button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mx-4 p-4 text-zinc-700"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                [
                  rehypeExternalLinks,
                  { target: "_blank", rel: ["noopener", "noreferrer"] },
                ],
              ]}
              components={{
                a: ({ ...props }) => (
                  <a
                    {...props}
                    style={{ color: "#1177dd", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </motion.div>
          {typeof url === "string" && (
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="group mb-4 flex items-center justify-center py-2 text-center text-sky-500 transition-colors duration-200 hover:text-sky-600"
            >
              前往網站
              <motion.span
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="ml-1" />
              </motion.span>
            </motion.a>
          )}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-start justify-center gap-12 text-[#ffffff]">
      <section
        id="address"
        className="flex w-full flex-col items-center gap-3 font-bold"
      >
        <div className="flex w-full justify-end text-left">
          <h1 className="flex-none self-start text-h1-mobile font-bold md:text-h1">
            會場地圖
          </h1>
          <div className="ml-4 flex flex-1 items-center gap-1">
            <TriangleAlert size={30} className="my-auto text-[#EB5757]" />
            <a
              href="https://hackmd.io/@SITCON/H1J2-d3y6"
              className="my-auto pl-1 text-xl font-bold"
            >
              緊急避難圖
            </a>
          </div>
        </div>
      </section>
      <section id="map" className="flex w-full flex-col gap-8">
        <div className="flex w-full justify-between gap-2 text-h3-mobile font-bold md:gap-6 md:text-h3">
          {options.map((option) => (
            <motion.button
              initial={{ scale: 1, shadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.8)",
              }}
              key={option.value}
              onClick={() => setFloor(option.value)}
              className={`flex h-[60px] flex-grow items-center justify-center rounded-xl text-black ${
                Floor === option.value ? "bg-[#B9D3E6]" : "bg-[#DEE6EB]"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </section>
      <div className="w-full gap-8 md:flex">
        <div className="sticky top-[84px] z-10 max-h-[740px] w-full rounded-3xl bg-black bg-opacity-10 backdrop-blur-lg venue_desktop:bg-opacity-0">
          <Image
            src={options.find((option) => option.value === Floor)?.image ?? ""}
            alt={`${Floor} Floor Image`}
            width={1024}
            height={768}
            className="mx-auto"
          />
        </div>

        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 gap-6 lg:gap-2 venue_desktop:grid-cols-2">
            {currentVenueData.map((venue) => (
              <div
                key={venue.number}
                className="flex cursor-pointer items-center space-x-4 rounded-lg p-2 shadow-lg transition-colors hover:bg-slate-800"
                onClick={() => setSelectedVenue(venue)}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md border border-green-400 px-2 py-2 text-3xl font-semibold text-green-400">
                    {venue.number}
                  </span>
                </div>
                <div>
                  <h3 className="w-60 truncate text-lg">{venue.title}</h3>
                  <p className="w-60 truncate text-sm text-zinc-400">
                    {venue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedVenue && (
          <Popup
            isOpen={!!selectedVenue}
            onClose={() => setSelectedVenue(null)}
            title={selectedVenue.title}
            content={selectedVenue.description}
            number={selectedVenue.number}
            url={
              "url" in selectedVenue &&
              typeof selectedVenue.url === "string" &&
              selectedVenue.url
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}
