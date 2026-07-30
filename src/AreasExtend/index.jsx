import { useParams } from "react-router-dom"
import areas from "./Detail"

import Hero from "./Hero";
import Trust from "./Trust";
import Overview from "./Overview";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import NearbyAreas from "./NearbyAreas";
import Process from "./Process";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Location from "./Location";

export default function AreasExtend() {
    const { slug } = useParams();

    const area = areas.find(item => item.slug === slug);

    if (!area) {
        return <h1>Area not found</h1>;
    }

    return (
        <>
<Hero data={area.hero} area={area} />
      <Trust data={area.trust} />
      <Overview data={area.overview} area={area}/>
      <Services area={area} />
      <WhyChooseUs data={area.whyChooseUs} area={area} />
      <NearbyAreas data={area.nearbyAreas} area={area} />
      <Process data={area.process} area={area} />
      <FAQ data={area.faq} area={area} />
      <Reviews data={area.reviews} area={area} />
      <CTA data={area.cta} area={area} />
        </>
    )
}