import Link from "next/link";
import Image from "next/image";

import TicketSvg from "@/public/website/ticket.svg";
import LinkButton from "../../_components/linkButton";

export default function Page() {
  return (
    <div className="flex flex-col items-start justify-center gap-24">
      <section id="RegisterInfo" className="flex flex-col items-start gap-4">
        <h1 className="text-h1-mobile font-bold md:text-h1">報名資訊</h1>
        <p className="w-full leading-[200%] md:w-[80%]">
          SITCON
          年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助，若您也認同
          SITCON 的理念，歡迎支持我們。
        </p>
        <LinkButton
          link="https://sitcon.org/donate"
          text="支持我們"
          target="_blank"
          className="mb-10"
        />
        {/* ticket 1 */}
        <div className="box-border flex w-full flex-col items-center justify-between rounded-xl border-white bg-background-light px-2 py-10 md:flex-row md:rounded-none md:border md:px-0 md:py-0">
          <div className="z-10 ml-[-1px] box-border hidden aspect-1/2 rounded-br-full rounded-tr-full border border-l-transparent border-r-white bg-background md:block md:w-1/12" />
          <div className="flex flex-col items-center justify-center md:w-3/12 md:py-10">
            <Image
              src={TicketSvg.src}
              alt="ticket Icon"
              width={120}
              height={120}
            />
            <p className="mt-8 text-h3-mobile font-bold md:text-h3">一般票</p>
          </div>

          <div className="flex flex-col items-center justify-center py-4 md:w-4/12 md:py-10">
            <ul className="w-[80%] list-inside list-disc text-normal-mobile leading-[200%] md:text-start md:text-normal">
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                第一波售票：01/12 20:00 ～01/25 23:59
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                第二波售票：02/09 20:00 ～02/22 23:59
              </li>
            </ul>
            <LinkButton
              link={"/2025/website/ticket_dates.ics"}
              target="_blank"
              text="加入行事曆"
              className="mt-8 bg-[#9c9c9c] text-[#ffffff] hover:brightness-90 md:w-full md:bg-[#ffffff] md:text-background-light"
            />
            {/* <button className="mt-8 w-full rounded-full bg-[#9c9c9c] p-3 text-normal font-semibold text-[#ffffff] md:bg-[#ffffff] md:text-background-light"> */}
            {/* 加入行事曆 */}
            {/* </button> */}
          </div>
          <div className="flex h-full justify-center md:w-1/12">
            <div className="dashLine" />
          </div>
          <div className="mt-4 flex items-center justify-center md:w-2/12">
            <LinkButton
              link={"https://sitcon.kktix.cc/events/sitcon2025"}
              target="_blank"
              text="售票截止"
              className="ml-[-4px] md:mr-4 md:w-full"
            />
          </div>
          <div className="right-0 z-10 mr-[-1px] box-border hidden aspect-1/2 rounded-bl-full rounded-tl-full border border-l-white border-r-background bg-background md:block md:w-1/12" />
        </div>
        {/* ticket 2 */}
        <div className="box-border flex w-full flex-col items-center justify-between rounded-xl border-white bg-background-light px-2 py-10 md:flex-row md:rounded-none md:border md:px-0 md:py-0">
          <div className="z-10 ml-[-1px] box-border hidden aspect-1/2 rounded-br-full rounded-tr-full border border-l-transparent border-r-white bg-background md:block md:w-1/12" />
          <div className="flex flex-col items-center md:w-3/12 md:py-10">
            <span className="material-symbols-outlined mt-16 scale-[600%] text-[#ffffff]">
              flight
            </span>
            <p className="mt-20 text-h3-mobile font-bold md:text-h3">
              遠道而來票
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-4 md:w-4/12 md:py-10">
            <ul className="w-[80%] list-inside list-disc text-normal-mobile leading-[200%] md:text-start md:text-normal">
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                資格限制：住在偏鄉或離島、海外地區的學生。
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                先到先審制，報名者需在 2025/01/21 23:59 前填寫申請表單。
              </li>
            </ul>
          </div>
          <div className="flex h-full justify-center md:w-1/12">
            <div className="dashLine" />
          </div>
          <div className="mt-4 flex items-center justify-center md:w-2/12">
            <LinkButton
              link={"https://hackmd.io/@SITCON/H18WacxQ1x"}
              target="_blank"
              text="申請截止"
              className="ml-[-4px] md:mr-4 md:w-full"
            />
          </div>

          <div className="right-0 z-10 mr-[-1px] box-border hidden aspect-1/2 rounded-bl-full rounded-tl-full border border-l-white border-r-background bg-background md:block md:w-1/12" />
        </div>
        {/* ticket 3 */}
        <div className="box-border flex w-full flex-col items-center justify-between rounded-xl border-white bg-background-light px-2 py-10 md:flex-row md:rounded-none md:border md:px-0 md:py-0">
          <div className="z-10 ml-[-1px] box-border hidden aspect-1/2 rounded-br-full rounded-tr-full border border-l-transparent border-r-white bg-background md:block md:w-1/12" />
          <div className="flex flex-col items-center justify-center md:w-3/12 md:py-10">
            <span className="material-symbols-outlined mt-16 scale-[600%] text-[#ffffff]">
              crowdsource
            </span>
            <p className="mt-20 w-[90%] text-center text-h3-mobile font-bold md:text-h3">
              SITCON x OSCVPass 開源貢獻票
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-4 md:w-4/12 md:py-10">
            <ul className="w-[80%] list-inside list-disc text-normal-mobile leading-[200%] md:text-start md:text-normal">
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                資格限制：對開源專案有貢獻者。
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                在 2025/01/21 23:59 前申請且通過者，有機會可以搶到 SITCON 2025
                開源貢獻票邀請碼。申請表單、申請資格及更詳細的申請說明，請參考
                <Link
                  className="link"
                  href={"https://ocf.tw/p/oscvpass/"}
                  target="_blank"
                >
                  開源貢獻者快速通關
                </Link>
              </li>
              <li className="listItem mt-4 md:mt-0 md:pl-[-22px]">
                關於歷年來 OSCVPass 申請通過者的專案列表，請參考{" "}
                <Link
                  className="link"
                  href={
                    "https://oscvpass.ocf.tw/?fbclid=IwAR0sFst9sZwPoLKRUwzOIpg-M_V7gZSZu3lvStcV3rqpRnZKjT6A1pl2nRU"
                  }
                  target="_blank"
                >
                  OSCVPass 專案介紹
                </Link>{" "}
                。
              </li>
            </ul>
          </div>
          <div className="flex h-full justify-center md:w-1/12">
            <div className="dashLine" />
          </div>
          <div className="mt-4 flex items-center justify-center md:w-2/12">
            <LinkButton
              link={"https://ocf.tw/p/oscvpass/"}
              target="_blank"
              text="申請截止"
              className="ml-[-4px] md:mr-4 md:w-full"
            />
          </div>
          <div className="right-0 z-10 mr-[-1px] box-border hidden aspect-1/2 rounded-bl-full rounded-tl-full border border-l-white border-r-background bg-background md:block md:w-1/12" />
        </div>
      </section>
      <section
        id="SubmitInfo"
        className="flex w-full flex-col items-start gap-4 leading-[200%] md:w-[80%]"
      >
        <h1 className="mb-8 text-h1-mobile font-bold md:text-h1">投稿資訊</h1>
        <p className="">
          SITCON
          作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。
          不論是探討技術或輕鬆的分享，任何與資訊科技、電腦技術相關的講題，我們都非常歡迎。
        </p>
        <p>SITCON 2025 預計徵求三種形式的稿件：</p>
        <li>
          一般議程：SITCON 2025 邀請您將您的精彩經歷以 Presentation 與 Espresso
          兩種形式呈現。Presentation 想邀請您用 40
          分鐘深入分享一個專案、技術或有趣的經歷，而 Espresso 則想挑戰您在 10
          分鐘內精練的介紹一個主題的能力。無論是技術或經驗的分享，都歡迎投稿一般議程。
        </li>
        <li>
          開放式議程：如果您想呈現的主題更加獨特、創新，想跳脫講者對聽眾單向陳述式的演講，那開放式議程會是你的最好選擇！想帶一個實作的工作坊、和其他與會者一同討論特定議題、邀請社群的夥伴彼此分享經驗，或想以任何形式增加議程多元與互動性的稿件，都歡迎來挑戰開放式議程。今年開放式議程也提供
          40 或 90 分鐘兩種時長，提供您更彈性的呈現方式。
        </li>
        <li>
          海報展：海報展希望以靜態海報呈現您個人或團隊的專案或研究成果，作品只要以資訊相關領域為主，不限語言都歡迎投稿。我們期望透過此方式讓更多學生能有展現自我的機會，同時為會眾帶來不同形式的學習與交流。海報展也能讓您有和與會者直接針對您的作品互動的機會，如果希望作品能得到更多回饋，歡迎投稿海報展！
        </li>
        <LinkButton
          text="了解更多"
          className="leading-normal"
          link={"https://sitcon.org/2025/cfp"}
          target="_blank"
        />
      </section>
    </div>
  );
}
