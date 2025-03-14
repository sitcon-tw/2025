"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import posterData from "./posterData";
import { cn } from "@/lib/utils";

interface Poster {
  title: string;
  author: string;
  image: string;
  description: string;
}

export default function PosterPage() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const handlePosterClick = (poster: Poster) => {
    setSelectedPoster(poster);
  };

  const handleCloseDialog = () => {
    setSelectedPoster(null);
  };

  return (
    <div>
      <h1 className="pb-16 text-h1 font-bold text-[#FFFFFF]">靜態海報展</h1>
      <p className="mb-6">
        今年的「靜態海報展」已在年會當天圓滿結束！感謝所有投稿者和與會者的熱情參與，我們一同見證了來自全台學生的創新與努力，透過靜態海報交流了無數精彩的想法。
        <br />
        <br />
        若你錯過了當天的展覽，或是想再次回味其中的亮點，不用擔心！我們已將所有的海報作品彙整供大家瀏覽！
      </p>
      <div className="grid grid-cols-1 justify-center gap-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {posterData.map((poster: Poster) => (
          <div
            key={poster.title}
            className="cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:scale-105 hover:rounded-xl"
            onClick={() => handlePosterClick(poster)}
          >
            <div className="group relative flex justify-center">
              <Image
                src={`/2025/poster/${poster.image}`}
                alt={poster.title}
                width={400}
                height={10}
                className="rounded-xl transition-all group-hover:opacity-80"
              />
              <p
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-lg font-bold text-[#fff] opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100",
                )}
              ></p>
            </div>

            <h3 className="truncate pt-4 text-xl text-[#FFFFFF]">
              {poster.title}
            </h3>
            <div className="flex items-center space-x-2 pt-2">
              <p className="text-zinc-300">{poster.author}</p>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedPoster && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={handleCloseDialog}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative z-10 max-h-[50vh] w-full max-w-lg overflow-x-hidden overflow-y-scroll whitespace-pre-wrap rounded-lg bg-background p-12"
            >
              <h2 className="mb-4 text-2xl font-bold">
                {selectedPoster.title}
              </h2>
              <p className="mb-4 whitespace-pre-line">
                {selectedPoster.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
