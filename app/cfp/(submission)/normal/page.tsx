import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";
import CodeOfConduct from "../../_components/code-of-conduct";
import TableOfContent from "../_components/table-of-content";
import FAQ from "../../_components/faq";
import Espresso from "../../_components/logos/espresso";
import Presentation from "../../_components/logos/presentation";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

function PresentationBlock(presentation: { title: string; id: string }) {
  return (
    <Link
      target="_blank"
      href={`https://youtu.be/${presentation.id}`}
      className="flex flex-col gap-2 rounded-lg bg-background-light p-3 transition hover:brightness-125"
    >
      <Image
        src={`https://img.youtube.com/vi/${presentation.id}/maxresdefault.jpg`}
        alt={presentation.title}
        width={1280}
        height={720}
      />
      <span>{presentation.title}</span>
    </Link>
  );
}

export default function Page() {
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "議程種類" },
    { id: "submission-topics", title: "投稿主題範例" },
    { id: "submission-format", title: "投稿格式" },
    { id: "review-process", title: "審稿方式" },
    { id: "code-of-conduct", title: "Code of Conduct" },
    { id: "submission-guidelines", title: "投稿注意事項" },
    { id: "license", title: "授權" },
    { id: "practice-talk", title: "試講" },
    { id: "rehearsal", title: "彩排" },
    { id: "qa", title: "Q & A" },
  ];

  const presentations = [
    {
      title: "比 Python 更人性化 - 圖形化程式語言 Grapycal",
      url: "https://sitcon.org/2024/agenda/fbe417/",
      id: "J5LY0iXIfjI",
    },
    {
      title: "教練我想打 Code！為甚麼要學計組和 OS？",
      url: "https://sitcon.org/2022/agenda/82b1c6",
      id: "wHWjPbD0ZaE",
    },
    {
      title: "那些在德國 37C3 的經驗談：啤酒、馬黛茶、混亂",
      url: "https://sitcon.org/2024/agenda/53292d/",
      id: "BupcDzMkHd4",
    },
    {
      title: "超越文字的力量：大型語言模型的能力與缺陷",
      url: "https://sitcon.org/2024/agenda/ecfb2c/",
      id: "JGgZTngrJB4",
    },
    {
      title: "想自己辦活動或比賽嗎？那先來看看我們吧！",
      url: "https://sitcon.org/2022/agenda/9109ae",
      id: "_ShwBPzj_XU",
    },
    {
      title: "Windows 系統安全這麼複雜怎麼學",
      url: "https://sitcon.org/2022/agenda/6362cd",
      id: "zOGGMS84mzU",
    },
    {
      title: "身為學生，做研究也要拿出真本事",
      url: "https://sitcon.org/2022/agenda/44d2d0",
      id: "SbIPLs8q91Q",
    },
    {
      title: "第一次做密室逃脫就上手",
      url: "https://sitcon.org/2020/agenda/bdcf60d1-4ea7-4485-bc64-a6252eabc19f",
      id: "1gFBx16AlMc",
    },
    {
      title: "網路維運，在台灣怎麼玩？打造全台最大家用網路！",
      url: "https://sitcon.org/2021/agenda/3fe74d93-2ab5-4c42-8b49-b5b92973f4aa",
      id: "paJ0AlW6h-I",
    },
    {
      title: "從學校到業界，工程師作為職業的現實",
      url: "https://sitcon.org/2019/agenda/7a67f4fb-b6f4-4595-b9af-527b3024c8f8",
      id: "qYxdomoMEf8",
    },
    {
      title: "奔跑吧！台北：遊戲開發經驗分享",
      url: "https://sitcon.org/2018/#/agenda/sub/d946b6e1-d826-4c64-86a4-bf013bcc0c06",
      id: "85bW97XI4i0",
    },
    {
      title: "關於 CTF 的那些事",
      url: "https://sitcon.org/2021/agenda/7a88857e-7d50-4d9c-a656-2d99feef6198",
      id: "_lNPRlt6c2E",
    },
  ];

  const espressos = [
    {
      title: "格鬥遊戲 AI 開發經驗談",
      id: "ryLLzSwQ54w",
    },
    {
      title: "PHP 是世界上最棒的語言，但我做了一個比它更棒的！",
      url: "https://sitcon.org/2021/agenda/bb826e6d-8544-4101-8811-13032bd9a4fd",
      id: "y3EM5GHigTY",
    },
    {
      title: "科技藝術入門 - 淺談 p5.js",
      url: "https://sitcon.org/2024/agenda/f01c4f/",
      id: "TDlfRf18MM8",
    },
    {
      title: "喜歡打街機？做一台放家裡打r",
      url: "https://sitcon.org/2021/agenda/2b210726-c5b0-4094-a591-fccb51f0ee55",
      id: "I07gX4YlYrE",
    },
    {
      title: "我也能讓 Python 幫忙操控電腦嗎？",
      url: "https://sitcon.org/2020/agenda/32ba951d-3cfb-4461-ae6a-5ddbab693b8b",
      id: "MfiKAOBrPpk",
    },
    {
      title: "創造真正的專家：專有領域的語言模型案例介紹",
      url: "https://sitcon.org/2024/agenda/819758/",
      id: "xsrWCelvfyI",
    },
    {
      title: "深度學習如何深度學習",
      url: "https://sitcon.org/2018/#/agenda/sub/f3c6853d-2b0e-464c-8837-9411455961d8",
      id: "H5o5Oa_nbqs",
    },
    {
      title: "平行程式設計：讓 GoAccess 性能提升 x3.6 倍",
      url: "https://sitcon.org/2024/agenda/90acce/",
      id: "RQR55V3gk-A",
    },
    {
      title: "你所不知道的維基 - Wikidata",
      url: "https://sitcon.org/2019/agenda/7959ab0b-cdfa-40bc-8566-099477abb195",
      id: "kD-jGfDZGGo",
    },
    {
      title: "淺談社會網路分析",
      url: "https://sitcon.org/2019/agenda/f60637a1-0ccb-4c02-b1b0-be7a6a393d87",
      id: "GFfaD-kVe_A",
    },
  ];

  const QA = [
    {
      title: "「先備知識」與「目標受眾」有何不同？",
      answer:
        "「目標受眾」表示您預期何種人將會前來參與該場議程，此欄位可能表示為與會者的興趣、生活環境抑或年齡層。「先備知識」表示對該議程有興趣者，您建議須先備哪些基礎技術、能力或經驗，有助於了解與吸收該場議程的知識精華。舉例而言，若一講題為「在營隊中使用虛擬貨幣」，則先備知識可能是「沒有」，目標受眾可能是「有想要辦營隊的人」。而如果是有關 Julia 程式語言的演講，則先備知識可能是「知道平行運算是什麼」，目標受眾可能是「想用 Julia 做資料科學的人」。",
    },
    {
      title: "投稿主題是否有必要切合年會主題？",
      answer:
        "不用。審稿時僅會依照上文所述標準審查，不會因為呼應主題就拿到比較高分，或因為與主題無關就被扣分。",
    },
    {
      title: "還有疑問怎麼辦？",
      answer: (
        <p>
          歡迎寄信至{" "}
          <Link
            href="mailto:contact@sitcon.org"
            className="cursor-pointer text-primary underline"
          >
            contact@sitcon.org
          </Link>{" "}
          詢問，我們會儘速回應。
        </p>
      ),
    },
  ];

  return (
    <div className="py-8 text-normal-mobile md:text-normal">
      <h1 className="mb-4 text-h1-mobile font-extrabold md:text-h1">
        一般議程投稿
      </h1>
      <TableOfContent
        theme="light"
        sections={sections}
        submitUrl="https://forms.gle/rb5kuP1CCrzodKJs9"
      />

      <Countdown />

      <section
        id="important-dates"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          重要時程
        </h2>
        <Timeline isPoster={false} />
      </section>

      <section
        id="session-types"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          議程種類
        </h2>
        <div className="mb-6 mt-4 grid grid-rows-2 gap-3 lg:grid-cols-2 lg:grid-rows-1">
          <div className="md:background-light flex flex-col items-center gap-3 rounded-lg bg-background-light p-6 text-foreground">
            <Presentation />
            <h3 className="text-h3-mobile md:text-h3">Presentation</h3>
            <p>
              Presentation{" "}
              <span className="subTitle hightlight">共 40 分鐘</span> ，包含完整
              30 分鐘的議程與 10
              分鐘的問答時間，讓您有充分的時間展示想法、描述經歷、和與會者交流。
            </p>
          </div>
          <div className="md:background-light flex flex-col items-center gap-3 rounded-lg bg-background-light p-6 text-foreground">
            <Espresso />
            <h3 className="text-h3-mobile md:text-h3">Espresso</h3>
            <p>
              Espresso{" "}
              <span className="subTitle hightlight">僅有 10 分鐘 </span>
              ，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。
            </p>
          </div>
        </div>
      </section>
      <section
        id="submission-topics"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿主題範例
        </h2>
        <div className="leading-10">
          <p>
            SITCON
            作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。
          </p>
          <p className="leading-10">
            不論是以技術探討形式，或輕鬆的分享方式，任何與資訊科技、電腦技術相關的講題，我們都非常歡迎投稿！
          </p>
          <p>
            除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（
            {[
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
              "2024",
            ]
              .toReversed()
              .map((year, index) => (
                <span key={year}>
                  <Link className="link" href={`https://sitcon.org/${year}`}>
                    {year}
                  </Link>
                  {<span>{index == 10 ? "" : "、"}</span>}
                </span>
              ))}
            ）查看過去的議程。
          </p>
          <p className="leading-10">
            以下是我們選出以往的優良議程，提供給您參考：
          </p>
        </div>
        <div className="py-4">
          <h3 className="my-4 text-h3-mobile font-bold text-primary md:text-h3">
            PRESENTATION
          </h3>
          <p className="leading-10">
            Presentation 包含完整
            <span className="hightlight"> 30 </span>分鐘的議程與
            <span className="hightlight"> 10 </span>
            分鐘的問答時間，共 <span className="hightlight"> 40 </span>
            分鐘，讓您有充分的時間展示想法、描述經歷、和與會者交流。
          </p>
          <div className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {presentations.map((item) => (
              <PresentationBlock
                key={item.id}
                id={item.id}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="py-4">
          <h3 className="my-4 text-h3-mobile font-bold text-primary md:text-h3">
            ESPRESSO
          </h3>
          <p className="leading-10">
            Espresso 僅有 <span className="hightlight"> 10 </span>
            分鐘，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。
          </p>
          <div className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {espressos.map((item) => (
              <PresentationBlock
                key={item.id}
                id={item.id}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="submission-format" className="-mt-[60px] pt-[80px] md:mb-16">
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿格式
        </h2>
        <p className="leading-10">
          Presentation 與
          Espresso的投稿格式相同，除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。
        </p>
        <h3 className="my-4 text-h3-mobile font-bold text-primary md:text-h3">
          稿件資訊
        </h3>
        <div className="grid grid-cols-2 gap-8">
          <InformationField title="投稿類型 Type" tags={["required", "public"]}>
            請寫明所欲投稿為何種議程類型（Presentation、Espresso）。
          </InformationField>
          <InformationField title="題目 Title" tags={["required", "public"]}>
            請不要超出<span className="subTitle hightlight"> 20 </span>
            字，題目無須與年會主題相關。
          </InformationField>
          <InformationField
            title="摘要 Abstract："
            tags={["required", "public"]}
          >
            <span className="hightlight subTitle"> 150~250 </span>
            字，使用於宣傳與網站公告。
          </InformationField>
          <InformationField title="演講大綱 Outline" tags={["required"]}>
            請說明議程的內容大綱與時間分配。若為多位講者共同分享，請說明各個講者如何分配演講內容。
          </InformationField>
          <InformationField
            title="目標受眾 Target Audience"
            tags={["required"]}
          >
            請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「欲精進某技能的後端工程師」等。在這邊為您提供過往的會眾比例：大學生
            58%、高中/職生 22%、社會人士 8%、研究生 11%、國中生 1%
          </InformationField>
          <InformationField
            title="先備知識 Prior Knowledge"
            tags={["required", "public"]}
          >
            請說明該議程的與會者所需具備的{" "}
            <span className="subTitle hightlight">先備知識</span> 例如：「能理解
            Python 基礎語法」、「能熟練運用 Class 與 OOP」等。
          </InformationField>
          <InformationField
            title="主題標籤 Labels"
            tags={["required", "public"]}
          >
            請填寫 1~4 個該議程相關的{" "}
            <span className="hightlight subTitle">領域與知識標籤</span>{" "}
            例如：ML、Data
            Science、資安紅隊、blockchain、社團等；審稿委員將會參考此欄位了解件著重的面向，錄取後議程組也會參考此欄位，在與您溝通後挑選合適的標籤呈現於官網議程表上。
          </InformationField>
          <InformationField title="詳細說明 Description" tags={["required"]}>
            不限字數，請盡可能{" "}
            <span className="hightlight subTitle">詳細說明</span>{" "}
            這個議程的相關細節，如議程架構、想傳達的內容及您認為可能可以說服審稿委員選擇您的稿件之資訊等，以利審稿委員更瞭解您的議程及想法。
          </InformationField>
          <InformationField title="附件 Attachment" tags={["optional"]}>
            可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。
          </InformationField>
        </div>
        <h3 className="my-4 text-h3-mobile font-bold text-primary md:text-h3">
          個人資料
        </h3>
        <p className="mb-2 mb-7 leading-10">
          除了暱稱 /
          名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
        </p>
        <div className="flex flex-col gap-8">
          <InformationField title="電子郵件 Email" tags={["required"]}>
            能讓大會聯絡的電子信箱。（注意：請您在大會的聯絡過程中，維持使用相同信箱）
          </InformationField>
          <InformationField
            title="暱稱 / 名字 Name"
            tags={["required", "public"]}
          >
            公開於講者海報及網站的稱呼。
          </InformationField>
          <InformationField
            title="自我介紹 Self Introduction"
            tags={["required", "public"]}
          >
            公開於講者海報及網站，將有助於會眾更加了解有關你的資訊。
          </InformationField>

          <InformationField title="手機號碼 Phone" tags={["required"]}>
            用於大會聯絡、確認資訊用的電話號碼。
          </InformationField>
          <InformationField
            title="其他聯絡方式 Other Contact Information"
            tags={["required"]}
          >
            其他任何我們能聯絡您的方式（如 Telegram
            ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
          </InformationField>
        </div>
      </section>
      <section id="review-process" className="-mt-[60px] pt-[80px] md:mb-16">
        <h2 className="my-4 text-h2-mobile font-extrabold text-primary md:text-h2">
          審稿方式
        </h2>
        <p className="my-4 leading-10">
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
          工作人員、業界人士及學界人士組成。
        </p>
        <p>審稿委員將針對以下項目進行篩選：</p>
        <ul className="list-inside list-disc leading-10">
          <li className="listItem">
            <span className="subTitle hightlight">稿件內容：</span>
            知識分享、經驗案例、想法觀點是否獨特等。
          </li>
          <li className="listItem">
            <span className="subTitle hightlight">表達能力：</span>
            提供的資料是否有條理、文句暢通，以及提供資料之完整度。完整的資料能讓審稿委員更清楚了解演講細節。
          </li>
          <li className="listItem">
            <span className="subTitle hightlight">適合聽眾：</span>稿件是否適合
            SITCON
            大多數的與會者。經我們評估比較熱門的議程，將安排在較大的演講廳。
          </li>
        </ul>
      </section>

      <CodeOfConduct />

      <section
        id="submission-guidelines"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿注意事項
        </h2>
        <div>
          <ul className="list-inside list-disc leading-10">
            <li className="listItem">
              除非內容明顯偏離講題、違反 CoC
              或不符事實，我們不會強制要求講者對演講內容進行修正。
            </li>
            <li>在截稿之前，投稿者可以隨時透過表單回函修改已送出的稿件。</li>
            <li className="listItem">
              審稿過程
              <span className="hightlight subTitle">不考慮稿件內容的難度</span>
              。我們以稿件是否能夠吸引人、高品質、適合聽眾為考量。
            </li>
            <li className="listItem">
              若 SITCON
              議程組認為您的稿件比較適合另一種形式，或者該形式的名額已經額滿、無法再增額時」更正為「若審稿委員認為您的稿件比較適合其他形式，且原形式名額已經額滿、無法再增額時
            </li>
            <li className="listItem">
              SITCON 2025
              將會有多軌議程及各式場外活動同時進行，與會者可以自行決定要參與哪一場議程或活動。
            </li>
            <li className="listItem">
              為鼓勵投稿，大會
              <span className="hightlight subTitle">
                提供投稿者一組報名邀請碼
              </span>
              （一稿一組，每人最多一組），可優先報名參與本年會。若您的稿件被接受，年會將頒予感謝狀以表彰您的熱情付出與貢獻，並額外提供講者身分入場，屆時您可以將年會邀請碼贈與他人使用，邀請親朋好友共襄盛舉。
            </li>
            <li className="listItem">
              若同一稿件有多個講者，請在「暱稱 /
              名字」欄位標示所有講者的稱呼，並在「演講大綱」詳細說明各個講者如何分配演講內容。稿件經接受者，無論講者人數，皆只提供一組可轉贈的入場票邀請碼、一份講者識別證與一份講者專屬迎賓禮，大會方保有最終發放之權力。未佩戴識別證的講者，僅能在自己的演講時，於該議程時段進入議程所在的會議廳。
            </li>
          </ul>
          <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
            若有任何問題或投稿建議，請來信 SITCON 議程組信箱{" "}
            <Link
              href="mailto:contact@sitcon.org"
              className="cursor-pointer text-primary underline"
            >
              <span className="hightlight subTitle">contact@sitcon.org</span>
            </Link>{" "}
            。
          </p>
        </div>
      </section>

      <section
        id="license"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          授權
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          今年將採取實體與線上同步之模式進行，除開放式議程外，年會當天將對每一場議程進行直播串流。如果您同意以
          <Link
            href={"https://creativecommons.org/licenses/by/4.0/deed.zh-hant"}
            className="hightlight subTitle underline underline-offset-2"
          >
            {" "}
            創用 CC「姓名標示」4.0{" "}
          </Link>
          授權釋出議程錄影，我們將會上傳至
          <Link
            href={"https://sitcon.org/yt"}
            className="hightlight subTitle underline underline-offset-2"
          >
            {" "}
            YouTube{" "}
          </Link>
          及
          <Link
            href={"https://odysee.com/@SITCON:f"}
            className="hightlight subTitle underline underline-offset-2"
          >
            {" "}
            LBRY{" "}
          </Link>
          的 SITCON 頻道。{" "}
        </p>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          您為議程準備的其餘相關素材（如投影片），將於年會前由 SITCON
          議程組向您蒐集素材連結，並整理在年會官方網站的議程資訊上。您可以自行決定在何種平台、以何種方式釋出，我們不會干涉，但鼓勵您選擇允許知識共享的
          <Link
            href={"https://creativecommons.org/licenses/by/4.0/deed.zh-hant"}
            className="hightlight subTitle underline underline-offset-2"
          >
            {" "}
            創用 CC 系列授權。{" "}
          </Link>
        </p>
        <div className="py-1" />
      </section>

      <section
        id="practice-talk"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          試講
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          試講提供講者提升演講品質的機會，比照年會時間安排供講者講完整場演講，
          <span className="hightlight subTitle">
            並有工作人員提供建議（如簡報、臺風等）
          </span>
          ，講者可以自由參加，並自行選擇最合適的場次。若您的稿件確認入選，議程組將再與您協調確切時間。為維護所有講者的權利，試講時間恕不接受更改，請您準時參與。
        </p>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          所有場次將依報名情況舉辦，預計舉辦北部、中部、南部、線上場等，時間約為二月上旬至二月下旬，地點另行通知。
        </p>
        <div className="rounded-2xl border border-light-brown p-4">
          <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
            試講交通補助：為確保年會議程品質，大會鼓勵講者參與試講，並將依照客運價格標準，補助講者至最近試講場地的全額或部分車資。屆時若有需要，請保留試講當天的乘車票據，並於
            3/8（六）年會當天繳交給工作人員。{" "}
          </p>
        </div>
      </section>

      <section
        id="rehearsal"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          彩排
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          本屆 SITCON
          將在年會前一天提供入選講者彩排的機會。彩排能讓講者熟悉現場設備環境、攝影機位置，並且測試
          Live Demo 情境。希望講者能夠共同參與彩排，一起使年會議程品質更臻完美。
        </p>
        <ul className="leading-10">
          <li className="">日期：2025 年 3 月 7 日（五）。</li>
          <li className="">場地：議程廳與年會相同，細節將於稿件錄取後通知。</li>
          <li className="">
            時間：一人約 5~10 分鐘。若有 Live Demo
            或特殊需求，可提前與議程組安排時間。
          </li>
          <li className="">
            流程：講者操作設備，測試 Live Demo
            連結及切換方式，也可以演練部分簡報內容。
          </li>
          <li className="">
            提供設備：與年會當天場地的設備相同，例如麥克風、倒數計時器等。
          </li>
        </ul>
      </section>

      <FAQ QA={QA} />
    </div>
  );
}

export function InformationField({
  title,
  tags,
  children,
}: {
  title: string;
  tags: Array<keyof typeof tagClassMap>;
  children: ReactNode;
}) {
  const tagClassMap = {
    required: "必填",
    optional: "選填",
    public: "公開",
  };

  const titleChinese = title.split(" ")[0];
  const titleEnglish = title.split(" ")[1];

  return (
    <div className="relative flex flex-col gap-2 rounded-2xl bg-background-light p-4">
      <div className="items-left flex flex-col">
        <span className="text-3xl font-bold leading-9 text-secondary">
          {titleChinese}
        </span>
        <span className="text-lg font-medium leading-9 text-secondary">
          {titleEnglish}
        </span>
      </div>
      <div className="absolute right-3 top-5 gap-2">
        {tags.map((tag) => (
          <span key={tag} className={`ml-2 rounded-lg px-3 py-1 ${tag || ""}`}>
            {tagClassMap[tag]}
          </span>
        ))}
      </div>
      <div className="leading-10">{children}</div>
    </div>
  );
}
