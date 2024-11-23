import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";
import CodeOfConduct from "../../_components/code-of-conduct";
import TableOfContent from "../_components/table-of-content";
import FAQ from "../../_components/faq";
import Link from "next/link";
import { InformationField } from "../normal/page";

export default function Page() {
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "議程說明" },
    { id: "what-is-open-session", title: "什麼是開放式議程？" },
    { id: "submission-topics", title: "投稿方式" },
    { id: "review-process", title: "審稿方式" },
    { id: "code-of-conduct", title: "Code of Conduct" },
    { id: "submission-guidelines", title: "投稿注意事項" },
    { id: "license", title: "授權" },
    { id: "practice-talk", title: "試講" },
    { id: "rehearsal", title: "彩排" },
    { id: "qa", title: "Q & A" },
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
        開放式議程投稿
      </h1>
      <TableOfContent
        sections={sections}
        theme="light"
        submitUrl="https://forms.gle/W9WXdqRjV8zbcMfE6"
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
          議程說明
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          開放式議程為<span className="hightlight"> 40 </span> 分鐘和
          開放式議程為<span className="hightlight"> 90 </span> 分鐘兩種時長
        </p>
      </section>
      <section
        id="what-is-open-session"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          什麼是開放式議程？
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          為帶給與會者更多元的議程內容，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾單向陳述式的演講，開放式議程更加強調主講者和與會者的雙向交流。SITCON
          作為學生展現自己的舞台，我們期待以學生為主體的投稿，無論是實作工作坊、議題交流、社群分享或更多您想像得到能讓議程更加多元且具互動性的方式，我們都十分歡迎。
        </p>
        <div className="flex grid-rows-4 flex-col gap-5 tablet:grid tablet:grid-cols-2 tablet:grid-rows-2">
          <SessionTypeBox title="實作工作坊形式">
            實作是學習一項新技能最直接的方式，您可以設計一個實務導向的工作坊，在介紹新技術的同時穿插應用的範例，讓會眾在過程中獲得成就感並帶走實用的技能。無論是軟體開發、工具使用，還是技術應用實作工作方的題目可以像是：
            從零開始開發一個簡單的聊天應用程式。 從數位音樂到 AI
            視覺藝術的創意應用。
          </SessionTypeBox>
          <SessionTypeBox title="議題交流形式">
            知識的交流不只受限於於演講，資訊發展快速，卻也延伸出許多可以深入討論的議題，我們期待透過講者的引言，拋磚引玉，激發聽眾的想法，透過多方觀點的交流，聽眾可以理解不同看法，進而發現新的思考方向。
            例如： 人工智慧是否會有自我意識？ 隱私權與數據共享如何找到平衡點？
          </SessionTypeBox>
          <SessionTypeBox title="社群分享形式">
            社群的力量在於凝聚志同道合的人，講者可以分享社群運營經驗，無論是分享如何推廣技術還是組織活動的秘訣，透過經驗分享，探討如何打造互助的社群環境，或介紹該社群所推廣的技術、理念與特色，讓更多人對此產生興趣。例如：
            如何吸引新手加入開源社群？ 如何帶領社群成員認識資料科學？
          </SessionTypeBox>
          <SessionTypeBox title="更多形式由您來創造">
            不只有上述的形式，我們非常歡迎其他形式的議程。
            無論是主持一場圓桌會議，一起腦力激盪，甚至舉辦一場小競賽，任何你想得到的非傳統議程形式都可以在開放式議程中進行！
          </SessionTypeBox>
        </div>
      </section>

      <section
        id="submission-topics"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿方式
        </h2>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            稿件資訊
          </h3>
          <div className="grid grid-cols-2 gap-3 max-[1024px]:grid-cols-1">
            <InformationField title="題目 Title" tags={["required", "public"]}>
              請不要超出<span className="hightlight subTitle"> 20 </span>字。
            </InformationField>
            <InformationField
              title="摘要 Abstract"
              tags={["required", "public"]}
            >
              建議<span className="hightlight subTitle"> 150~250 </span>
              字，使用於宣傳與網站公告。
            </InformationField>
            <InformationField
              title="為何選擇開放式議程 Format Preference Explanation"
              tags={["required"]}
            >
              請簡述為什麼您認為開放式議程更適合此議程的內容或主題呈現。這部分可以包括您希望透過開放式議程達成的效果、氣氛或參與方式，以便審稿委員理解您的設計考量。
            </InformationField>
            <InformationField
              title="進行模式 Method"
              tags={["required", "public"]}
            >
              不限字數，請詳細說明該議程預計如何和會眾互動，以及是否需要額外的工具，此項目將幫助會眾預期該如何參與此議程。
            </InformationField>
            <InformationField title="議程大綱 Outline" tags={["required"]}>
              請說明該開放式議程的大綱及時間長度規劃。
            </InformationField>
            <InformationField
              title="目標受眾 Target Audience"
              tags={["required"]}
            >
              請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「不知道該不該讀研究所的學生」等。
            </InformationField>
            <InformationField
              title="先備知識 Prior Knowledge"
              tags={["required", "public"]}
            >
              請說明該議程的與會者所需具備的{" "}
              <span className="hightlight subTitle">先備知識</span>
              。例如：「能理解 Python 基礎語法」、「略懂 108 課綱現況」等。
            </InformationField>
            <InformationField
              title="主題標籤 Labels"
              tags={["required", "public"]}
            >
              請填寫 1~4 個該議程相關的領域與{" "}
              <span className="hightlight subTitle">知識標籤</span>
              ，例如：ML、Data
              Science、資安紅隊、blockchain、社團等；錄取後會與講者溝通微調後公開於官網議程表。
            </InformationField>
            <InformationField title="詳細說明 Description" tags={["required"]}>
              不限字數，請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。
            </InformationField>
            <InformationField title="附件 Attachment" tags={["optional"]}>
              可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。
            </InformationField>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            個人資料
          </h3>
          <p className="mb-2">
            除了暱稱 /
            名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
          </p>
          <div className="grid grid-cols-2 gap-3 max-[1024px]:grid-cols-1">
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
        </div>
      </section>

      <section
        id="review-process"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          審稿方式
        </h2>
        <p className="text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
          工作人員、業界人士及學界人士組成。
          <br />
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul className="list-inside list-disc leading-10">
          <li className="listItem">
            <span className="hightlight subTitle">稿件內容：</span>
            講者是否熟悉這個題目、和會眾的交流效果、可執行性，以及是否符合開放式議程的宗旨，展現出創新和彈性的分享形式，能促進與會者的參與或啟發新的想法。
          </li>
          <li className="listItem">
            <span className="hightlight subTitle">表達能力：</span>
            提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。
          </li>
          <li className="listItem">
            <span className="hightlight subTitle">適合聽眾：</span>稿件是否適合
            SITCON 大多數的與會者討論。
          </li>
          {/* <li className="listItem">
            <span className="hightlight subTitle"> 議程適切性：</span>
            稿件是否符合開放式議程的宗旨，展現出創新和彈性的分享形式，能促進與會者的參與感或啟發新的想法。
          </li> */}
        </ul>
        <div className="py-1" />
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
              若審稿委員認為您的稿件比較適合其他形式，且原形式名額已經額滿、無法再增額時，我們會向您充分說明與溝通，並經您的同意後，轉換稿件類型或時間長度。
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
            target="_blank"
            href={"https://creativecommons.org/licenses/by/4.0/deed.zh-hant"}
            className="hightlight subTitle underline underline-offset-2"
          >
            {" "}
            創用 CC「姓名標示」4.0{" "}
          </Link>
          授權釋出議程錄影，我們將會上傳至
          <Link
            target="_blank"
            href={"https://sitcon.org/yt"}
            className="hightlight subTitle underline underline-offset-2"
          >
            {" "}
            YouTube{" "}
          </Link>
          及
          <Link
            target="_blank"
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
            target="_blank"
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
          開放式議程的形式較為靈活，我們強烈建議講者參與試講，並在試講中提前演練時間控制、現場互動安排與內容引導。由於開放式議程重視雙向交流和互動環節，建議您設計能促進參與者投入互動的方式，以更流暢地進行議程，例如預先設定討論問題、安排練習或互動環節。試講過程中，工作人員將針對控時、控場等細節提供回饋，協助您調整內容，確保開放式議程在實際呈現時能順利進行並達到最佳效果。
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

function SessionTypeBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between space-y-4 rounded-lg bg-background-light p-6 text-foreground">
      <h3 className="mb-14 text-h3-mobile font-bold md:text-h3">{title}</h3>
      <p className="flex items-end text-normal-mobile font-normal leading-loose tracking-wider md:text-normal">
        {children}
      </p>
    </div>
  );
}
