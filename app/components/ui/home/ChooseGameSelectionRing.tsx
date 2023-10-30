"use client";

export default function ChooseGameSelectionRing({ children }: any) {
  return (
    <div className="group relative flex aspect-square items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="flex h-full w-full items-center justify-center animate-spin"
        style={{ animation: "spin 6s linear infinite" }}
      >
        <defs>
          <linearGradient id="selection-gradient">
            <stop offset="0%" style={{ stopColor: "#E1394D" }} />
            <stop offset="50%" style={{ stopColor: "#E97138" }} />
            <stop offset="100%" style={{ stopColor: "#4FADCA" }} />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#selection-gradient)"
          strokeWidth="4"
        />
        {/* <foreignObject width="100%" height="100%"></foreignObject> */}
      </svg>
      <div className="absolute flex aspect-square w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}
