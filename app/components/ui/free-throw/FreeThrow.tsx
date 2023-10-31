"use client";

import { useState } from "react";
import One from "../../die-sides/One";
import Two from "../../die-sides/Two";
import Three from "../../die-sides/Three";
import Four from "../../die-sides/Four";
import Five from "../../die-sides/Five";
import Six from "../../die-sides/Six";
import { aRollOfTheDice, findScore } from "@/app/utils/diceUtils";

export default function FreeThrow() {
  const [rolls, setRolls] = useState<number[]>(aRollOfTheDice());
  const [score, setScore] = useState<string | null>(null);
  const [hasRolled, setHasRolled] = useState<boolean>(false);

  const handleRoll = () => {
    const newRolls = aRollOfTheDice();
    setRolls(newRolls);
    setScore(findScore(newRolls));
    setHasRolled(true);
  };

  return (
    <div className="relative h-screen px-4 py-8">
      <div className="text-center">
        <div className="flex justify-center space-x-4">
          {rolls.map((roll, idx) => {
            switch (roll) {
              case 1:
                return <One key={idx} />;
              case 2:
                return <Two key={idx} />;
              case 3:
                return <Three key={idx} />;
              case 4:
                return <Four key={idx} />;
              case 5:
                return <Five key={idx} />;
              case 6:
                return <Six key={idx} />;
              default:
                return null;
            }
          })}
        </div>
        {hasRolled && score && (
          <div>
            <div className="mt-6 text-center text-2xl text-gray-400 font-sans">
              Score:
            </div>
            <div className="mt-6 text-center text-7xl text-gray-200 font-mono">
              {score}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-64 w-full flex justify-center">
        <button
          type="button"
          className="rounded-full px-24 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow font-sans"
          onClick={handleRoll}
        >
          Throw Dice
        </button>
      </div>
    </div>
  );
}
