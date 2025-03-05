"use client";

import Image from "next/image";
import posterData from "./posterData";

export default function PosterPage() {
  return (
    <div>
      <h1 className="pb-16 text-h1 font-bold text-[#FFFFFF]">靜態海報展</h1>
      <div className="grid grid-cols-1 justify-center gap-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {posterData.map((poster) => (
          <div
            key={poster.title}
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:rounded-xl"
          >
            <Image
              src={`/poster/${poster.image}`}
              alt={poster.title}
              width={400}
              height={10}
              className="rounded-lg"
            />
            <h3 className="truncate pt-4 text-xl text-[#FFFFFF]">
              {poster.title}
            </h3>
            <div className="flex items-center space-x-2 pt-2">
              <Image
                src={`/poster/${poster.avatars[0]}`}
                alt={poster.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <p className="text-zinc-300">{poster.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
