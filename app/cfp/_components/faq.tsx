"use client";
import { Fragment, ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QA {
  title: string;
  answer: ReactNode;
}

export default function FAQ({ QA }: { QA: QA[] }) {
  const [qaList, setQaList] = useState<Array<boolean>>(
    Array(QA.length).fill(false),
  );
  return (
    <section id="qa" className="my-4 -mt-[80px] pt-[80px]">
      <h2 className="text-h2-mobile font-extrabold text-primary md:text-h2">
        Q&A
      </h2>
      {QA.map((qa, index) => (
        <Fragment key={qa.title}>
          <div
            onClick={() =>
              setQaList((prev) =>
                prev.map((_, i) => (i === index ? !prev[i] : false)),
              )
            }
            className={`${qaList[index] ? "rounded-t-2xl" : "rounded-2xl"} z-10 mt-3 flex cursor-pointer justify-between bg-background-light px-6 py-4 text-foreground`}
          >
            <p className="font-bold">{qa.title}</p>
            <span className={`material-symbols-outlined`}>
              {qaList[index] ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
          </div>
          <AnimatePresence>
            {qaList[index] && (
              <motion.div
                key={qaList[index] ? "open" : "close"}
                initial={{
                  opacity: 0,
                  // y: -20,
                  maxHeight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                }}
                exit={{
                  opacity: 0,
                  // y: -20,
                  maxHeight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                }}
                animate={{
                  opacity: 1,
                  // y: 0,
                  maxHeight: "400px",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                  borderTopRightRadius: "0",
                  borderTopLeftRadius: "0",
                }}
                transition={{ duration: 0.2 }}
                className={`rounded-b-2xl bg-[#353f61] px-6 text-normal-mobile font-normal leading-10 tracking-wider text-foreground md:text-normal`}
              >
                {qa.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </Fragment>
      ))}
    </section>
  );
}
