import { Hero } from "../components/home/Hero";
import { ReplaceDeliverMarquee } from "../components/home/ReplaceDeliverMarquee";
import { Problem } from "../components/home/Problem";
import { Personas } from "../components/home/Personas";
import { IntelligenceCore } from "../components/home/IntelligenceCore";
import { SampleProof } from "../components/home/SampleProof";
import { TraditionalVsMunero } from "../components/home/TraditionalVsMunero";
import { Workspace } from "../components/home/Workspace";
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
      <IntelligenceCore />
      <SampleProof />
      <TraditionalVsMunero />
      <Workspace />
      <Compare />
      <Pricing />
      <AgencyTease />
      <FAQ />
      <FinalCTA />
    </>
  );
}
