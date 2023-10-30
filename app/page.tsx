import Link from "next/link";
import One from "./components/die-sides/One";
import Two from "./components/die-sides/Two";
import Three from "./components/die-sides/Three";
import Four from "./components/die-sides/Four";
import Five from "./components/die-sides/Five";
import Six from "./components/die-sides/Six";
import ChooseGameMode from "./components/ui/home/ChooseGameMode";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <div className="mt-8 flex justify-center">
        <img
          src="/img/logos/ceelo-logo-1.png"
          className="w-96"
          alt="Cee Lo logo"
        />
      </div>
      <div className="-mt-10 flex justify-center space-x-4">
        <Four />
        <Five />
        <Six />
      </div>
      <div className="mt-4 flex justify-center animate-pulse">
        <p className="text-gray-300">Choose game mode</p>
      </div>
      <div className="mt-6">
        <ChooseGameMode />
      </div>
    </main>
  );
}
