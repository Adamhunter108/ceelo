import GameScene from "./components/GameScene";
import Box from "./components/Box";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Home() {
  return (
    // <main className="">
    //   <div className="">
    //     <p>Cee Lo</p>
    //     {/* <GameScene /> */}
    //     <Box />
    //   </div>
    // </main>
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
