import One from "./components/die-sides/One";
import Two from "./components/die-sides/Two";
import Three from "./components/die-sides/Three";
import Four from "./components/die-sides/Four";
import Five from "./components/die-sides/Five";
import Six from "./components/die-sides/Six";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <div className="mt-24 flex justify-center space-x-4">
        <p></p>
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
      </div>
    </main>
  );
}
