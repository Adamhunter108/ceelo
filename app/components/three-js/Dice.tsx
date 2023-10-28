"use client";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

interface DiceProps {
  number: number;
}

export default function Dice({ number }: DiceProps) {
  const diceTextures = [
    useLoader(TextureLoader, "/img/sides/1.png"),
    useLoader(TextureLoader, "/img/sides/2.png"),
    useLoader(TextureLoader, "/img/sides/3.png"),
    useLoader(TextureLoader, "/img/sides/4.png"),
    useLoader(TextureLoader, "/img/sides/5.png"),
    useLoader(TextureLoader, "/img/sides/6.png"),
  ];

  // Select the appropriate texture based on the number
  let currentTexture = diceTextures[number - 1];

  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={currentTexture} />
    </mesh>
  );
}
