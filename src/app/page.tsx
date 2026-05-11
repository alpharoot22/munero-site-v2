import { Hero } from "../components/home-v2/Promise";
import { HowItWorks } from "../components/home-v2/HowItWorks";
import { Integrations } from "../components/home-v2/Integrations";
import { PricingClose } from "../components/home-v2/PricingClose";
import { MinimalFooter } from "../components/home-v2/MinimalFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Integrations />
      <PricingClose />
      <MinimalFooter />
    </>
  );
}
