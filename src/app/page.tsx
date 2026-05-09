import { Hero } from "../components/home/Hero";
import { ReplaceDeliverMarquee } from "../components/home/ReplaceDeliverMarquee";
import { Problem } from "../components/home/Problem";
import { Personas } from "../components/home/Personas";
import { ZeroToCampaign } from "../components/home/ZeroToCampaign";
import { TraditionalVsMunero } from "../components/home/TraditionalVsMunero";
import { WhatYouGet } from "../components/home/WhatYouGet";
import { Compare } from "../components/home/Compare";
import { Pricing } from "../components/home/Pricing";
import { AgencyTease } from "../components/home/AgencyTease";
import { FAQ } from "../components/home/FAQ";
import { FinalCTA } from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ReplaceDeliverMarquee />
      <Problem />
      <Personas />
      <ZeroToCampaign />
      <TraditionalVsMunero />
      <WhatYouGet />
      <Compare />
      <Pricing />
      <AgencyTease />
      <FAQ />
      <FinalCTA />
    </>
  );
}
