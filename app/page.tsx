"use client";  // Isso deve ser colocado no topo do arquivo

import { useEffect } from "react";
import { getWeapon } from "../ficha-automatica/src/equipment/weapons";
import BaseInfo from "../ficha-automatica/components/character/baseInfo";
import HitPointsPanel from "../ficha-automatica/components/character/hitPointsPanel";

export default function Home() {
  useEffect(() => {
    console.log(getWeapon('Longbow'));
  }, []); // O array vazio garante que isso só seja chamado uma vez quando o componente for montado

  return (
    <div>
    <main className="min-h-screen p-4 flex flex-col md:flex-row gap-4 bg-zinc-950 text-white">
      <BaseInfo />
      <HitPointsPanel />
    </main>
    </div>
  );
}