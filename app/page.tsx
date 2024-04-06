import Information from "@/components/information";
import PrimaryNavbar from "@/components/primaryNavbar";
import SecondaryNavbar from "@/components/secondaryNavbar";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col justify-between bg-gradient-to-b from-background from-65% to-primary">
      <PrimaryNavbar actualSection="Home" />
      <div className="flex h-full flex-col sm:flex-row-reverse">
        <Information />
        <SecondaryNavbar />
      </div>
    </main>
  );
}
