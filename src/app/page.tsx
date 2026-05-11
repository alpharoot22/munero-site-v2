import { Hero } from "../components/home-v2/Promise";
import { HowItWorks } from "../components/home-v2/HowItWorks";
import { WhatYouGet } from "../components/home-v2/WhatYouGet";
import { Integrations } from "../components/home-v2/Integrations";
import { PricingClose } from "../components/home-v2/PricingClose";
import { FinalCTA } from "../components/home-v2/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <Integrations />
      <PricingClose />
      <FinalCTA />
    </>
  );
}
