import AboutHero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Approach from "./approach";
import WhyUs from "./why";
import CTA from "./cta";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <Approach />
      <WhyUs />
      <CTA />
    </main>
  );
}