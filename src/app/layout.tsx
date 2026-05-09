import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://munero.ai"),
  title: {
    default: "Munero · Know what works before you spend",
    template: "%s · Munero",
  },
  description:
    "Munero builds complete campaign briefs in 35 minutes using 16 intelligence squads. Know exactly what message will work before you spend on ads. $99 per brief, no subscription.",
  openGraph: {
    title: "Munero: Know what works before you spend",
    description:
      "Complete campaign briefs in 35 minutes. 16 intelligence squads. 46 creative assets. $99 one-time.",
    type: "website",
    url: "https://munero.ai",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
