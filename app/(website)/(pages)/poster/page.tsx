"use client";

import Image from "next/image";
import posterData from "./posterData";
import { cn } from "@/lib/utils";

export default function PosterPage() {
  return (
    <div>
      <h1 className="pb-16 text-h1 font-bold text-[#FFFFFF]">靜態海報展</h1>
      <p className="mb-6">
        繼去年成功的嘗試後，今年的「靜態海報展」將再次精彩登場！這是一個議程之外的特別展區，不僅提供學生展示專案或研究成果的舞台，還讓與會者能輕鬆探索多元領域的知識，開啟更多交流與啟發的契機。
        <br />
        <br />
        活動將於 <strong>2025 年 3 月 8 日年會當天 在 4 樓北側攤位</strong>
        展出，呈現來自全台優秀學生的海報作品。無論你是關注技術創新、專案分享，還是新穎的研究發現，都可以在這裡找到讓你耳目一新的主題。
        <br />
        <br />
        今年的靜態海報展涵蓋了以下精彩內容：
      </p>
      <div className="grid grid-cols-1 justify-center gap-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {posterData.map((poster) => (
          <div
            key={poster.title}
            className="cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:scale-105 hover:rounded-xl"
          >
            <div className="group relative flex justify-center">
              <Image
                src={`/poster/${poster.image}`}
                alt={poster.title}
                width={400}
                height={10}
                className="rounded-xl blur-sm transition-all group-hover:opacity-40"
              />
              <p
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-lg font-bold text-[#fff] opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100",
                )}
              >
                展場解鎖完整海報
              </p>
            </div>

            <h3 className="truncate pt-4 text-xl text-[#FFFFFF]">
              {poster.title}
            </h3>
            <div className="flex items-center space-x-2 pt-2">
              {/* <Image
                // src={`/poster/${poster.avatars[0]}`}
                alt={poster.author}
                width={32}
                height={32}
                className="rounded-full"
              /> */}
              <p className="text-zinc-300">{poster.author}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6">
        此外，在下午的點心時段，各海報的作者親臨現場，與大家交流討論。這是個絕佳的機會來提問、學習，並認識來自各地的厲害夥伴們，熱愛探索新知的你，千萬別錯過！
      </p>
    </div>
  );
}
