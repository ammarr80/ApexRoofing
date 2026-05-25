import ServiceAreasHero from "./Hero";
import AreasGrid from "./AreasGrid";
import AreaServices from "./AreasServices";
import WhyLocal from "./Local";
import AreasMap from "./AreasMap";
import AreasCTA from "./CTA";

export default function ServiceAreasPage() {
  return (
    <main>
      <ServiceAreasHero />
      <AreasGrid />
      <AreaServices />
      <WhyLocal />
      <AreasMap />
      <AreasCTA />
    </main>
  );
}