"use client";

import Information from "@/components/information";
import PrimaryNavbar from "@/components/primaryNavbar";
import SecondaryNavbar from "@/components/secondaryNavbar";
import ModalBase from "@/components/modals/modalBase";
import { useModal } from "@/states/showModal";

export default function Home() {
  const isOpen = useModal((state) => state.showModal);
  return (
    <main className="relative flex h-screen w-screen flex-col bg-gradient-to-b from-background from-65% to-primary">
      <ModalBase isOpen={isOpen} />
      <PrimaryNavbar />
      <div className="relative flex h-[87%] flex-col justify-between md:flex-row-reverse">
        <Information />
        <SecondaryNavbar />
      </div>
    </main>
  );
}
