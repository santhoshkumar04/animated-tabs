import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const tabs = [
  {
    id: "world",
    label: "world",
    description:
      "“World-best” – This phrase is usually used to describe the best global performance ever recorded in a specific skill or sport, or in other words – a “world record”. This phrase used to be used in the Olympics and is still used today in The Guinness Book of Records.",
  },
  {
    id: "usa",
    label: "usa",
    description:
      "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.",
  },
  {
    id: "india",
    label: "india",
    description:
      "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. Wikipedia",
  },
  {
    id: "uk",
    label: "uk",
    description:
      "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge.",
  },
  {
    id: "china",
    label: "china",
    description:
      "China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population exceeding 1.4 billion. China spans the equivalent of five time zones and borders fourteen countries by land, the most of any country in the world.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <>
      <main className={`min-h-screen px-24 py-5 flex items-center justify-center ${inter.className}`}>
        <div className="max-w-5xl w-full relative rounded-lg border border-white/10 shadow-md backdrop-blur-0">
          <div className="h-96 before:absolute flex items-center justify-center before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>
          <a
            href="https://github.com/santhoshkumar04/animated-tabs"
            className="absolute flex items-center text-gray-500 hover:text-gray-400 transition-colors duration-300 gap-2 top-3 right-4"
          >
            <Image src="/github.svg" alt="logo" width={30} height={30} />
            <span>Github</span>
          </a>
          <div className="border border-gray-300/10 rounded-md flex flex-col gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 from-white/10 to-transparent p-2">
            <div className="flex gap-2 mx-auto backdrop-blur-lg border border-white/10 p-1 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-3 py-1.5 transition rounded-full"
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="bubble"
                      className="inset-0 backdrop-blur-xl bg-white/10 absolute"
                      transition={{ duration: 0.4, bounce: 0.2, type: "spring" }}
                      style={{
                        borderRadius: `9999px`,
                      }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="line-clamp-3 p-2 pb-6 text-sm">
              {tabs.map((tab) => (activeTab === tab.id ? tab.description : null))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
