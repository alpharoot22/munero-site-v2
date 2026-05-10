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
    title: "Munero — Your Marketing Intelligence Workspace",
    description:
      "Know your market. Run better campaigns. Never guess again. 16 intelligence squads. First brief in 35 minutes.",
    url: "https://munero.ai",
    siteName: "Munero",
    images: [
      {
        url: "https://munero.ai/og",
        width: 1200,
        height: 630,
        alt: "Munero — Marketing Intelligence Workspace",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munero — Your Marketing Intelligence Workspace",
    description:
      "Know your market. Run better campaigns. Never guess again.",
    images: ["https://munero.ai/og"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased overflow-x-hidden`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TopBanner />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
