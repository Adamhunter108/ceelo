"use client";
import { useState } from "react";
import Link from "next/link";
import ChooseGameSelectionRing from "./ChooseGameSelectionRing";

export default function ChooseGameMode() {
  const [selectedGameMode, setSelectedGameMode] = useState<string | null>(null);
  const handleGameSelection = (game: string) => {
    setSelectedGameMode(game);
  };
  return (
    // <div className="flex justify-center space-x-4 md:space-x-8">
    //   <div className="w-28 md:w-36 h-28 md:h-36">
    //     <ChooseGameSelectionRing>
    //       <button className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold">
    //         Free throw
    //       </button>
    //     </ChooseGameSelectionRing>
    //   </div>

    //   <div className="w-28 md:w-36 h-28 md:h-36">
    //     <button className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold">
    //       2 players
    //     </button>
    //   </div>
    // </div>

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
              Free throw
            </button>
          </ChooseGameSelectionRing>
        </div>
      ) : (
        <button
          onClick={() => setSelectedGameMode("twoPlayers")}
          className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
        >
          Free throw
        </button>
      )}
    </div>

    // <div className="flex flex-col items-center justify-center h-screen">
    //   <div className="flex space-x-10 mb-6">
    //     {selectedGameMode === "freeThrow" ? (
    //       <ChooseGameSelectionRing>
    //         <button
    //           onClick={() => setSelectedGameMode("freeThrow")}
    //           className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
    //         >
    //           Free throw
    //         </button>
    //       </ChooseGameSelectionRing>
    //     ) : (
    //       <button
    //         onClick={() => setSelectedGameMode("freeThrow")}
    //         className="bg-[#4FADCA] w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-white font-semi-bold"
    //       >
    //         Free throw
    //       </button>
    //     )}

    //     {selectedGameMode === "twoPlayers" ? (
    //       <ChooseGameSelectionRing>
    //         <button
    //           onClick={() => setSelectedGameMode("twoPlayers")}
    //           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
    //         >
    //           2 Players
    //         </button>
    //       </ChooseGameSelectionRing>
    //     ) : (
    //       <button
    //         onClick={() => setSelectedGameMode("twoPlayers")}
    //         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
    //       >
    //         2 Players
    //       </button>
    //     )}
    //   </div>

    //   {selectedGameMode && (
    //     <button
    //       onClick={() => {
    //         // Navigate to the appropriate page
    //         if (selectedGameMode === "freeThrow") {
    //           // Navigate to /free-throw
    //         } else if (selectedGameMode === "twoPlayers") {
    //           // Navigate to /two-player
    //         }
    //       }}
    //       className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    //     >
    //       Start
    //     </button>
    //   )}
    // </div>
  );
}
