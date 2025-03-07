import React from "react";
import data from "@/public/sessions.json";
import SessionCard from "@/app/(website)/(pages)/_components/SessionCard";

const styleToText = (time: string) => {
  // input time format: "t0830"
  // output style format: "08:30"
  return time.replace("t", "").replace(/(\d{2})(\d{2})/, "$1:$2");
};

export default function DesktopAgenda() {
  const roomOrder = ["R2", "R0", "R1", "R3", "S"];

  const rooms = data.rooms.sort((a, b) => {
    // return 0;
    return roomOrder.indexOf(a.id) - roomOrder.indexOf(b.id);
  });

  const gridTemplateColumns = rooms.reduce((acc: string, room) => {
    return `${acc} [${room.id}] 1fr `;
  }, "[start] auto");
  // start R0 R1 R2 R3 S

  function parseTime(time: Date) {
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });
  }

  const times = data.sessions
    .map((session) => [session.start, session.end])
    .flat(1)
    .filter((item) => item !== null)
    .map((item) => new Date(item))
    .sort()
    .map((item) => parseTime(item))
    .filter((item, index, self) => self.indexOf(item) === index)
    .map((item, index) => ({ id: `t${item.replace(":", "")}`, index }));

  const gridTemplateRows = times.reduce((acc: string, time) => {
    return `${acc} [timeLine-${time.id}] 1px [${time.id}] minmax(40px, auto)`;
  }, "[start] auto [divider] auto");

  function getNextRoom(room: string) {
    const roomIndex = roomOrder.indexOf(room);
    return roomOrder[roomIndex + 1];
  }
  // start divider timeLine-0830 0830 timeLine-1000 1000 ...

  return (
    <div className="lg:container lg:px-12">
      <div
        className="mx-auto grid h-full text-white"
        style={{
          gridTemplateColumns: gridTemplateColumns,
          gridTemplateRows: gridTemplateRows,
        }}
      >
        {/* row1 empty R2 R0 R1 R3 S  */}
        <div className="sticky top-[120px] z-20 border-b border-b-white border-opacity-30 bg-background py-2 text-center text-[24px] font-bold"></div>
        {rooms.map((room, index) => (
          <div
            key={index}
            style={{
              gridColumn: room.id + " / " + getNextRoom(room.id),
              gridRow: "start / divider",
            }}
            className="sticky top-[120px] z-20 border-b border-b-white border-opacity-30 bg-background py-2 text-center text-[24px] font-bold"
          >
            {room.id}
          </div>
        ))}
        {/* row1 empty R2 R0 R1 R3 S  */}

        {/* empty space */}
        <div
          className="h-[1px] w-full py-3"
          style={{
            gridColumn: "start / end",
            gridRow: "divider / t0830",
          }}
        />

        {/* all time without line (?) */}
        {times.map((time) => (
          <div
            key={time.id}
            className="flex h-full w-full translate-y-[1px] items-center pb-2 pr-6 text-white lg:pr-8 xl:pr-10"
            style={{
              gridColumn: "start / start",
              gridRow: `timeLine-${time.id} / ${time.id}`,
            }}
          >
            <p>{styleToText(time.id)}</p>
          </div>
        ))}
        {/* all timeline */}
        {times.map((time) => (
          <div
            key={time.id}
            className="flex h-full w-full translate-y-[1px] items-center pb-2 pl-16 text-white"
            style={{
              gridColumn: "start / end",
              gridRow: `timeLine-${time.id} / ${time.id}`,
            }}
          >
            <hr className="pointer-events-none w-full bg-white opacity-30" />
          </div>
        ))}
        {/* all timeLine */}
        {/* all sessions */}
        {data.sessions
          .filter(
            (session) =>
              session.start !== null &&
              session.end !== null &&
              session.id !== null,
          )
          .map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
      </div>
    </div>
  );
}
