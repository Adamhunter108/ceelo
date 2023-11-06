"use client";
import { useState } from "react";
import Link from "next/link";
import ChooseGameSelectionRing from "./ChooseGameSelectionRing";
import ChooseGameSelectionRingHolder from "./ChooseGameSelectionRingHolder";

export default function ChooseGameMode() {
  const [selectedGameMode, setSelectedGameMode] = useState<string | null>(null);
  return (
    <div>
      <div className="flex justify-center space-x-4 md:space-x-6">
        {selectedGameMode === "twoPlayers" ? (
          <div className="w-28 md:w-36 h-28 md:h-36">
            <ChooseGameSelectionRing>
              <button
                onClick={() => setSelectedGameMode("twoPlayers")}
                className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold font-sans"
              >
                2 Players
              </button>
            </ChooseGameSelectionRing>
          </div>
        ) : (
          <div className="w-28 md:w-36 h-28 md:h-36">
            <ChooseGameSelectionRingHolder>
              <button
                onClick={() => setSelectedGameMode("twoPlayers")}
                className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold font-sans"
              >
                2 Players
              </button>
            </ChooseGameSelectionRingHolder>
          </div>
        )}
        {selectedGameMode === "freeThrow" ? (
          <div className="w-28 md:w-36 h-28 md:h-36">
            <ChooseGameSelectionRing>
              <button
                onClick={() => setSelectedGameMode("freeThrow")}
                className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold font-sans"
              >
                Free Throw
              </button>
            </ChooseGameSelectionRing>
          </div>
        ) : (
          <div className="w-28 md:w-36 h-28 md:h-36">
            <ChooseGameSelectionRingHolder>
              <button
                onClick={() => setSelectedGameMode("freeThrow")}
                className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold font-sans"
              >
                Free Throw
              </button>
            </ChooseGameSelectionRingHolder>
          </div>
        )}
      </div>
      {selectedGameMode && (
        <Link
          href={`/${
            selectedGameMode === "freeThrow" ? "free-throw" : "two-player"
          }`}
        >
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              //   className="rounded-full bg-gradient-to-br from-[#E1394D] via-[#E97138] to-[#4FADCA] px-24 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow"
              className="rounded-full px-24 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow font-sans"
            >
              Start
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
