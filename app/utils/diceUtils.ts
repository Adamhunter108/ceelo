export function randomRotateClass() {
  const classes = [
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-2",
    "rotate-3",
    "-rotate-3",
    "rotate-6",
    "-rotate-6",
    "rotate-12",
    "-rotate-12",
  ];
  return classes[Math.floor(Math.random() * classes.length)];
}

export function aRollOfTheDice(): number[] {
  let result: number[] = [];
  for (let i = 0; i < 3; i++) {
    result.push(Math.floor(Math.random() * 6) + 1);
  }
  return result;
}

export function findScore(roll: number[]): string | null {
  function countOccurrences(arr: number[], val: number): number {
    return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  }

  const sortedRoll = [...roll].sort((a, b) => a - b);

  if (sortedRoll.join(",") === "1,2,3") return "loss";
  if (sortedRoll.join(",") === "4,5,6") return "Cee Lo";
  if (new Set(sortedRoll).size === 1) return "trips";

  for (let num of roll) {
    if (countOccurrences(roll, num) === 2) {
      return roll.find((n) => n !== num)!.toString();
    }
  }

  return null;
}
