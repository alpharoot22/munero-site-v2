import type { Metadata } from "next";
import { ProductHero } from "../../components/product/ProductHero";
import { HowItWorks } from "../../components/home-v2/HowItWorks";
import { IntelligenceSquads } from "../../components/product/IntelligenceSquads";
import { AIAssistants } from "../../components/product/AIAssistants";
import { BriefAnatomy } from "../../components/product/BriefAnatomy";
import { Integrations } from "../../components/home-v2/Integrations";
import { FAQ } from "../../components/home-v2/FAQ";
import { FinalCTA } from "../../components/home-v2/FinalCTA";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How Munero works: 16 intelligence squads, 9 AI assistants, and a structured brief in 35 minutes. The full product breakdown.",
};

export default function FeaturesPage() {
  return (
    <>
      <ProductHero />
      <HowItWorks />
      <IntelligenceSquads />
      <AIAssistants />
      <BriefAnatomy />
      <Integrations />
      <FAQ />
      <FinalCTA />
    </>
  );
}
