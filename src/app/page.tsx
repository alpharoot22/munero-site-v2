import { Hero } from "../components/home-v2/Promise";
import { ReplaceDeliverMarquee } from "../components/home/ReplaceDeliverMarquee";
import { HowItWorks } from "../components/home-v2/HowItWorks";
import { WhatYouGet } from "../components/home-v2/WhatYouGet";
import { Integrations } from "../components/home-v2/Integrations";
import { PricingClose } from "../components/home-v2/PricingClose";
import { FinalCTA } from "../components/home-v2/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ReplaceDeliverMarquee />
      <HowItWorks />
      <WhatYouGet />
      <Integrations />
      <PricingClose />
      <FinalCTA />
    </>
  );
}
