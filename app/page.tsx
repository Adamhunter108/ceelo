import Four from "./components/die-sides/Four";
import Five from "./components/die-sides/Five";
import Six from "./components/die-sides/Six";
import ChooseGameMode from "./components/ui/home/ChooseGameMode";

export default function Home() {
  return (
    <main className="bg-gray-800">
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
