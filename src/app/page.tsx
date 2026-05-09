import { Hero } from "../components/home/Hero";
import { Problem } from "../components/home/Problem";
import { HowItWorks } from "../components/home/HowItWorks";
import { Sources } from "../components/home/Sources";
import { WhatYouGet } from "../components/home/WhatYouGet";
import { Platform } from "../components/home/Platform";
import { Pricing } from "../components/home/Pricing";
import { FAQ } from "../components/home/FAQ";
import { FinalCTA } from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Sources />
      <WhatYouGet />
      <Platform />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
