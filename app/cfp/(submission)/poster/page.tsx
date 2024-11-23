import Link from "next/link";
import Countdown from "../_components/countdown";
import Timeline from "../_components/timeline";
import CodeOfConduct from "../../_components/code-of-conduct";
import TableOfContent from "../_components/table-of-content";
import FAQ from "../../_components/faq";
import { InformationField } from "../normal/page";

export default function Page() {
  const sections = [
    { id: "important-dates", title: "重要時程" },
    { id: "session-types", title: "投稿說明" },
    { id: "submission-topics", title: "投稿方式" },
    { id: "poster-examples", title: "海報格式範例" },
    { id: "review-process", title: "審稿方式" },
    { id: "code-of-conduct", title: "Code of Conduct" },
    { id: "submission-guidelines", title: "投稿注意事項" },
    { id: "license", title: "授權" },
    { id: "poster-upload", title: "海報上傳與佈展" },
    { id: "qa", title: "Q & A" },
  ];

  const QA = [
    {
      title: "是否一定要是學術研究的成果？",
      answer:
        "不用。本次投稿接受各類型的專案展示，包括學術研究及實務應用成果，歡迎學生分享各種形式的內容。",
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
            href="mailto:session@sitcon.org"
            className="cursor-pointer text-primary underline"
          >
            session@sitcon.org
          </Link>{" "}
          詢問，我們會儘速回應。
        </p>
      ),
    },
  ];
  return (
    <div className="py-8 text-normal-mobile md:text-normal">
      <h1 className="mb-4 text-h1-mobile font-extrabold md:text-h1">
        海報徵稿
      </h1>
      <TableOfContent
        sections={sections}
        theme="light"
        submitUrl="https://forms.gle/NDZqhGJBLwvQTgEt8"
      />

      <Countdown />
      <section
        id="important-dates"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          重要時程
        </h2>
        <Timeline isPoster />
      </section>

      <section
        id="session-types"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿說明
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          海報投稿希望以靜態海報呈現學生個人或團隊的專案或研究成果，作品以資訊相關領域為主，不限語言，不接受一稿多投，若為延伸作品需於投稿時載明。我們期望透過此方式使更多學生能有展現自我的機會，同時為會眾帶來不同形式的學習與交流。
        </p>
      </section>

      <section
        id="submission-topics"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          投稿
        </h2>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            稿件資訊
          </h3>
          <p>除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。</p>
          <div className="flex flex-col gap-4">
            <InformationField title="題目" tags={["required", "public"]}>
              長度請自行斟酌。
            </InformationField>
            <InformationField title="摘要" tags={["required", "public"]}>
              建議約 <span className="hightlight subTitle"> 350 </span>{" "}
              字，使用於宣傳與網站公告。
            </InformationField>
            <InformationField title="主題標籤" tags={["required", "public"]}>
              請填寫 1~3 個與海報內文相關的領域與{" "}
              <span className="hightlight subTitle">知識標籤</span>
              ，例如：ML、Data Science、資安、NLP
              等；錄取後會與提供稿件者溝通微調後公開於官網。
            </InformationField>
            <InformationField title="專案說明" tags={["required"]}>
              請以 PDF 檔案上傳，以{" "}
              <span className="hightlight subTitle"> 600~1500 </span>{" "}
              字為限。內容涵蓋專案或研究的背景與目標，說明其所解決的問題或探索的課題，並描述所使用的方法或技術，包括專案實施或研究過程中，並展示專案或研究的主要成果，說明其應用價值或理論貢獻，探討未來發展方向或進一步探索的可能性。投稿者可根據專案或研究的特性自行安排內容，展現專案或研究的獨特性與價值。專案說明不需設計或排版，僅需充分說明貴專案內容即可。
            </InformationField>
            <InformationField title="其他說明" tags={[]}>
              其他以上未提及之說明，若為延續性研究作品也請在此標明。
            </InformationField>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            個人資料
          </h3>
          <div>
            <p className="mb-2 leading-10 tracking-wider">
              除了暱稱 /
              名字、自我介紹被用於宣傳，其餘資訊僅需提供一人作為代表（當稿件同時有多位講者時），供議程組於聯絡時使用。
            </p>
            <div className="flex flex-col gap-4">
              <InformationField title="電子郵件" tags={["required"]}>
                能讓大會聯絡的電子信箱。（注意：請您在大會的聯絡過程中，維持使用相同信箱）
              </InformationField>
              <InformationField title="名字" tags={["required", "public"]}>
                您的姓名。
              </InformationField>
              <InformationField title="暱稱" tags={["required", "public"]}>
                公開於講者及網站的稱呼。
              </InformationField>
              <InformationField title="自我介紹" tags={["required", "public"]}>
                公開於講者海報及網站，將有助於會眾更加了解有關你的資訊。至多三人。
              </InformationField>
              <InformationField title="手機號碼" tags={["required"]}>
                用於大會聯絡、確認資訊用的電話號碼。
              </InformationField>
              <InformationField title="其他聯絡方式" tags={["required"]}>
                其他任何我們能聯絡您的方式（如 Telegram
                ID、住處電話等），以利我們在審稿時即時向您釐清投稿資訊。
              </InformationField>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-h3-mobile font-bold text-primary md:text-h3">
            海報格式參考
          </h3>
          <ul className="list-inside list-disc leading-10">
            <li className="listItem">
              中文名稱：字體大小範圍為 70 號字〜90
              號字，且建議至多兩行並置中對齊。
            </li>
            <li className="listItem">
              英文名稱：字體大小範圍為 40 號字〜80
              號字，且建議最多不超過兩行，置中對齊方式。
            </li>
            <li className="listItem">
              作者中、英文姓名：字體大小範圍 30 號字〜40 號字，置中對齊方式。
            </li>
            <li className="listItem">
              海報頁面的上下側及左右邊各留至少 5 公分。
            </li>
            <li className="listItem">
              圖表需以良好解析度呈現，可以列在文中，或列在參考文獻之後。列在文中者，請盡量靠近文中第一次提及的地方。各圖、表請備說明內容，圖的說明應置於圖的下方，而表的說明則應置於表的上方。
            </li>
          </ul>
        </div>
      </section>

      <section
        id="poster-examples"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          海報格式範例
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          您可以從{" "}
          <Link
            href="https://sitcon.org/2024/poster/"
            target="_blank"
            className="cursor-pointer text-primary underline"
          >
            SITCON 2024
          </Link>{" "}
          網站瀏覽過往的海報範例，了解格式與內容的呈現方式。
        </p>
      </section>

      <section
        id="review-process"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          審稿方式
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON
          工作人員、業界人士及學界人士組成。
          <br />
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul className="list-inside list-disc leading-10">
          <li className="listItem">
            <span className="subTitle hightlight">題材創新性：</span>
            專案內容與方法具原創與可行性，產生貢獻或影響之潛力。
          </li>
          <li className="listItem">
            <span className="subTitle hightlight">作品完整度：</span>
            提供的資料是否具備基本學術倫理、適切性、系統性。我們偏好完整的資料，讓審稿委員更清楚了解專案細節。
          </li>
          <li className="listItem">
            <span className="subTitle hightlight">表達完整性：</span>
            文句暢通，且文意清楚周全。
          </li>
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
              或不符事實，我們不會強制要求講者對研究內容進行修正。
            </li>
            <li className="listItem">
              投稿格式所有註明「公開」的資訊將於年會後公開於官方網站；個人資料中註明「公開」的資訊將放置於年會現場。
            </li>
            <li className="listItem">
              在截稿之前，投稿者可以隨時透過寄送至您電子信箱內的表單回覆副本修改已送出的稿件。
            </li>
            <li className="listItem">
              審稿過程
              <span className="hightlight subTitle">不考慮稿件內容的難度</span>
              。我們以稿件是否能夠吸引人、高品質、適合會眾為考量。
            </li>
            <li className="listItem">
              為鼓勵投稿，大會
              <span className="hightlight subTitle">
                提供投稿者一組報名邀請碼
              </span>
              （一稿一組，每人最多一組），可優先報名參與本年會，大會方保有最終發放之權力。若您的稿件被接受，年會將頒予感謝狀以表彰您的熱情付出與貢獻，並額外提供海報展作者身分入場，屆時您可以將年會邀請碼贈與他人使用，邀請親朋好友共襄盛舉。
            </li>
            <li className="listItem">
              若同一稿件有多個作者，請在「暱稱 /
              名字」欄位標示所有作者的稱呼。稿件經接受者，無論作者人數，皆只提供一組可轉贈的入場票邀請碼、一份參展識別證與一份參展專屬迎賓禮，大會方保有最終發放之權力。
            </li>
          </ul>
          <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
            若有任何問題或投稿建議，請來信 SITCON 議程組信箱{" "}
            <Link
              href="mailto:session@sitcon.org"
              className="cursor-pointer text-primary underline"
            >
              <span className="hightlight subTitle">session@sitcon.org</span>
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
          投稿作者同意以{" "}
          <Link
            target="_blank"
            href={"https://creativecommons.org/licenses/by/4.0/deed.zh-hant"}
            className="hightlight subTitle underline underline-offset-2"
          >
            創用 CC「姓名標示」4.0
          </Link>{" "}
          授權大會方進行紙本印刷、宣傳、展覽、數位化、重製等審稿、佈展、官方網站上線工作必要流程。投稿作者仍擁有投稿專案著作之著作權。且擔保本著作係著作人之原創性著作，未侵害任何第三人之智慧財產權。
        </p>
        <div className="py-1" />
      </section>

      <section
        id="poster-upload"
        className="my-4 -mt-[60px] space-y-4 pt-[80px] md:mb-16"
      >
        <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
          海報上傳與佈展
        </h2>
        <p className="text-normal-mobile font-normal leading-10 tracking-wider md:text-normal">
          若您的稿件被予以錄取，您需要依據投稿時提供的資訊將專案/研究內容製作成一完整海報。海報之內容除題目與摘要之外，建議依序可包含前言、方法或技術、成果展示、結論及參考資料等，您可根據專案或研究的特性自行斟酌內容安排，以不超過海報尺寸為限。
          <span className="subTitle hightlight">
            請以直版寬 841 mm、高 1189 mm （A0 大小）規格製作為 PDF 檔案
          </span>
          ，並於 2025 年 2 月 16
          日前上傳海報檔案。海報展作者需自行列印海報，並於年會當天攜帶海報至現場張貼。具體佈展地點與安排將於稿件錄取後通知。
        </p>
      </section>

      <FAQ QA={QA} />
    </div>
  );
}
