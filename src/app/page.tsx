import CaseStudyHighlight from "@/Components/CaseStudy";
import ExpertiseSection from "@/Components/Expertise/Index";
import HeroSection from "@/Components/Hero/Hero";
import JobSearch from "@/Components/JobSearch";
import StrategicPartnerships from "@/Components/Partnership";
import ResultsSection from "@/Components/Results";
import ServicesSection from "@/Components/ServicesSection/Index";
import TestimonialSection from "@/Components/TeastimonialSection";
import TrustedBySection from "@/Components/TrustedBySection";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
export default function Home() {
  return (
    <div>
      <HeroSection
      imageUrl="/Hero.jpg"
      title="Where Vision Meets Execution"
      description="Propel your business forward with specialised recruitment and business consulting tailored to your industry needs."
      buttonText="Begin your success story"
      buttonLink="/signup"        // <-- wherever you want it to go
    />
      <JobSearch />
      <TrustedBySection />
      <CaseStudyHighlight />
      <ServicesSection />
      <StrategicPartnerships />
      <WhyPartnerSection />
      <TestimonialSection />
      <ResultsSection />
      <ExpertiseSection />
    </div>
  );
}
