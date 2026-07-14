import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import Pillars from "./sections/Pillar";
import Stats from "./sections/Stats";
import BentoFeature from "./sections/BentoFeature";
import TrustIndicators from "./sections/TrustIndicators";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <Hero />
        <TrustedBy />
        <Pillars />
        <Stats />
        <BentoFeature />
        <TrustIndicators />
      </main>
      <Footer />
    </>
  );
}