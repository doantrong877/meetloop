// import MeetingTypeList from "@/components/ui/MeetingTypeList";
// import React from "react";

// const Home = () => {
//   const now = new Date();
//   const time = now.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
//     now
//   );
'use client'
import React, { useEffect, useState } from "react";
import MeetingTypeList from "@/components/ui/MeetingTypeList";

const Home = () => {
  const [clientTimeZone, setClientTimeZone] = useState("");

  useEffect(() => {
    // Get the client’s time zone when the component mounts
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setClientTimeZone(timeZone);
  }, []);

  const now = new Date();
  const timeZone = clientTimeZone || "UTC";

  // Format time with AM/PM
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format with AM/PM
    timeZone: timeZone,
  });

  // Format date to full style
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeZone }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className=" max-w-[270px] rounded py-2 text-center text-base font-normal">
           
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl ">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
