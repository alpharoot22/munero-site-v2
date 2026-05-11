import { Hero } from "../components/home-v2/Promise";
import { HowItWorks } from "../components/home-v2/HowItWorks";
import { OutputProof } from "../components/home-v2/OutputProof";
import { ConnectedWorkspace } from "../components/home-v2/ConnectedWorkspace";
import { Integrations } from "../components/home-v2/Integrations";
import { TrustStrip } from "../components/home-v2/TrustStrip";
import { PricingClose } from "../components/home-v2/PricingClose";
import { FinalCTA } from "../components/home-v2/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <OutputProof />
      <ConnectedWorkspace />
      <Integrations />
      <TrustStrip />
      <PricingClose />
      <FinalCTA />
    </>
  );
}
