"use client";

import randomRotateClass from "../../utils/randomRotateClass";

export default function Six() {
  return (
    <div className="">
      <div
        className={`outline outline-2 h-36 w-36 bg-gray-200  rounded-2xl shadow-x2l transform flex justify-between p-4 hover:scale-150 transition duration-700 hover:rotate-180 hover:shadow-2xl ${randomRotateClass()}`}
      >
        <div className="absolute w-8 h-8 bg-black rounded-full top-4 left-4"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full top-4 right-4"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full bottom-4 left-4"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full bottom-4 right-4"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full top-1/2 left-4 transform -translate-y-1/2"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full top-1/2 right-4 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
}
