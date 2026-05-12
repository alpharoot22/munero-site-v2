import type { Metadata } from "next";
import { PricingHero } from "../../components/product/PricingHero";
import { PricingClose } from "../../components/home-v2/PricingClose";
import { FAQ } from "../../components/home-v2/FAQ";
import { FinalCTA } from "../../components/home-v2/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Four plans, one workspace. Start at $99 one-time. Keep signals running from $49 a month. Scale to multi-client on Agency.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingClose />
      <FAQ />
      <FinalCTA />
    </>
  );
}
