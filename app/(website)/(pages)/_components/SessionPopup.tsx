"use client";

import React, { useRef } from "react";
import data from "@/public/sessions.json";
// import { useSession } from "./AgendaContext";
import timeRender from "@/app/(website)/_utils/time-render";
import Markdown from "react-markdown";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import type { Session } from "@/app/(website)/(pages)/_components/SessionCard";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";
import sessions from "@/public/sessions.json";

const sessionTypes = sessions.session_types;
const allTags = sessions.tags;

const SessionPopup = ({ openSessionId }: { openSessionId: string | null }) => {
  const session: Session | undefined = data.sessions
    .filter(
      (session) =>
        session.start !== null && session.end !== null && session.id !== null,
    )
    .find((session) => session.id === openSessionId);

  const dialogElement = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useClickOutside(dialogElement, () => {
    router.push("/agenda", { scroll: false });
  });

  if (!session) return null;

  const getTimeText = (start: string, end: string) => {
    return `${timeRender(start)} - ${timeRender(end)}`;
  };

  const speakers = session.speakers.map((speakerId) => {
    return data.speakers.find((speaker) => speaker.id === speakerId);
  });

  let description = session!.zh.description;
  const sections = description.split("##");

  let priorKnowledge = "";
  let targetAudience = "";

  for (const section of sections) {
    if (section.includes("先備知識")) {
      priorKnowledge = section.replace(/ 先備知識(\r)?\n/, "");
      description = description.replaceAll("##" + section, "");
    }
    if (section.includes("目標聽眾")) {
      targetAudience = section.replace(/ 目標聽眾(\r)?\n/, "");
      description = description.replaceAll("##" + section, "");
    }
  }

  return (
    <>
      {/* 遮罩 */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 h-[100vh] w-[100vw] bg-[black]/60 backdrop-blur-sm"
        />
        {/* 彈出面板 */}
        {/* TODO::新的卷軸樣式、彈出動畫 */}
        <motion.div
          ref={dialogElement}
          initial={{ opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
          exit={{ opacity: 0, scale: 0.8, y: "-50%", x: "-50%" }}
          className="no-scrollbar no-scrollbar fixed left-[50%] top-[50%] z-50 h-[90%] w-[90%] max-w-[1024px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-3xl bg-[#ffffff] p-6 text-black md:h-[80vh] md:w-[90vw] md:p-10"
        >
          <div className="relative">
            <div className="flex flex-col gap-2">
              <div className="sticky right-0 top-0 -mb-8 flex h-[24px] w-[24px] cursor-pointer items-center justify-center self-end rounded-full bg-[#304878] md:-translate-y-4 md:translate-x-4">
                <Link href="/agenda" scroll={false}>
                  <button className="flex items-center justify-center !font-bold text-[#ffffff]">
                    <span className="material-symbols-outlined !text-[16px]">
                      close
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex max-w-full flex-col gap-3 md:max-w-[60%]">
                <div className="flex items-center gap-2">
                  <h2 className="self-start text-[20px] font-medium md:self-center">
                    {
                      sessionTypes.find((type) => type.id === session.type)?.zh
                        .name
                    }
                  </h2>
                  <div className="flex flex-row gap-2">
                    {session.tags
                      .map((tag) => allTags.find((t) => t.id === tag)?.zh.name)
                      .filter((tag) => tag !== "")
                      .map((tag) => (
                        <span
                          className="rounded-full bg-[#D9D9D9] px-3 py-1.5 text-[12px]"
                          key={tag}
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                </div>
                <h1 className="text-h2-mobile font-bold md:text-h2">
                  {session.zh.title}
                </h1>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-row items-center gap-2">
                    <span className="material-symbols-outlined !text-[24px] !font-bold">
                      schedule
                    </span>
                    <p className="text-[16px] font-bold">
                      {getTimeText(session.start, session.end)}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="material-symbols-outlined !text-[24px] !font-bold">
                      location_on
                    </span>
                    <p className="text-[16px] font-bold">{session.room}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-0 md:gap-10">
                <div className="flex w-full flex-col gap-10 md:flex-row">
                  <div className="flex w-full flex-col gap-2 md:w-[65%]">
                    <div className="flex flex-row">
                      {targetAudience && (
                        <div className="flex-1">
                          <h2 className="mb-2 text-2xl font-bold">目標聽眾</h2>
                          <Markdown className="prose space-y-4 leading-7 max-md:text-sm">
                            {targetAudience}
                          </Markdown>
                        </div>
                      )}
                      {priorKnowledge && (
                        <div className="mb-10 mt-5 flex-1">
                          <h2 className="mb-2 text-2xl font-bold">先備知識</h2>
                          <Markdown className="prose space-y-4 leading-7 max-md:text-sm">
                            {priorKnowledge}
                          </Markdown>
                        </div>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold">議程介紹　</h2>
                    <Markdown className="prose space-y-4 leading-7 max-md:text-sm">
                      {description}
                    </Markdown>
                  </div>
                  <div className="flex w-full flex-col gap-3 md:w-[35%]">
                    {session.record && typeof session.record === "string" && (
                      <YouTubeEmbed
                        style="border-radius: 20px;"
                        videoid={session.record.replace(
                          "https://youtu.be/",
                          "",
                        )}
                      />
                    )}
                    <div className="flex flex-row justify-between gap-2">
                      <button
                        onClick={() => {
                          if (session.qa) window.open(session.qa, "_blank");
                        }}
                        className="flex-grow text-nowrap rounded-full bg-[#B9D3E6] px-3 py-2 text-center text-[16px] font-bold transition-colors hover:bg-[#A1C7E0]"
                      >
                        即時提問
                      </button>
                      {session.slide && (
                        <button
                          onClick={() => {
                            if (session.slide)
                              window.open(session.slide, "_blank");
                          }}
                          className="flex-grow text-nowrap rounded-full bg-[#B9D3E6] px-3 py-2 text-center text-[16px] font-bold transition-colors hover:bg-[#A1C7E0]"
                        >
                          簡報連結
                        </button>
                      )}

                      <button
                        onClick={() => {
                          if (session.co_write)
                            window.open(session.co_write, "_blank");
                        }}
                        className="flex-grow text-nowrap rounded-full bg-[#B9D3E6] px-3 py-2 text-center text-[16px] font-bold transition-colors hover:bg-[#A1C7E0]"
                      >
                        共筆連結
                      </button>
                    </div>
                  </div>
                </div>

                {speakers &&
                  speakers.map((speaker) => (
                    <div
                      key={speaker?.id}
                      className="flex w-full flex-col gap-10 md:flex-row"
                    >
                      <div className="flex flex-col gap-4 md:w-[65%]">
                        <div className="text-2xl font-bold">
                          {speaker?.zh.name}
                        </div>
                        <Markdown className="prose space-y-4 leading-7 max-md:text-sm">
                          {speaker?.zh.bio}
                        </Markdown>
                      </div>
                      {speaker?.avatar && (
                        <div className="md:w-[35%]">
                          <Image
                            layout="responsive"
                            alt="speaker"
                            style={{ borderRadius: "20px" }}
                            src={speaker?.avatar}
                            width={100}
                            height={100}
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SessionPopup;
