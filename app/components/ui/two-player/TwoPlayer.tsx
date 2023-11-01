"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import One from "../../die-sides/One";
import Two from "../../die-sides/Two";
import Three from "../../die-sides/Three";
import Four from "../../die-sides/Four";
import Five from "../../die-sides/Five";
import Six from "../../die-sides/Six";
import { aRollOfTheDice, findScore } from "@/app/utils/diceUtils";

export default function TwoPlayer() {
  const [open, setOpen] = useState<boolean>(false);

  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");

  const [rollsPlayer1, setRollsPlayer1] = useState<number[]>([]);
  const [rollsPlayer2, setRollsPlayer2] = useState<number[]>([]);
  const [scorePlayer1, setScorePlayer1] = useState<number | null>(null);
  const [scorePlayer2, setScorePlayer2] = useState<number | null>(null);
  const [rollCountPlayer1, setRollCountPlayer1] = useState<number>(0);
  const [rollCountPlayer2, setRollCountPlayer2] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const rollDiceForPlayer = () => {
    const newRolls = aRollOfTheDice();
    const newScore = findScore(newRolls);

    const updateScoreAndSwitchPlayer = (
      scoreSetter: React.Dispatch<React.SetStateAction<number | null>>,
      rollCount: number,
      switchToPlayer: string | null
    ) => {
      if (
        rollCount === 2 ||
        typeof newScore === "number" ||
        newScore === null
      ) {
        scoreSetter(typeof newScore === "string" ? 0 : newScore);
        setCurrentPlayer(switchToPlayer);
      }
    };

    if (currentPlayer === player1) {
      setRollsPlayer1(newRolls);
      updateScoreAndSwitchPlayer(setScorePlayer1, rollCountPlayer1, player2);
      setRollCountPlayer1(rollCountPlayer1 + 1);
    } else {
      setRollsPlayer2(newRolls);
      updateScoreAndSwitchPlayer(setScorePlayer2, rollCountPlayer2, null);
      setRollCountPlayer2(rollCountPlayer2 + 1);
    }
  };

  const determineWinner = () => {
    // Logic to determine the winner based on scores and game rules
    // This function will set the 'winner' state variable accordingly
    // TODO: Implement the winner determination logic
  };

  return (
    <div>
      <div className="mt-6 ml-4">
        <Link href="/">
          <div className="text-sm font-semibold leading-7 text-[#4fadca] hover:text-[#4fadca]/70 font-sans">
            <span aria-hidden="true">&larr;</span> Back
          </div>
        </Link>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-100 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <img src="/img/logos/ceelo-logo-3.png" alt="Cee Lo logo" />
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900 font-sans"
                    >
                      Player 1
                    </label>
                    <input
                      type="text"
                      name="player1"
                      id="player1"
                      value={player1}
                      className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4FADCA] sm:text-sm sm:leading-6"
                      placeholder="Snoopy"
                      onChange={(e) => setPlayer1(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-6">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900 font-sans"
                    >
                      Player 2
                    </label>
                    <input
                      type="text"
                      name="player2"
                      id="player2"
                      value={player2}
                      className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4FADCA] sm:text-sm sm:leading-6"
                      placeholder="Charlie Brown"
                      onChange={(e) => setPlayer2(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans animate-gradientFlow"
                      onClick={() => setOpen(false)}
                    >
                      Start Game
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {player1 && player2 && (
        <div className="mt-10 flex flex-col items-center space-y-2">
          <p className="text-white text-3xl">
            <span className="font-sans text-gray-400 text-xl">Player 1: </span>
            {player1}
          </p>
          <p className="text-white text-3xl">
            <span className="font-sans text-gray-400 text-xl">Player 2: </span>
            {player2}
          </p>
        </div>
      )}

      {currentPlayer === player1 && (
        <button onClick={rollDiceForPlayer}>Roll Dice (Player 1)</button>
      )}
      {currentPlayer === player2 && (
        <button onClick={rollDiceForPlayer}>Roll Dice (Player 2)</button>
      )}

      {!player1 && !player2 && (
        <div className="absolute bottom-64 w-full flex justify-center items-center">
          <button
            type="button"
            className="rounded-full px-24 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow font-sans"
            onClick={() => setOpen(true)}
          >
            Start 2 Player Game
          </button>
        </div>
      )}
    </div>
  );
}
