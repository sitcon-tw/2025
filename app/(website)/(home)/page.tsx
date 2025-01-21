"use client";

import { ReactNode } from "react";
import heroImage from "./_assets/hero.png";
import Link from "next/link";
import LinkButton from "../_components/linkButton";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Page() {
  return (
    <div className="mb-28 w-full leading-8 text-foreground">
      <div
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: "cover",
        }}
        className="mx-auto mb-[-25%] aspect-[3/2] w-full max-w-[1920px] bg-top bg-no-repeat min-[1900px]:mb-[-20%] min-[2300px]:mb-[-15%]"
      >
        <div className="absolute left-0 right-0 top-1/2 px-10 md:left-10 md:right-auto md:w-2/3"></div>
        <div className="absolute bottom-[70%] left-[50%] items-center justify-center sm:bottom-[45%] lg:bottom-[10%]">
          <motion.div
            initial={{ opacity: 0, y: -1 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="max-w-min animate-bounce"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full max-w-[90%] flex-col justify-center px-4 py-40 lg:max-w-[840px] desktop:max-w-[1120px]">
          <div className="my-10 flex gap-5 md:justify-end">
            <LinkButton
              className="w-full md:w-auto md:px-12 md:py-3 md:text-xl"
              link="tickets"
              text="活動報名"
            />
            <LinkButton
              className="w-full md:w-auto md:px-12 md:py-3 md:text-xl"
              link="https://sitcon.org/donate"
              text="支持我們"
              target="_blank"
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-h2-mobile font-bold md:text-h2">
              2025 年會主題
            </h1>
            <h2 className="text-h1-mobile font-bold md:text-h1">
              Lines of Flight
            </h2>
          </div>
          <div className="mt-12 flex flex-col gap-7">
            <p className="text-center text-normal font-bold md:text-xl">
              Il s&apos;agit toujours de libérer la vie là où elle est
              prisonnière <br /> 這總是關乎到解放生命被禁錮的生命
            </p>
            <p className="brightness-90">
              「Line of
              Flight」是當代文學裡的一個概念，由法國的思想家德勒茲提出，是指在日常社會結構中找到一個裂縫或缺口，並在現有框架下挖掘出新的可能性。而
              Lines，則代表了多條可能的逃逸路徑。我們可以不只有一種選擇或方法，而是有各種突破框架、追求創新和探索新可能性的方向。
            </p>
            <p className="brightness-90">
              正如我們所處的這個時代，人類的智慧打造出前所未見的世界，在便捷、快速等多種科技紅利的包圍下，我們也看見了資訊流通導致的社群成癮，看見在社會價值觀裡的畫地自限，看見螢幕構築出那若即若離的疏離感，這一切彷彿科技建構出的無形枷鎖，將我們束縛其中。
            </p>
            <div className="flex items-center justify-center gap-2 text-center text-normal font-bold md:text-xl">
              <span>——</span>
              <span>在這樣一個開放的年代，為什麼好像變得不再自由？</span>
              <span>——</span>
            </div>
            <p className="brightness-90">
              作為學生，我們處在一個迷惘卻充滿熱血的年紀，可以試圖去尋找社會中的裂隙，並透過「自我覺察」來建立屬於自己的價值觀與信念。無論是發掘在螢幕後方的我們，被社群媒體影響的同時遺漏了什麼；或是如何不為了合群或符合社會期待，而去隱藏自己的真實想法以此從眾；甚至是勇敢地成為先鋒，以資訊結合不同領域，打造出多元化的社群生態。讓我們帶著自我覺察的心，去開創一條屬於這個時代的逃逸路線。
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-7">
            <Section title="關於 SITCON" subtitle="About SITCON">
              <p>
                學生計算機年會（Students’ Information Technology Conference）自
                2012
                年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
              </p>
            </Section>
            <Section title="行為準則" subtitle="Code of Conduct">
              <p>
                SITCON
                歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加
                SITCON，我們要求所有參與者閱讀年會的{" "}
                <Link
                  target="_blank"
                  href="https://sitcon.org/code-of-conduct/"
                  className="link"
                >
                  行為準則（Code of Conduct）
                </Link>{" "}
                ，共同創造一個友善的環境。
              </p>
            </Section>
            <Section title="參與討論" subtitle="Join the community">
              <p>
                SITCON
                是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
                SITCON
                的郵件論壇並貢獻你的想法，如果想成為明年年會的籌備團隊，也可以填寫跳坑表單，我們會在明年年會開始籌備時通知你！
              </p>
              <p>
                若你想進一步了解 SITCON 年會籌備與討論的內容，歡迎到{" "}
                <Link
                  href={"https://gitlab.com/sitcon-tw/2025/board/-/boards"}
                  className="link"
                >
                  GitLab
                </Link>{" "}
                上查看 SITCON 2025 的籌備歷程。
              </p>
            </Section>
          </div>
          <div className="my-10 flex flex-col justify-end gap-5 md:flex-row">
            <LinkButton
              link="https://forms.gle/rr93tuxJ9m9uStDf9"
              target="_blank"
              text="預約跳坑表單"
            />
            <div className="flex gap-5">
              <LinkButton
                link="https://groups.google.com/g/sitcon"
                target="_blank"
                text="郵件論壇"
                className="w-full md:w-auto"
              />
              <LinkButton
                link="https://gitlab.com/sitcon-tw/2025/board/-/boards"
                text="查看 GitLab"
                target="_blank"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="mt-10 flex flex-col gap-5">
        <h2 className="text-h1-mobile font-bold md:text-h1">{title}</h2>
        <h3 className="text-h3-mobile md:text-h3">{subtitle}</h3>
      </div>
      <div className="font-normal">{children}</div>
    </>
  );
}
