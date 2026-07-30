import { useParams } from "react-router-dom";

import Hero from "./Hero"
import Trust from "./Trust";
import Overview from "./Overview";
import Offer from "./Offer";
import Benefits from "./Benefits";
import Process from "./Process";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import CTA from "./CTA";

import services from "./Detail";

export default function ServicesExtend() {
    const { slug } = useParams();

    const service = services.find(
        item => item.slug === slug
    );

    if (!service) {
        return <h1>Service not found.</h1>
    }

    return (
        <>
      <Hero data={service.hero} service={service} />
      <Trust data={service.trust} />
      <Overview data={service.overview} />
      <Offer data={service.offer} />
      <Benefits data={service.benefits} />
      <Process data={service.process} />
      <Pricing data={service.pricing} />
      <FAQ data={service.faq} />
      <Reviews data={service.reviews} />
      <CTA data={service.cta} />  
        </>
    )
}