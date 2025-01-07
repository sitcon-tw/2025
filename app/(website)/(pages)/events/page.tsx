"use client";

import TableOfContent from "@/app/cfp/(submission)/_components/table-of-content";
import TableOfContentMobile from "@/app/cfp/(submission)/_components/table-of-content-mobile";
import Link from "next/link";

export default function Page() {
  const sections = [
    { id: "guide", title: "導遊團" },
    { id: "project_angel", title: "天使計畫" },
    { id: "whiteboard", title: "白板大戰" },
    { id: "lightning_talk", title: "Lightning Talk 閃電秀" },
    { id: "poster", title: "靜態海報展" },
    { id: "cafeteria", title: "咖啡廳" },
    { id: "agenda", title: "開放式議程" },
    { id: "geocaching", title: "大地遊戲" },
  ];

  return (
    <div className="flex items-start py-8 text-normal-mobile md:text-normal">
      <div className="mr-12 w-full">
        <h1 className="mb-4 text-h1-mobile font-bold md:mb-12 md:text-h1">
          年會活動
        </h1>

        <TableOfContentMobile theme="light" sections={sections} submitUrl="" />

        <h2 className="mt-8 text-h2-mobile font-semibold md:text-h2">
          你是第一次參加 SITCON 年會嗎？
        </h2>
        <section
          id="guide"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">導遊團</h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">導遊團</h3>
            <p className="mt-4 leading-[200%]">
              在這個人潮洶湧的 SITCON
              年會中，是否感到有些迷茫呢？您是否還在猶豫該往哪個方向前進呢？
              <br />
              別擔心，在導遊團集合地可以看到拿著 SITCON 旗子的導遊，跟著 SITCON
              導遊的腳步，帶領你前往社群攤位、走訪靜態海報展、咖啡廳，讓您更瞭解
              SITCON 的各個面向以及運作模式。
              <br />
              導遊團會分為<span className="text-[#36FF62]">上午團</span>以及
              <span className="text-[#36FF62]">
                下午團
              </span>，上午團的時間為{" "}
              <span className="text-[#36FF62]">11:00 到 11:40</span>
              ，集合地點是 3F 白板區旁。下午團的時間為{" "}
              <span className="text-[#36FF62]">14:40 到 15:20</span>{" "}
              ，集合地點是 2F 咖啡廳 ＆ 靜態海報展旁。
              <br />
              趕快來參加導遊團，與新朋友一同揭開年會的精彩面紗！
            </p>
          </div>
        </section>
        <section
          id="project_angel"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">天使計劃</h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">天使計劃</h3>
            <p className="mt-4 leading-[200%]">
              無論你是初次踏足
              SITCON，還是熟悉的老朋友，都誠摯地邀請你參與天使計畫！
              <br />
              天使計畫提供一個交流的平台，讓大家彼此分享和探索。不論你是擁有豐富經驗的老手，還是對科技充滿好奇心的新手，都能在這裡找到共鳴。我們會根據雙方提供的資料進行配對，你可以選擇一對一交流，亦可與多位與會者一齊參與。鼓勵初心者主動與天使交流，並藉此機會，讓天使和初心者，甚至初心者之間相互啟發，更深入了解這場年會。
              <br />
              天使計畫不僅是指引之旅，更是共同成長的機會。無論你是天使還是初心者，每個人都能在這裡找到屬於自己的位置，攜手創造一個開放、互相學習的環境。
            </p>
          </div>
        </section>
        <h2 className="mt-10 text-h2-mobile font-semibold md:text-h2">
          有話想跟大家說，想要分享你的想法嗎？
        </h2>
        <section
          id="whiteboard"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">白板大戰</h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">白板大戰</h3>
            <p className="mt-4 leading-[200%]">
              【歡迎進行和諧的鬥爭！】各種教派百家爭鳴的今天，是時候一決高下了。
              <br />
              誠摯邀請您至三樓留言區，以筆墨加入這場沒有硝煙的戰爭。
              <br />
              我們以「白板大戰」做為號召，圍繞多個主題展開討論。希望大家藉由閱讀和書寫，以輕鬆歡快的氣氛進行傾聽和對話。
              <br />
              歡迎在白板上各抒己見，向敵方發出友善的攻擊。
            </p>
          </div>
        </section>
        <section
          id="lightning_talk"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">
              Lightning Talk 閃電秀
            </h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">
              Lightning Talk 閃電秀
            </h3>
            <p className="mt-4 leading-[200%]">
              你知道 Lightning Talk 為什麼有 Lightning
              這個詞嗎？因為這是像閃電一樣短的演講！
              <br />
              在今年，我們希望講者可以讓聽眾更瞭解講述的內容，於是我們將原先的三分鐘延長到了五分鐘！但不變的是，一旦超時的話……會被直接切斷訊號，聽起來是不是非常刺激有趣呢？
              <br />
              躍躍欲試了嗎？Lightning Talk
              閃電秀將於年會當天早上開放報名，並於所有議程結束後、閉幕前進行演講，一起來期待這次會出現怎麼樣令人興奮、期待又新奇的內容吧！
            </p>
          </div>
        </section>
        <section
          id="poster"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">靜態海報展</h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">
              靜態海報展
            </h3>
            <p className="mt-4 leading-[200%]">
              這是 SITCON 2024
              的新嘗試！我們提供學生們一個展現自我的舞台，讓大家可以透過靜態海報展發表自己做的研究，同時也能和志同道合的同學當面交流想法，碰撞出知識的火花！
              <br />
              中午 11:35
              左右開始，各海報的講者將會出現在海報旁邊和大家交流，可以對感興趣的海報進行提問，順便認識厲害的講者們。熱愛探索新知的你，千萬不能錯過這場學術派對的行列！
            </p>
            <div className="mt-4 flex md:justify-end">
              <Link
                className="flex h-[40px] w-full sm:w-[190px] items-center justify-center self-center rounded-full bg-[#6CA7D2] text-black transition hover:bg-foreground max-[1024px]:active:scale-95 max-sm:px-3 md:w-[153px] md:self-start min-[1024px]:active:bg-primary"
                href="/poster"
                target="_blank"
              >
                查看線上海報
              </Link>
            </div>
          </div>
        </section>
        <section
          id="cafeteria"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">
              咖啡廳
            </h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">
              咖啡廳
            </h3>
            <p className="mt-4 leading-[200%]">
              想與來自四面八方的與會者進行交流嗎？還是想繼續討論剛剛精彩的議程嗎？抑或是想要有個地方好好休息呢？那麼歡迎來到
              SITCON
              咖啡廳。在這裡，我們提供悠閒的環境、舒適的空間，以及不可或缺的動力來源☕️，讓各個需求的與會者都能在這裡找到屬於自己的小天地，無論你是想與人聊天、討論，或是在一整天豐富的行程中想稍微喘口氣，甚至是在這裡腦力激盪出一項專案，我們都歡迎！
            </p>
          </div>
        </section>
        <section
          id="agenda"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">
              開放式議程
            </h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">
              開放式議程
            </h3>
            <p className="mt-4 leading-[200%]">
              在追求創新的時代，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾單向陳述式的演講，開放式議程更加強調主講者和與會者的雙向交流。SITCON
              作為學生展現自己的舞台，我們期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是一同探討學生相關議題等。
            </p>
          </div>
        </section>
        <h2 className="mt-20 text-h2-mobile font-semibold md:text-h2">
          議程之間不知道要幹嘛嗎？
        </h2>
        <section
          id="geocaching"
          className="mt-6 sm:relative sm:grid sm:grid-cols-3 sm:rounded-lg sm:border-[1px] sm:border-[#FFFFFF] sm:border-opacity-50 sm:bg-background-light"
        >
          <div className="col-span-1 justify-center">
            <h3 className="mb-4 text-[22px] font-bold sm:hidden">
              大地遊戲
            </h3>
            <img
              className="w-full rounded-lg object-cover max-sm:max-h-[210px] sm:h-full sm:rounded-l-lg"
              src="/website/guide.png"
              alt="導遊團"
            />
          </div>
          <div className="col-span-2 sm:p-4">
            <h3 className="text-[26px] font-normal max-sm:hidden">
              大地遊戲
            </h3>
            <p className="mt-4 leading-[200%]">
              第一次參加
              SITCON，還沒進入狀況嗎？今年有各式各樣的活動，除了精彩議程，還有靜態海報展、咖啡廳和攤位等等，還摸不著頭緒要先去哪裡逛逛嗎？還在猶豫該怎麼規劃最充實的時間利用嗎？別擔心！快點進
              OPass「迷因拼圖」開始遊戲就對啦！
              <br />
              今年的大地遊戲，我們將 SITCON 2024
              諸多年會相關活動都融合進了「迷因拼圖」遊戲中！邀請您來一同參與，邊玩邊破解今年所有有趣活動。除此之外，達成指定任務條件後，還可以至三樓大會服務台兌換
              SITCON 2024 紀念禮品抽獎券哦～
              <br />
              完成越多任務、中獎機率越高！快點開始遊戲吧 {`(ﾉ>ω<)ﾉ`}
            </p>
          </div>
        </section>
      </div>
      <TableOfContent theme="light" sections={sections} submitUrl="" />
    </div>
  );
}
