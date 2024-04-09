"use client";
import { useState } from "react";

import Information from "@/components/information";
import PrimaryNavbar from "@/components/primaryNavbar";
import SecondaryNavbar from "@/components/secondaryNavbar";

export default function Home() {
  const [actualSection, setActualSection] = useState("Inventario");

  return (
    <main className="relative flex h-screen w-screen flex-col bg-gradient-to-b from-background from-65% to-primary">
      <PrimaryNavbar actualSection={actualSection} />
      <div className="relative flex h-[87%] flex-col justify-between md:flex-row-reverse">
        <Information />
        <SecondaryNavbar setActualSection={setActualSection} />
      </div>
    </main>
  );
}
