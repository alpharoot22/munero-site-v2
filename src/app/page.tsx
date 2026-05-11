import { Hero } from "../components/home-v2/Promise";
import { HowItWorks } from "../components/home-v2/HowItWorks";
import { ConnectedWorkspace } from "../components/home-v2/ConnectedWorkspace";
import { Integrations } from "../components/home-v2/Integrations";
import { PricingClose } from "../components/home-v2/PricingClose";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ConnectedWorkspace />
      <Integrations />
      <PricingClose />
    </>
  );
}
