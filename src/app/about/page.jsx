import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurApproach from "@/components/about/OurApproach";
import LicenseSection from "@/components/about/LicenseSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <OurStory />

      <OurApproach />

      <LicenseSection />

      <FinalCTA />
    </main>
  );
}
