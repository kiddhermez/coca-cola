import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";
import "./globals.css";

const font = Font({ weight: ["400"], subsets: ["latin"] });

// Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);

export const metadata: Metadata = {
  title: "Coca-Cola app",
  description: "An app to manage the coca-cola's inventory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>{children}</body>
    </html>
  );
}
