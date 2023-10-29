"use client";

import randomRotateClass from "../../utils/randomRotateClass";

export default function Four() {
  return (
    <div className="">
      <div
        className={`outline outline-2 h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 bg-gray-200 rounded-2xl shadow-2xl transform p-2 md:p-3 lg:p-4 hover:scale-150 transition duration-700 hover:rotate-180 hover:shadow-2xl ${randomRotateClass()}`}
      >
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full top-3 left-3 md:top-4 md:left-4 lg:top-4 lg:left-4"></div>
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full top-3 right-3 md:top-4 md:right-4 lg:top-4 lg:right-4"></div>
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full bottom-3 left-3 md:bottom-4 md:left-4 lg:bottom-4 lg:left-4"></div>
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full bottom-3 right-3 md:bottom-4 md:right-4 lg:bottom-4 lg:right-4"></div>
      </div>
    </div>
  );
}
