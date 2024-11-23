"use client";
import Link from "next/link";
export default function CodeOfConduct() {
  return (
    <>
      <section
        id="code-of-conduct"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          CODE OF CONDUCT
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          SITCON
          歡迎不同身分、來自不同背景的與會者，我們鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快地參加
          SITCON，我們要求所有參與者閱讀年會的{" "}
          <Link
            target="_blank"
            href={"https://sitcon.org/code-of-conduct/"}
            className="text-primary underline underline-offset-2"
          >
            行為準則（Code of Conduct）
          </Link>
          ，共同創造一個友善的環境。
        </p>
      </section>
    </>
  );
}
