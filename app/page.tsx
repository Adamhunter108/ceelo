import Link from "next/link";
import Four from "./components/die-sides/Four";
import Five from "./components/die-sides/Five";
import Six from "./components/die-sides/Six";
import ChooseGameMode from "./components/ui/home/ChooseGameMode";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <Link href="/about">
        <div className="pt-2 flex justify-center -mb-14 ml-64">
          <img
            src="/img/logos/ceelo-info-white-i.png"
            className="w-12 relative z-60 hover:rotate-[360deg] transition duration-700"
            alt="Cee Lo info"
          />
        </div>
      </Link>
      <div className="flex justify-center">
        <img
          src="/img/logos/ceelo-logo-1-stroke.png"
          className="w-96"
          alt="Cee Lo logo"
        />
      </div>
      <div className="-mt-16 flex justify-center space-x-4">
        <Four />
        <Five />
        <Six />
      </div>
      <div className="mt-4 flex justify-center animate-pulse">
        <p className="text-gray-300 font-mono">Choose game mode</p>
      </div>
      <div className="mt-3">
        <ChooseGameMode />
      </div>
    </main>
  );
}
