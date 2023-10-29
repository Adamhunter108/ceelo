import One from "./components/die-sides/One";
import Two from "./components/die-sides/Two";
import Three from "./components/die-sides/Three";
import Four from "./components/die-sides/Four";
import Five from "./components/die-sides/Five";
import Six from "./components/die-sides/Six";

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
        <One />
        <Two />
        <Three />
        {/* <Four />
        <Five />
        <Six /> */}
      </div>
      <div className="mt-10 flex justify-center animate-pulse">
        <p className="text-gray-300">Choose your game mode</p>
      </div>
      <div className="mt-6 flex justify-center space-x-5">
        <div className="rounded-full bg-cyan-500 w-20 h-20"></div>
        <div className="rounded-full bg-cyan-500 w-20 h-20"></div>
      </div>
    </main>
  );
}
