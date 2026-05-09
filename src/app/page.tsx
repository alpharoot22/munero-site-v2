import { Hero } from "../components/home/Hero";
import { WhyMunero } from "../components/home/WhyMunero";
import { ZeroToCampaign } from "../components/home/ZeroToCampaign";
import { Problem } from "../components/home/Problem";
import { Personas } from "../components/home/Personas";
import { HowItWorks } from "../components/home/HowItWorks";
import { Sources } from "../components/home/Sources";
import { AgencyTease } from "../components/home/AgencyTease";
import { WhatYouGet } from "../components/home/WhatYouGet";
import { Lifecycle } from "../components/home/Lifecycle";
import { Compare } from "../components/home/Compare";
import { Platform } from "../components/home/Platform";
import { Assistants } from "../components/home/Assistants";
import { Integrations } from "../components/home/Integrations";
import { Pricing } from "../components/home/Pricing";
import { FAQ } from "../components/home/FAQ";
import { FinalCTA } from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyMunero />
      <ZeroToCampaign />
      <Problem />
      <Personas />
      <HowItWorks />
      <Sources />
      <AgencyTease />
      <WhatYouGet />
      <Lifecycle />
      <Compare />
      <Platform />
      <Assistants />
      <Integrations />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
