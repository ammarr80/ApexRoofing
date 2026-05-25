import ContactHero from "./Hero";
import ContactForm from "./Form";
import QuickContact from "./Quick";
import ContactMap from "./Map";
import ContactEmergency from "./Emergency";
import ContactCTA from "./CTA";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <QuickContact />
      <ContactMap />
      <ContactEmergency />
      <ContactCTA />
    </main>
  );
}