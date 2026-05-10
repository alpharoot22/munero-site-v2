import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";
import { TopBanner } from "../components/TopBanner";
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
    default: "Munero · Your Marketing Intelligence Workspace",
    template: "%s · Munero",
  },
  description:
    "Munero is a marketing intelligence workspace for DTC founders, agencies, and in-house marketers. First brief ready in 35 minutes. Built on real customer behavior. Starting at $99.",
  openGraph: {
    title: "Munero · Your Marketing Intelligence Workspace",
    description:
      "Marketing intelligence workspace. First brief ready in 35 minutes. Built on real customer behavior. Starting at $99.",
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
        <TopBanner />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
