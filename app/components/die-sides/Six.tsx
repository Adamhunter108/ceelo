"use client";

import randomRotateClass from "../../utils/randomRotateClass";

export default function Six() {
  return (
    <div className="">
      <div
        className={`outline outline-2 h-36 w-36 bg-gray-200  rounded-2xl shadow-x2l transform flex justify-between p-4 hover:scale-150 transition duration-700 hover:rotate-180 hover:shadow-2xl ${randomRotateClass()}`}
      >
        <div className="space-y-4 pt-1">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
        <div className="space-y-4 pt-1">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
        <div className="space-y-4 pt-1">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
