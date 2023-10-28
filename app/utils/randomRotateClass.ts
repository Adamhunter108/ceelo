export default function randomRotateClas() {
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
