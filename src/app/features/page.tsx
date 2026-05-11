import type { Metadata } from "next";
import { Hero } from "../../components/home-v2/Promise";
import { HowItWorks } from "../../components/home-v2/HowItWorks";
import { WhatYouGet } from "../../components/home-v2/WhatYouGet";
import { OutputProof } from "../../components/home-v2/OutputProof";
import { Integrations } from "../../components/home-v2/Integrations";
import { PricingClose } from "../../components/home-v2/PricingClose";
import { FAQ } from "../../components/home-v2/FAQ";
import { FinalCTA } from "../../components/home-v2/FinalCTA";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Munero turns market signals into campaign briefs, creative assets, and next actions. Three layers, one workspace.",
};

export default function FeaturesPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <OutputProof />
      <Integrations />
      <PricingClose />
      <FAQ />
      <FinalCTA />
    </>
  );
}
