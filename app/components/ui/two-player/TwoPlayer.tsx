"use client";

import { Fragment, useState, useEffect } from "react";
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

  const [rolls, setRolls] = useState<number[]>(aRollOfTheDice());
  const [score, setScore] = useState<string | null>(null);
  const [hasRolled, setHasRolled] = useState<boolean>(false);

  const [player1Score, setPlayer1Score] = useState<string | null>(null);
  const [player2Score, setPlayer2Score] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  const [delayedScore, setDelayedScore] = useState<string | null>(null);
  const [delayedPlayer1Score, setDelayedPlayer1Score] = useState<string | null>(
    null
  );
  const [delayedPlayer2Score, setDelayedPlayer2Score] = useState<string | null>(
    null
  );
  const [delayedWinner, setDelayedWinner] = useState<string | null>(null);

  const [rollCount, setRollCount] = useState<number>(0);

  const [player1WinCount, setPlayer1WinCount] = useState<number>(0);
  const [player2WinCount, setPlayer2WinCount] = useState<number>(0);
  const [openRoundsWon, setOpenRoundsWon] = useState<boolean>(false);

  useEffect(() => {
    if (winner === player1) setPlayer1WinCount((prevCount) => prevCount + 1);
    if (winner === player2) setPlayer2WinCount((prevCount) => prevCount + 1);
  }, [winner]);

  useEffect(() => {
    setDelayedScore(null);
    setDelayedPlayer1Score(null);
    setDelayedPlayer2Score(null);
    setDelayedWinner(null);

    const scoreTimer = score
      ? setTimeout(() => setDelayedScore(score), 500)
      : null;

    const player1ScoreTimer = player1Score
      ? setTimeout(() => setDelayedPlayer1Score(player1Score), 500)
      : null;

    const player2ScoreTimer = player2Score
      ? setTimeout(() => setDelayedPlayer2Score(player2Score), 500)
      : null;

    const winnerTimer = winner
      ? setTimeout(() => setDelayedWinner(winner), 800)
      : null;

    return () => {
      if (scoreTimer) clearTimeout(scoreTimer);
      if (player1ScoreTimer) clearTimeout(player1ScoreTimer);
      if (player2ScoreTimer) clearTimeout(player2ScoreTimer);
      if (winnerTimer) clearTimeout(winnerTimer);
    };
  }, [score, player1Score, player2Score, winner]);

  useEffect(() => {
    if (gameOver) {
      findWinner();
    }
  }, [gameOver]);

  const handleRoll = () => {
    const newRolls = aRollOfTheDice();
    const newScore = findScore(newRolls);
    setRolls(newRolls);
    setScore(findScore(newRolls));
    setHasRolled(true);

    if (!player1Score) {
      setPlayer1Score(newScore);
      if (
        newScore === "you lose" ||
        newScore === "Cee Lo" ||
        newScore === "trips"
      ) {
        setGameOver(true);
      }
    } else if (!player2Score && newScore !== null) {
      setPlayer2Score(newScore);
      setGameOver(true);
    }
  };

  const playAgain = () => {
    if (gameOver) {
      setOpenRoundsWon(true),
        setPlayer1Score(null),
        setPlayer2Score(null),
        setScore(null),
        setGameOver(false),
        setWinner(null);
    }
  };

  const findWinner = () => {
    if (gameOver) {
      if (player1Score === "you lose") {
        setWinner(player2);
      } else if (player2Score === "you lose") {
        setWinner(player1);
      } else if (player1Score === "Cee Lo" || player1Score === "trips") {
        setWinner(player1);
      } else if (player2Score === "Cee Lo" || player2Score === "trips") {
        setWinner(player2);
      } else if (
        player2Score !== null &&
        player1Score !== null &&
        player1Score > player2Score
      ) {
        setWinner(player1);
      } else if (
        player1Score !== null &&
        player2Score !== null &&
        player1Score === player2Score
      ) {
        setWinner("Nobody");
      } else {
        setWinner(player2);
      }
    }
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
                      placeholder="Your name"
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
                      placeholder="Your homie's name"
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
        <div className="mt-4 flex justify-center space-x-16">
          <div className="flex flex-col items-center">
            <p className="font-sans text-gray-500 text-lg">Player 1</p>
            <p className="-mt-2 text-white text-3xl -rotate-6">{player1}</p>
            <p
              className={`h-6 pt-1 font-sans ${
                winner === player1
                  ? "text-green-500"
                  : winner === player2 || player1Score === "you lose"
                  ? "text-red-500"
                  : "text-gray-300"
              } text-2xl`}
            >
              {player1Score !== null ? `${player1Score}` : ""}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-sans text-gray-500 text-lg">Player 2</p>
            <p className="-mt-2 text-white text-3xl -rotate-6">{player2}</p>
            <p
              className={`h-6 pt-1 font-sans ${
                winner === player2
                  ? "text-green-500"
                  : winner === player1 || player2Score === "you lose"
                  ? "text-red-500"
                  : "text-gray-300"
              } text-2xl`}
            >
              {delayedPlayer2Score !== null ? `${delayedPlayer2Score}` : ""}
            </p>
          </div>
        </div>
      )}

      {player1 && player2 && (
        <div className="text-center mt-10">
          <div className="flex justify-center space-x-4">
            {rolls.map((roll, idx) => {
              const isScoreDie =
                score === roll.toString() &&
                rolls.filter((r) => r === roll).length === 1;
              const scoreDieClass = isScoreDie
                ? "animate-scale-up-and-rotate-forwards"
                : "animate-scale-up-and-rotate";
              switch (roll) {
                case 1:
                  return <One key={idx} className={scoreDieClass} />;
                case 2:
                  return <Two key={idx} className={scoreDieClass} />;
                case 3:
                  return <Three key={idx} className={scoreDieClass} />;
                case 4:
                  return <Four key={idx} className={scoreDieClass} />;
                case 5:
                  return <Five key={idx} className={scoreDieClass} />;
                case 6:
                  return <Six key={idx} className={scoreDieClass} />;
                default:
                  return null;
              }
            })}
          </div>
          {hasRolled && score && (
            <div>
              <div className="mt-6 text-center text-2xl text-gray-500 font-sans">
                Score:
              </div>
              <div className="mt-4 text-center text-3xl md:text-7xl text-gray-200 font-mono">
                {delayedScore}
              </div>
            </div>
          )}
        </div>
      )}

      {delayedWinner && (
        <div className="mt-16 flex flex-col items-center">
          <p className="text-4xl md:text-7xl animate-pulse text-white">
            {delayedWinner}
            <span className="text-gray-300 text-3xl md:text-6xl"> wins!</span>
          </p>
        </div>
      )}

      {player1 && player2 && gameOver == false && (
        <div className="absolute bottom-20 w-full flex justify-center items-center">
          <div className="flex flex-col items-center text-white">
            <p>
              {!player1Score ? `${player1}` : `${player2}`}
              <span className="text-gray-500 font-sans">&apos;s turn:</span>
            </p>
            <button
              type="button"
              className="mt-2 rounded-full px-24 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow font-sans"
              onClick={handleRoll}
            >
              Throw Dice
            </button>
          </div>
        </div>
      )}

      {gameOver && (
        <div className="absolute bottom-20 w-full flex justify-center items-center">
          <div className="flex flex-col items-center text-white">
            <button
              type="button"
              className="mt-2 rounded-full px-24 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow font-sans"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {!player1 && !player2 && (
        <div className="absolute bottom-64 w-full flex justify-center items-center">
          <button
            type="button"
            className="rounded-full px-24 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fadca] animate-gradientFlow font-sans"
            onClick={() => setOpen(true)}
          >
            Start 2 Player Game
          </button>
        </div>
      )}
      <Transition.Root show={openRoundsWon} as={Fragment}>
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 animate-gradientFlow">
                      <img src="/img/logos/three-dice.png" alt="three dice" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 font-sans"
                      >
                        Rounds Won:
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-lg text-gray-700">
                          {player1}:{" "}
                          <span className="font-sans">{player1WinCount}</span>
                        </p>
                        <p className="text-lg text-gray-700">
                          {player2}:{" "}
                          <span className="font-sans">{player2WinCount}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans animate-gradientFlow"
                      onClick={() => setOpenRoundsWon(false)}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
