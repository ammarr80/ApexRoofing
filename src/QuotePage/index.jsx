import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Trust from "./TrustBadges";
import QuoteForm from "./QuoteForm"
import Process from "./Process";
import Emergency from "./Emergency";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function QuotePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Trust />
            <QuoteForm />
            <Process />
            <Emergency />
            <FAQ />
            <FinalCTA />
        </>
    )
}