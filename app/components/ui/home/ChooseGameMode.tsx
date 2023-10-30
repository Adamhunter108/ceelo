"use client";
import { useState } from "react";
import Link from "next/link";
import ChooseGameSelectionRing from "./ChooseGameSelectionRing";

export default function ChooseGameMode() {
  const [selectedGameMode, setSelectedGameMode] = useState<string | null>(null);
  return (
    <div>
      <div className="flex justify-center space-x-4 md:space-x-9">
        {selectedGameMode === "freeThrow" ? (
          <div className="w-28 md:w-36 h-28 md:h-36">
            <ChooseGameSelectionRing>
              <button
                onClick={() => setSelectedGameMode("freeThrow")}
                className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
              >
                Free throw
              </button>
            </ChooseGameSelectionRing>
          </div>
        ) : (
          <button
            onClick={() => setSelectedGameMode("freeThrow")}
            className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
          >
            Free throw
          </button>
        )}
        {selectedGameMode === "twoPlayers" ? (
          <div className="w-28 md:w-36 h-28 md:h-36">
            <ChooseGameSelectionRing>
              <button
                onClick={() => setSelectedGameMode("twoPlayers")}
                className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
              >
                2 players
              </button>
            </ChooseGameSelectionRing>
          </div>
        ) : (
          <button
            onClick={() => setSelectedGameMode("twoPlayers")}
            className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
          >
            2 players
          </button>
        )}
      </div>
      {selectedGameMode && (
        <Link
          href={`/${
            selectedGameMode === "freeThrow" ? "free-throw" : "two-player"
          }`}
        >
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-gradient-to-tr from-[#E1394D] via-[#E97138] to-[#4FADCA] px-16 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              //   className="rounded-full px-16 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              //   style={{
              //     backgroundImage:
              //       "linear-gradient(to bottom right, #EC5F4C 15%, #C10000 25%, #EC5F4C 35%, #EC5F4C 35%, #C10000 65%, #EC5F4C 75%, #EC5F4C 100%)",
              //   }}
            >
              Start
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
