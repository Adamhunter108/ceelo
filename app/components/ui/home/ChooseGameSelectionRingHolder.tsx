"use client";

export default function ChooseGameSelectionRingHolder({ children }: any) {
  return (
    <div className="group relative flex aspect-square items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="flex h-full w-full items-center justify-center"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#selection-holder)"
          strokeWidth="4"
        />
      </svg>
      <div className="absolute flex aspect-square w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
