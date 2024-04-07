"use client";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    question: "What is Cee Lo?",
    answer: `Cee Lo (pronounced "See Low") is a game played with three six-sided dice. The name comes from the Chinese sì-wŭ-liù (四五六), meaning "four five six" because rolling a 4, 5, 6 is the goal.`,
  },
  {
    question: "How do you play?",
    answer: `Each player rolls all three dice at once. If two dice are the same number, the player's score for that round is the value of the third die. If no doubles are found, roll again. The higher score wins.`,
  },
  {
    question: "What are the special rolls?",
    answer: `4, 5, 6 is Cee Lo and is an automatic win. Three of a kind (aka "trips") is also an automatic win. 1, 2, 3 is an automatic loss.`,
  },
  {
    question:
      "What is the difference between Free Throw and 2 Player game modes?",
    answer: `2 Player mode accepts two names and offers an interactive flow that enforces game rules to determine a winner. Free Throw allows for unlimited rolls to find Cee Lo scores. Free Throw can be used for IRL games if nobody has dice or if more than 2 people are playing.`,
  },
];

export default function FAQ() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            About
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? <p>-</p> : <p>+</p>}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300 font-sans">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
