"use client";

import randomRotateClass from "../../utils/randomRotateClass";

export default function Three() {
  return (
    <div className="">
      <div
        className={`outline outline-2  h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 bg-gray-200  rounded-2xl shadow-2xl transform flex justify-between p-4 hover:scale-150 transition duration-700 hover:rotate-180 hover:shadow-2xl ${randomRotateClass()}`}
      >
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full top-4 left-4"></div>
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black rounded-full bottom-4 right-4"></div>
      </div>
    </div>
  );
}
